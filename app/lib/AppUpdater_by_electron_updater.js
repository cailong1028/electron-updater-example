//import {autoUpdater} from 'electron-updater';
const {autoUpdater} = require("electron-updater");
const {dialog} = require('electron');

let updateMenu;

class AppUpdater{

    checkUpdate(menuItem, focusedWindow, event) {
        updateMenu = menuItem;
        updateMenu.enable = false;
        autoUpdater.checkForUpdates();
    }

    constructor(){
        let sendStatusToWindow = (text) => {
            global.win.webContents.send('message', text);
        };
        autoUpdater.on('checking-for-update', () => {
            sendStatusToWindow('Checking for update...');
        })
        autoUpdater.on('update-available', (info) => {
            sendStatusToWindow('Update available.');
            dialog.showMessageBox({
                type: 'info',
                title: 'there is new version',
                message: 'do you want to update your application now?',
                buttons: [
                    'yes', 'no'
                ]
            }, (buttonIndex) => {
                if (buttonIndex === 0) {
                    autoUpdater.downloadUpdate();
                } else {
                    updateMenu.enabled = true;
                    updateMenu = null;
                }
            });
        });
        autoUpdater.on('update-not-available', (info) => {
            sendStatusToWindow('Update not available.');
            dialog.showMessageBox({
                title: 'no updates now',
                message: 'current version is up-to-date'
            });
            updateMenu.enable = true;
            updateMenu = null;
        });
        autoUpdater.on('error', (err) => {
            sendStatusToWindow('Error in auto-updater. ' + err);
            dialog.showErrorBox('Error: ', error ? (error.stack || error).toString() : 'Unknown error');
        });
        autoUpdater.on('download-progress', (progressObj) => {
            let log_message = "Download speed: " + progressObj.bytesPerSecond;
            log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
            log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
            sendStatusToWindow(log_message);
        });
        autoUpdater.on('update-downloaded', (info) => {
            sendStatusToWindow('Update downloaded');
            dialog.showMessageBox({
                title: 'install updates',
                message: 'Updates downloaded, application will be quit for update...'
            }, () => {
                setImmediate(() => {
                    autoUpdater.quitAndInstall();
                });
            });
        });
    }
}

module.exports = AppUpdater;