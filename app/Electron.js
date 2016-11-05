const electron = require('electron');
const app = require('app');
const BrowserWindow = require('browser-window')

var mainWindow = null;


app.on('ready', function () {

    // Initialize the window to our specified dimensions
    mainWindow = new BrowserWindow({ width: 1200, height: 900, x:0, y:0 });

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