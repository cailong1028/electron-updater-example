const {app, BrowserWindow, Menu, protocol, ipcMain, dialog} = require('electron');
const ProgressBar = require('electron-progressbar');
// const log = require('electron-log');
const {autoUpdater} = require("electron-updater");
const log4js = require('log4js');

log4js.configure({
    appenders: {
        fileLogs: {
            type: 'file',
            filename: 'log/log4js.log',
            maxLogSize: 1024,
            backups: 3,
            // pattern: '-yyyy-MM-dd.log',
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

const AppUpdater = require('./lib/AppUpdater_by_electron_updater');

let log, win;

if (process.env.NODE_ENV === 'development'.trim()) {
    log = log4js.getLogger('console');
} else {
    log = log4js.getLogger();
}

autoUpdater.logger = log;
log.info('App starting...');

let template = [], updateMenu;

function createDefaultWindow() {
    win = new BrowserWindow();
    global.win = win;
    win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    });
    win.loadURL(`file://${__dirname}/dist/index.html#v${app.getVersion()}`);
    win.on('focus', () => {
        // win.setProgressBar(1);
    });
    win.on('blur', () => {
        win.setProgressBar(0);
    });
    win.setProgressBar(0.5);
    //win.setOverlayIcon('./ico.ico', 'this is a ico');
    return win;
}

function sendMessagesToRenderProcess(){
    win.webContents.send('message', 'ipc send message test');
}

function progressBarShow(){
    const progressBar = new ProgressBar({
        indeterminate: false,
        abortOnError: false,
        initialValue: 0,
        maxValue: 100,
        closeOnComplete: true,
        title: '下载文件',
        text: '下载进度',
        detail: '版权家更新文件下载进度', //应该动态更新
        style: {
            text: {color: 'red'},
            detail: {color: 'green'},
            bar: {'width':'100%', 'background-color':'#BBE0F1'},
            value: {'background-color':'#0976A9'},
        },
        browserWindow: {
            parent: win,
            modal: true,
            resizable: false,
            closable: false,
            minimizable: false,
            maximizable: false,
            width: 450,
            height: 175,
        }
    });
    const intervalValue = setInterval(function() {
        if(!progressBar.isCompleted()){
            progressBar.value += 1;
        }
    }, 20);
    progressBar.getOptions();
    progressBar.on('ready', ()=>{
        log.info('progress bar ready');
    });
    //only for determinate, fired when bar`s value changed
    progressBar.on('progress', value=>{
        progressBar.detail = `Value ${value} out of ${progressBar.getOptions().maxValue}...`;
        log.info('progress bar value now is ' + value);
    });
    //when bar`s value reaches max or method complete is called
    progressBar.on('completed', value=>{
        log.info('progress bar complete now is ' + value);
        clearInterval(intervalValue);
        progressBar.close();

    });
    progressBar.on('aborted', value=>{
        log.info('progress bar aborted now is ' + value);
        clearInterval(intervalValue);
        progressBar.close();
    });
}

app.on('ready', function () {
    // Create the Menu
    const appUpdater = new AppUpdater();

    if (process.platform === 'darwin') {
        // OS X
        const name = app.getName();
        template.unshift({
            label: name,
            submenu: [
                {
                    label: 'About ' + name,
                    role: 'about'
                },
                {
                    label: 'Quit',
                    accelerator: 'Command+Q',
                    click() {
                        app.quit();
                    }
                },
            ]
        })
    } else {
        //change some thing
        const name2 = app.getName();
        template.push({
            label: name2,
            submenu: [
                {
                    label: 'About ' + name2,
                    role: 'about'
                }, {
                    label: 'check update by electron default update',
                    enable: true,
                    click(menuItem, focusedWindow, event) {
                        // updateMenu = menuItem;
                        // updateMenu.enable = false;
                        // autoUpdater.checkForUpdates();
                        appUpdater.checkUpdate(menuItem, focusedWindow, event);
                    }
                }, {
                    label: 'check update by electron progressbar',
                    enable: true,
                    click(menuItem, focusedWindow, event) {
                        const AppUpdater = require('./lib/AppUpdater');
                        app.updater = new AppUpdater(win);
                        app.updater.checkUpdate();
                    }
                }, {
                    label: 'check update by react UI',
                    enable: true,
                    click(menuItem, focusedWindow, event) {
                        const AppUpdater = require('./lib/AppUpdater_by_react_ui');
                        app.updater = new AppUpdater();
                        app.updater.checkUpdate();
                    }
                }, {
                    label: 'progressbar',
                    enable: true,
                    click(menuItem, focusedWindow, event){
                        progressBarShow();
                    }
                },{
                    label: 'dialog',
                    enable: true,
                    click(menuItem, focusedWindow, event){
                        dialog.showMessageBox(win,{
                            type: 'question',
                            title: '提示',
                            message: '发现新版本是否更新',
                            buttons: ['立即更新', '下载再说'],
                        },(buttonIndex) => {
                            if(buttonIndex === 0){
                                console.log(1);
                            }else{
                                console.log(2);
                            }
                        });
                    }
                }, {
                    label: 'Exit',
                    accelerator: 'Ctrl+C',
                    click() {
                        app.quit();
                    }
                }
            ]
        });
    }
    createDefaultWindow();
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
    //页面加载完毕之后再操作
    win.webContents.on('did-finish-load', () => {
        sendMessagesToRenderProcess();
        //如果不是菜单控制自动更新，自动更新需要在did-finish-load之后执行，例如
        // const AppUpdater = require('./lib/AppUpdater_by_react_ui');
        // app.updater = new AppUpdater();
        // app.updater.checkUpdate();
    });
    //加载home component
    // win.webContents.loadURL('http://www.baidu.com');
});
app.on('window-all-closed', () => {
    app.quit();
});
