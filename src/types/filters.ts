import type { NetworkEnv, ChainType } from './base.js';

export type CollectionFilter = 'mainnet' | 'testnet' | 'evm' | 'midnight' | 'solana' | 'reef' | 'all';

export interface CompoundFilter {
  network?: NetworkEnv;
  type?: ChainType;
}
