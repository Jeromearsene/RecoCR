const electron = require('electron');
const {ipcMain, app, BrowserWindow} = require('electron');

const storage = require('electron-json-storage');
// storage.clear(function(error) {
//     if (error) throw error;
// });

let mainWindow = null;
let counter;

storage.has('counter', function(error, hasKey) {
    if (error) throw error;

    if (!hasKey)
        counter = 0;

    else
    {
        storage.get('counter', function(error, data)
        {
            if (error) throw error;
            counter = data;
        });
    }
});


app.on('ready', (event, webContents, request, authInfo, callback) => {
    const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize

    // Initialize the window to our specified dimensions
    mainWindow = new BrowserWindow({width, height});
    mainWindow.webContents.openDevTools();


    // Tell Electron where to load the entry point from
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.webContents.send('counter', counter);
    });

    // Clear out the main window when the app is closed
    mainWindow.on('closed', function () {
        mainWindow = null
    });

});


app.on('window-all-closed', function () {
    app.quit();
});


ipcMain.on('loadNewImage', (event) =>
{
    storage.get('counter', function (error, data)
    {
        if (error)
            throw error
        else
        {
            const counterUpdated = ++data;
            storage.set('counter', counterUpdated, function (error)
            {
                if (error)
                    throw error;
                else
                {
                    event.sender.send('counter', counterUpdated);
                    counter = counterUpdated;
                }
            });
        }
    })


});