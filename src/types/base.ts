export type NetworkEnv = 'mainnet' | 'testnet';
export type ChainType = 'evm' | 'midnight' | 'solana' | 'reef' | 'cardano' | 'stellar';

export interface BaseChainConfig {
  chainId: number;
  name: string;
  code: string;
  network: NetworkEnv;
  type: ChainType;
}
