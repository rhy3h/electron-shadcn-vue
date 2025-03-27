import path from 'node:path'

import {
  BrowserWindow
} from 'electron'

export class MainWindow extends BrowserWindow {
  constructor () {
    super({
      width: 1280,
      height: 720,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      },
      titleBarStyle: 'hidden'
    })

    // and load the index.html of the app.
    if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
      this.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL)
    } else {
      this.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`))
    }

    // Open the DevTools.
    this.webContents.openDevTools()
  }
}
