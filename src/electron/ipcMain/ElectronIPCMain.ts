import {
  ipcMain,
  app,
  BrowserWindow
} from 'electron'

import {
  CLOSE,
  MAXIMIZE,
  MINIMIZE,
  UNMAXIMIZE
} from '@/electron/ipcInterface/mainProcess/ElectronIPCInterface'

export class ElectronIpcMain {
  constructor (mainWindow: BrowserWindow) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ipcMain.handle(MINIMIZE, async (_event) => {
      mainWindow.minimize()
    })

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ipcMain.handle(MAXIMIZE, async (_event) => {
      mainWindow.maximize()
    })

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ipcMain.handle(UNMAXIMIZE, async (_event) => {
      mainWindow.unmaximize()
    })

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ipcMain.handle(CLOSE, async (_event) => {
      app.quit()
    })
  }
}
