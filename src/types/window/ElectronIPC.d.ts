interface ElectronIPC {
  minimize: () => Promise<>;
  maximize: () => Promise<boolean>;
  unmaximize: () => Promise<boolean>;
  close: () => Promise<>;
}
