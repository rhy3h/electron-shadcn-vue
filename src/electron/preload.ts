// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge } from 'electron'

import { electronIPC } from '@/electron/ipcInterface/mainProcess/ElectronIPCInterface'

// Renderer Process to Main Process
contextBridge.exposeInMainWorld('Electron', electronIPC)
