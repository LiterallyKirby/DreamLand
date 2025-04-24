const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true, // Enable nodeIntegration (use with caution)
      contextIsolation: false, // For Vue to work correctly
    }
  });

  // Load Vue app when in dev mode
  mainWindow.loadURL('http://localhost:5174');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
