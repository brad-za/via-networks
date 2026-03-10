export type NetworkEnv = 'mainnet' | 'testnet';
export type ChainType = 'evm' | 'midnight' | 'solana' | 'reef';

export interface BaseChainConfig {
  chainId: number;
  name: string;
  code: string;
  network: NetworkEnv;
  type: ChainType;
}
