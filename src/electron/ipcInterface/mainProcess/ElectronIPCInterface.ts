/* eslint-disable no-undef */

import { ipcRenderer } from 'electron'

export const MINIMIZE = 'electron:minimize'
export const MAXIMIZE = 'electron:maximize'
export const UNMAXIMIZE = 'electron:unmaximize'
export const CLOSE = 'electron:close'

export const electronIPC: ElectronIPC = {
  minimize: () => ipcRenderer.invoke(MINIMIZE),
  maximize: () => ipcRenderer.invoke(MAXIMIZE),
  unmaximize: () => ipcRenderer.invoke(UNMAXIMIZE),
  close: () => ipcRenderer.invoke(CLOSE)
}
