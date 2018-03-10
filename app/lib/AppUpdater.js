const {dialog} = require('electron');

const Updater = require('../lib/Updater');
const ProgressBar = require('electron-progressbar');

//需要配置mainWindow，url
class AppUpdater{
    constructor(parentWindow, options){

        this.parent = parentWindow || null;

        //updater
        this.updater = new Updater({
            port: 8080,
            updateDone: function(){
                process.exit();
            }
        });
        this.updater.on('checking-for-update', () => {
            console.log('Checking for update...');
        });
        this.updater.on('update-available', (info) => {
            console.log('check update available...');
            dialog.showMessageBox(this.parent, {
                type: 'info',
                title: '提示',
                message: '发现新版本是否更新',
                buttons: ['立即更新', '以后再说'],
            }, (buttonIndex) => {
                if(buttonIndex === 0){
                    //new AppUpdater(this.parent).checkUpdate();
                    setImmediate(() => {
                        this.showProgressBar();
                        this.updater.downloadUpdate();
                    });
                }
            });

        });
        this.updater.on('update-not-available', (info) => {
            console.log('update not available ' + info);
        });
        this.updater.on('error', (err) => {
            console.log('Error: ', err ? (err.stack || err).toString() : 'Unknown error');
            dialog.showMessageBox({
                type: 'error',
                title: '更新失败',
                message: err.toString()
                // message: '将在下次启动软件时重新更新'
            })
        });
        this.updater.on('download-progress', (progressObj) => {

            let log_message = "Download speed: " + progressObj.bytesPerSecond;
            log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
            log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
            if(!this.progressBar.isCompleted()){
                this.progressBar.value = progressObj.percent;
            }
            // console.log(log_message);
        });
        this.updater.on('update-downloaded', () => {
            setImmediate(() => {
                this.updater.quitAndInstall();
            });
        });
    }
    checkUpdate() {
        this.updater.checkingForUpdate();
    }
    showProgressBar(){
        this.progressBar = new ProgressBar({
            indeterminate: false,
            abortOnError: false,
            initialValue: 0,
            maxValue: 100,
            closeOnComplete: true,
            title: '版权家更新下载',
            text: '下载进度',
            detail: '版权家更新文件下载进度', //动态更新
            style: {
                text: {color: 'red'},
                //detail: {},
                bar: {'width':'100%', 'background-color':'#BBE0F1'},
                value: {'background-color':'#ffd800'},
            },
            browserWindow: {
                parent: this.parent || null,
                modal: true,
                resizable: false,
                closable: false,
                minimizable: false,
                maximizable: false,
                width: 450,
                height: 175,
            }
        });
        this.progressBar.getOptions();
        this.progressBar.on('ready', ()=>{
            console.log('progress bar ready');
        });
        //only for determinate, fired when bar`s value changed
        this.progressBar.on('progress', value=>{
            this.progressBar.detail = `Value ${value} out of ${this.progressBar.getOptions().maxValue}...`;
            console.log(`progress bar value now is ${value}`);
        });
        //when bar`s value reaches max or method complete is called
        this.progressBar.on('completed', value=>{
            console.log(`progress bar complete now is ${value}`);
            this.progressBar.close();
        });
        this.progressBar.on('aborted', value=>{
            console.log(`progress bar aborted now is ${value}`);
            this.progressBar.close();
        });
    }
}

module.exports = AppUpdater;
