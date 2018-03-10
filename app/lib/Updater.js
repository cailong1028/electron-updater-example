'use strict';
const os = require('os');
const fs = require('fs');
const readline = require('readline');
const url = require('url');
const path = require('path');
const http = require('http');
const querystring = require('querystring');
const util = require('util');
const events = require('events');
const EventEmitter = events.EventEmitter;
const child_process = require('child_process');

//third part module
// const {app} = require('electron');
const log4js = require('log4js');

//files
const packageJson = require('../../package');

let log;

//log目录
const updateLogPath = path.join(os.homedir(), './bqj_update_log');

log4js.configure({
    appenders: {
        fileLogs: {
            type: 'file',
            filename: path.join(updateLogPath, './log4js.log'),
            maxLogSize: 2*1024*1024,
            backups: 100,
            //numBackups: 5,
            encoding: 'utf-8',
            // compress: true, // compress the backups
        },
        console: {type: 'console'}
    },
    categories: {
        fileLogs: {appenders: ['fileLogs'], level: 'info'},
        console: {appenders: ['console'], level: 'info'},
        default: {appenders: ['fileLogs', 'console'], level: 'info'}
    }
});

if ((process.env.NODE_ENV || '').trim() === 'development') {
    log = log4js.getLogger('console');
} else {
    //默认default
    log = log4js.getLogger('console');
}

function pick(obj, keys) {
    var result = {};
    if (obj == null) return result;
    for (var i = 0, length = keys.length; i < length; i++) {
        var key = keys[i];
        var value = obj[key];
        if(value === null || value == undefined) continue;
        result[key] = value;
    }
    return result;
}

//
function maxInStringArray(stringArr){
    let max = '';
    for(let one of stringArr){
        if(max < one){
            max = one;
        }
    }
    return max;
}

function Updater(){
    this.__init.apply(this,  Array.prototype.slice.call(arguments));
}

util.inherits(Updater, EventEmitter);

Object.assign(Updater.prototype, {
    __init: function() {
        this.defaultOptions = {
            // protocol: 'http:',
            host: '127.0.0.1',
            port: 80,
            path: '/',
            method: 'GET',
            // encode: 'UTF-8',
            headers: {
                'Content-Type': 'application/octet-stream',
                'charset': 'utf-8',
                //'Content-Type': 'application/x-www-form-urlencoded',
                //'Content-Type': 'application/json',
                //'Content-Length' : contents.length
            },
            //指定更新版本
            designatedVersion: null,

        };

        let args = Array.prototype.slice.call(arguments);
        if (args.length < 1) {
            log.error('Updater ERROR: need argument');
            return;
        }
        if (args.length > 1 && typeof args[1] === 'function') {
            this.callback = args[1];
        }
        this.options = Object.assign({}, this.defaultOptions, pick(args[0], ['host', 'port', 'path', 'method', 'updateDone']));
        //路径完善
        /[^\/]$/.test(this.options.path) ? this.options.path += '/' : void 0;
        this.options.method = this.options.method.toUpperCase();
        if (this.options.method.toLowerCase() === 'get' && this.options.query) {
            this.queryString = querystring.stringify(this.options.query);
            this.options.path += '?' + this.queryString;
        } else {
            if (this.options.body) {
                this.bodyString = JSON.stringify(this.options.body);
                //this.options.headers['Content-Length'] = this.bodyString.length
                //when you want to find the content length of string, always use Buffer.byteLength
                this.options.headers['Content-Length'] = Buffer.byteLength(this.bodyString);
            }
        }
        if (this.options.headers && this.options.headers.contentType) {
            this.options.headers['Content-Type'] = this.options.headers.contentType;
        }

        this.encode = this.options.encode;
        this.designatedVersion = this.options.designatedVersion;
        //应该更新的版本和安装包名称信息
        this.shouldUpdateVersionInfo = null;
        //服务端更新文件列表
        this.updateVersionInfos = {};
        //文件临时目录
        this.tempPath = path.join(os.tmpdir(), './bqj');
        this.updateDone = this.options.updateDone || function () {};
    },
    checkURL(){
        const req = http.request(self.options, res => {
            //
        });
        req.on('close', function(){
            log.info('checkURL connection closed');
        });
        req.on('error', err => {
            //ECONNREFUSED
            if(err.code === 'ECONNREFUSED'){
                log.error('checkURL fatal ' + err.stack);
                this.emit('error', '无法连接到更新服务器');
                reject('无法连接到更新服务器');
            }else{
                log.error('checkURL fatal ' + err.stack);
                this.emit('error', err);
                reject(err);
            }
        });
        req.end();
    },
    checkingForUpdate(){
        let self = this;
        self.emit('checking-for-update');
        //host, post, path
        //update-available update-not-available
        //更新列表文件路径
        const versionCheckFileNamePath = 'latest.yml';
        // check更新规则
        // 有没有指定更新的版本，有的话那指定版本对比当前版本
        // 没有指定版本，拿最大版本对比当前版本
        return  new Promise((resolve, reject) => {
            try{
                let req = http.request(Object.assign({}, self.options, {path: self.options.path+versionCheckFileNamePath}), (res) => {
                    if(res.statusCode >= 400){
                        const errStr = 'checkingForUpdate http error: ' + res.statusCode + ', ' +
                            self.host+':'+self.options.port+self.options.path+versionCheckFileNamePath + 'source not found';
                        log.error(errStr);
                        self.emit('error', errStr);
                        return reject(errStr);
                    }
                    //按行读stream模式
                    const rl = readline.createInterface({
                        input: res,
                        // output: process.stdout
                    });
                    res.on('data', chunk => {
                        log.info(chunk);
                    });
                    let currVersionNumber;
                    rl.on('line', (input) => {
                        log.info(input);
                        // 测试字符串 version: 1.0.0.1
                        const matchedVersionLine = input.match(/^\s*version\s*:/gi);
                        // 测试字符串 path: BanQuanJia_3.0-1.0.0.1-win.exe
                        const matchedPathLine = input.match(/^\s*path\s*:/gi);
                        if(matchedVersionLine){
                            currVersionNumber = input.substring(matchedVersionLine[0].length).trim();
                            return ;
                        }
                        if(matchedPathLine){

                            let path = input.substring(matchedPathLine[0].length).trim();
                            self.updateVersionInfos[currVersionNumber] = {
                                version: currVersionNumber,
                                path: path
                            };
                            currVersionNumber = null;
                            return ;
                        }
                    });

                    rl.on('close', () => {

                    });
                    //写文件方式
                    // let ws = fs.createWriteStream(path.join(self.tempPath, versionCheckFileNamePath),  {
                    //     flags: 'w',
                    //     encoding: 'utf8',
                    //     fd: null,
                    //     //mode: 0o666,
                    //     autoClose: true
                    // });
                    // res.pipe(ws);
                    res.on('end', () => {
                        rl.close();
                        // = updateVersions;
                        if(self.designatedVersion){
                            //指定更新版本时
                            if(self.updateVersionInfos[self.designatedVersion]){
                                if(packageJson.version.trim() >= self.designatedVersion){
                                    const infoStr = `current version ${self.designatedVersion} is higher than designatedVersion ${self.designatedVersion}`;
                                    log.warn(infoStr);
                                    self.emit('update-not-available', infoStr);
                                    reject(infoStr);
                                }else{
                                    self.shouldUpdateVersionInfo = self.updateVersionInfos[self.designatedVersion];
                                    self.emit('update-available', self.shouldUpdateVersionInfo);
                                    resolve(self.shouldUpdateVersionInfo);
                                }
                            }else{
                                const infoStr = `there is no designated update version ${self.designatedVersion} in update file list`;
                                log.warn(infoStr);
                                self.emit('update-not-available', infoStr);
                                reject(infoStr);
                            }
                        }else{
                            //未指定更新版本
                            const maxVersion = maxInStringArray(Object.keys(self.updateVersionInfos));
                            if(packageJson.version.trim() >= maxVersion){
                                const infoStr = `current version ${self.designatedVersion} is higher than max version in update file list`;
                                log.warn(infoStr);
                                self.emit('update-not-available', infoStr);
                                reject(infoStr);
                            }else{
                                self.shouldUpdateVersionInfo = self.updateVersionInfos[maxVersion];
                                self.emit('update-available', self.shouldUpdateVersionInfo);
                                resolve(self.shouldUpdateVersionInfo);
                            }
                        }
                    });
                    res.on('error', (err) => {
                        reject(err);
                        rl.close();
                    })
                });
                req.on('error', err => {
                    //ECONNREFUSED
                    if(err.code === 'ECONNREFUSED'){
                        log.error(`checkingForUpdate fatal ${err.stack}`);
                        this.emit('error', '无法连接到更新服务器');
                        reject('无法连接到更新服务器');
                    }else{
                        log.error(`checkingForUpdate fatal ${err.stack}`);
                        this.emit('error', err);
                        reject(err);
                    }
                });
                req.end(() => {
                    log.info('checkVersion done');
                });
            }catch(e){
                log.error(e.stack);
            }

        });

        // checkVersion().then((shouldUpdateVersionInfo) => {
        //     //通知有更新版本
        //     self.emit('update-available', shouldUpdateVersionInfo);
        //     //downloadUpdateFile(shouldUpdateVersionInfo).then();
        // }).catch(err => {
        //     self.emit('update-not-available', err);
        // })

    },
    downloadUpdate(){
        const self = this;
        return new Promise((resolve, reject) => {
            if(!self.shouldUpdateVersionInfo){
                const infoStr = 'there is no should update version, fail to download update';
                log.warn(infoStr);
                return reject(infoStr);
            }

            //encodeURIComponent，中文名转码
            let req = http.request(Object.assign({}, self.options, {path: self.options.path + encodeURIComponent(self.shouldUpdateVersionInfo.path)}), (res) => {
                if(res.statusCode >= 400){
                    const errStr = `downloadUpdate http error: ${res.statusCode}`;
                    log.error(errStr);
                    self.emit('error', errStr);
                    return reject(res);
                }
                //TODO 检测temp文件夹是否存在，不存在，先创建
                //判断本地是否已经存在文件，比如上次更新时已经下载了此文件，但是在windows UAC的时候选择了否，导致没有更新，但更新文件存在
                const downloadedFilePath = path.join(self.tempPath, self.shouldUpdateVersionInfo.path);
                if(!fs.existsSync(self.tempPath)){
                    fs.mkdirSync(self.tempPath);
                }
                let localFile;
                try{
                    localFile = fs.statSync(downloadedFilePath);
                    if(localFile && localFile.size === parseInt(res.headers['content-length'])){
                        let progressObj = {total: localFile.size};
                        progressObj.transferred = localFile.size;
                        progressObj.bytesPerSecond = 1;
                        progressObj.percent = 100;

                        self.emit('download-progress', progressObj);
                        log.info(`${downloadedFilePath} file already exists`);
                        self.emit('update-downloaded', {downloadedFilePath: downloadedFilePath});
                        resolve({downloadedFilePath: downloadedFilePath});
                        //不再需要服务端传递IncomingMessage 的 res，关闭req
                        req.end();
                        return;
                    }else{
                        log.info(`${downloadedFilePath} file not exists or damaged, will download from server`);
                    }
                }catch(e){
                    log.info(`${downloadedFilePath} file not exists or damaged, will download from server`);
                }

                let ws = fs.createWriteStream(downloadedFilePath, {
                    flags: 'w',
                    autoClose: true
                });
                res.pipe(ws);
                //res.setEncoding(self.encode);
                const beginTime = new Date().getTime();
                let transferred = 0;
                let progressObj = {total: res.headers['content-length']};
                res.on('data', function(chunk) {
                    transferred += chunk.length;
                    const now = new Date().getTime();
                    progressObj.transferred = transferred;
                    progressObj.bytesPerSecond = transferred / ((now - beginTime) * 1000);
                    progressObj.percent = Math.trunc(transferred/progressObj.total * 100);

                    log.info(Math.trunc(transferred/progressObj.total * 100)+'%');
                    self.emit('download-progress', progressObj);
                });
                res.on('end', () => {
                    log.info('downloadUpdate end: ');
                    self.emit('update-downloaded', {downloadedFilePath: downloadedFilePath});
                    resolve({downloadedFilePath: downloadedFilePath});
                    ws.end();
                });
                res.on('error', (err) => {
                    log.error('downloadUpdate connection response: ' + err.stack);
                    self.emit('error', err);
                    reject(err);
                });
            });
            req.on('close', function(){
                log.info('downloadUpdate connection closed');
            });
            req.on('error', err => {
                //ECONNREFUSED
                if(err.code === 'ECONNREFUSED'){
                    log.error(`downloadUpdate fatal ${err.stack}`);
                    this.emit('error', '无法连接到更新服务器');
                    reject('无法连接到更新服务器');
                }else{
                    log.error(`downloadUpdate fatal ${err.stack}`);
                    this.emit('error', err);
                    reject(err);
                }
            });
            req.end(() => {

            });
        });
    },
    setFeedURL(baseUrl){
        const urlObject = url.parse(baseUrl);
        this.options.protocol = urlObject.protocol;
        this.options.host = urlObject.hostname;
        this.options.port = urlObject.port;
        this.options.path = urlObject.path;
    },
    getFeedURL(){
        return this.options.protocol + '://' + this.options.host + ':' + this.options.port + '/' + this.options.path;
    },
    //关闭当前app，并执行安装
    quitAndInstall(){
        //下载文件的socket以及本地文件的io连接可能还没有关闭，nextTick执行
        process.nextTick(this.execUpdate.bind(this));
    },
    execUpdate(){
        const downloadedFilePath = path.join(this.tempPath, this.shouldUpdateVersionInfo.path);
        const args = [];
        //静默安装
        // args.push("/S");
        args.push("--force-run");
        const spawnOptions = {
            detached: true,
            stdio: "ignore"
        };
        try{
            //当前用户执行
            //(0, child_process.spawn)(msg.downloadedFilePath, args, spawnOptions).unref()
            //申请提权执行
            //exec
            const shell = `powershell.exe Start-Process -FilePath "'${downloadedFilePath}'" -WindowStyle hidden -Verb runAs`;
            const child = (0, child_process.exec)(shell, spawnOptions, (err, stdout, stderr) => {
                if(err){
                    log.error(err);
                    //如果命令执行失败，比如用户在UAC选项的时候选择了否
                    this.emit('error', err);
                    return;
                }
                log.info(`stdout: ${stdout}`);
                //console.error(`stdout: ${stdout}`);
                this.updateDone();
            });
            //spawn 方式测试没有相应，暂时使用exec
            // const command = 'powershell.exe';
            // const spawnArgs = 'Start-Process -FilePath "\''+downloadedFilePath+'\'" -WindowStyle hidden -Verb runAs';
            // console.log(spawnArgs.split(' '));
            // const child = (0, child_process.spawn)(command, spawnArgs.split(' '), spawnOptions);
            // child.stdout.on('data', (data) => {
            //     log.info(data);
            // });
            // child.stderr.on('data', (data) => {
            //     log.error(data);
            // });
            // child.on('close', () => {
            //     log.info('exe close');
            // });
        }catch(e){
            console.log(e);
            //EACCES表示权限问题
            if (e.code === 'UNKNOWN' || e.code === 'EACCES') {
                console.log('Access denied or UNKNOWN error code on spawn, will be executed again using elevate');
            } else {
                //this.dispatchError(e);
            }
            process.exit();
        }
    }
    //TODO 安装完成之后删除下载的文件
});

module.exports = Updater;