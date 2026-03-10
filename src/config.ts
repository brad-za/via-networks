import type { ViaGlobalConfig } from './types/index.js';

let globalConfig: ViaGlobalConfig = {
  provider: 'default',
};

export function configure(config: Partial<ViaGlobalConfig>): void {
  globalConfig = { ...globalConfig, ...config };
}

export function getConfig(): ViaGlobalConfig {
  return globalConfig;
}
