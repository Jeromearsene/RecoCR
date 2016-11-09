const electron = require('electron');
const {ipcMain, app, BrowserWindow} = require('electron');

const storage = require('electron-json-storage');

var mainWindow = null;


app.on('ready', function () {
    const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize

    // Initialize the window to our specified dimensions
    mainWindow = new BrowserWindow({width, height});
    //mainWindow.webContents.openDevTools();


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


ipcMain.on('loadNewImage', (event) =>
{
    let counter = 0;

    storage.get('counter', function(error, data){
        if (error) throw error;
        console.log("data: " + JSON.stringify(data));
        counter ++;
        console.log(counter);
    });

    console.log(counter);

    storage.set('counter', {counter: counter}, function(error) {
        if (error) throw error;

    });
})