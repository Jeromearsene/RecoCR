const electron = require('electron');
const app = require('app');
const BrowserWindow = require('browser-window')

var mainWindow = null;


app.on('ready', function () {
    const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize

    // Initialize the window to our specified dimensions
    mainWindow = new BrowserWindow({width, height});

    // Tell Electron where to load the entry point from
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    // Clear out the main window when the app is closed
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});


app.on('window-all-closed', function () {
    app.quit();
});