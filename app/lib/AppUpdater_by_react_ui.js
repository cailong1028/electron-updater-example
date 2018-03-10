const {dialog, ipcMain} = require('electron');

const Updater = require('../lib/Updater');

//需要配置mainWindow，url
class AppUpdater{
    constructor(){
        this.content = global.win.webContents;
        this.updater = new Updater({
            host: '123.57.244.52',
            path: '/resources/180310/',
            port: 80,
            updateDone: function(){
                process.exit();
            }
        });
        this.updater.on('checking-for-update', () => {
            console.log('Checking for update...');
        });
        this.updater.on('update-available', (info) => {
            this.content.send('update-available', info);
            console.log('check update available...');
            /*setImmediate(() => {
                this.updater.downloadUpdate();
            });*/
        });
        this.updater.on('update-not-available', (info) => {
            console.log('update not available ' + info);
        });
        this.updater.on('error', (err) => {
            console.log('Error: ', err ? (err.stack || err).toString() : 'Unknown error');
            this.content.send('update-error', err);
            dialog.showMessageBox({
                type: 'error',
                title: '更新失败',
                message: err.toString()
                // message: '将在下次启动软件时重新更新'
            })
        });
        this.updater.on('download-progress', (progressObj) => {
            this.content.send('download-progress', progressObj);
            let log_message = "Download speed: " + progressObj.bytesPerSecond;
            log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
            log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
            console.log(log_message);
        });
        this.updater.on('update-downloaded', () => {
            this.content.send('update-downloaded');
            setImmediate(() => {
                this.updater.quitAndInstall();
            });
        });
        ipcMain.on('begin-to-download-update', this.downloadUpdate.bind(this));
    }
    checkUpdate() {
        this.updater.checkingForUpdate();
    }
    downloadUpdate(){
        this.updater.downloadUpdate();
    }
}

module.exports = AppUpdater;
