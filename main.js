// This is free and unencumbered software released into the public domain.
// See LICENSE for details

const {app, BrowserWindow, Menu, protocol, ipcMain, dialog} = require('electron');
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

const AppUpdater = require('./AppUpdater');

let log, win;;

//-------------------------------------------------------------------
// Logging
//
// THIS SECTION IS NOT REQUIRED
//
// This logging setup is not required for auto-updates to work,
// but it sure makes debugging easier :)
//-------------------------------------------------------------------

if (process.env.NODE_ENV === 'development'.trim()) {
    log = log4js.getLogger('console');
} else {
    log = log4js.getLogger();
    //electron-log 写入文件，过于简单，使用log4js代替。
    // log.transports.file.level = 'info';
    // log.transports.file.appName = 'test';
    // log.transports.file.format = '{h}:{i}:{s}:{ms} {text}';
    // log.transports.file.file = __dirname + '/log.txt';
    // log.transports.file.streamConfig = { flags: 'w' };
    // log.transports.file.maxSize = 5 * 1024 * 1024;
}

autoUpdater.logger = log;
log.info('App starting...');

//-------------------------------------------------------------------
// Define the menu
//
// THIS SECTION IS NOT REQUIRED
//-------------------------------------------------------------------
let template = [], updateMenu;

//-------------------------------------------------------------------
// Open a window that displays the version
//
// THIS SECTION IS NOT REQUIRED
//
// This isn't required for auto-updates to work, but it's easier
// for the app to show a window than to have to click "About" to see
// that updates are working.
//-------------------------------------------------------------------



global.sendStatusToWindow = function sendStatusToWindow(text) {
    log.info(text);
    win.webContents.send('message', text);
}

function createDefaultWindow() {
    win = new BrowserWindow();
    global.win = win;
    // win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    });
    win.loadURL(`file://${__dirname}/version.html#v${app.getVersion()}`);
    return win;
}

// autoUpdater.on('checking-for-update', () => {
//     sendStatusToWindow('Checking for update...');
// })
// autoUpdater.on('update-available', (info) => {
//     sendStatusToWindow('Update available.');
//     dialog.showMessageBox({
//         type: 'info',
//         title: 'there is new version',
//         message: 'do you want to update your application now?',
//         buttons: [
//             'yes', 'no'
//         ]
//     }, (buttonIndex) => {
//         if (buttonIndex === 0) {
//             autoUpdater.downloadUpdate();
//         } else {
//             updateMenu.enabled = true;
//             updateMenu = null;
//         }
//     });
// });
// autoUpdater.on('update-not-available', (info) => {
//     sendStatusToWindow('Update not available.');
//     dialog.showMessageBox({
//         title: 'no updates now',
//         message: 'current version is up-to-date'
//     });
//     updateMenu.enable = true;
//     updateMenu = null;
// });
// autoUpdater.on('error', (err) => {
//     sendStatusToWindow('Error in auto-updater. ' + err);
//     dialog.showErrorBox('Error: ', error ? (error.stack || error).toString() : 'Unknown error');
// });
// autoUpdater.on('download-progress', (progressObj) => {
//     let log_message = "Download speed: " + progressObj.bytesPerSecond;
//     log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
//     log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
//     sendStatusToWindow(log_message);
// });
// autoUpdater.on('update-downloaded', (info) => {
//     sendStatusToWindow('Update downloaded');
//     dialog.showMessageBox({
//         title: 'install updates',
//         message: 'Updates downloaded, application will be quit for update...'
//     }, () => {
//         setImmediate(() => {
//             autoUpdater.quitAndInstall();
//         });
//     });
// });

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
                    label: 'check update',
                    enable: true,
                    click(menuItem, focusedWindow, event) {
                        // updateMenu = menuItem;
                        // updateMenu.enable = false;
                        // autoUpdater.checkForUpdates();
                        appUpdater.checkUpdate(menuItem, focusedWindow, event);
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

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    createDefaultWindow();
});
app.on('window-all-closed', () => {
    app.quit();
});

//
// CHOOSE one of the following options for Auto updates
//

//-------------------------------------------------------------------
// Auto updates - Option 1 - Simplest version
//
// This will immediately download an update, then install when the
// app quits.
//-------------------------------------------------------------------
app.on('ready', function () {
    //软件启动时自动更新
    //autoUpdater.checkForUpdatesAndNotify();
    //sendStatusToWindow(autoUpdater.getFeedURL());
});

//-------------------------------------------------------------------
// Auto updates - Option 2 - More control
//
// For details about these events, see the Wiki:
// https://github.com/electron-userland/electron-builder/wiki/Auto-Update#events
//
// The app doesn't need to listen to any events except `update-downloaded`
//
// Uncomment any of the below events to listen for them.  Also,
// look in the previous section to see them being used.
//-------------------------------------------------------------------
// app.on('ready', function()  {
//   autoUpdater.checkForUpdates();
// });
// autoUpdater.on('checking-for-update', () => {
// })
// autoUpdater.on('update-available', (info) => {
// })
// autoUpdater.on('update-not-available', (info) => {
// })
// autoUpdater.on('error', (err) => {
// })
// autoUpdater.on('download-progress', (progressObj) => {
// })
// autoUpdater.on('update-downloaded', (info) => {
//   autoUpdater.quitAndInstall();  
// })
