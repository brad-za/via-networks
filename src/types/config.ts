export interface ViaGlobalConfig {
  provider?: 'default' | 'alchemy' | 'infura';
  accountant?: { mainnet: string; testnet: string };
}
