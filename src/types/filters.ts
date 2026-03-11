import type { NetworkEnv, ChainType } from './base.js';

export type CollectionFilter = NetworkEnv | ChainType | 'all';

export interface CompoundFilter {
  network?: NetworkEnv;
  type?: ChainType;
}
