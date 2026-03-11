import type { ChainConfig, CollectionFilter, CompoundFilter } from './types/index.js';
import registry from './registry.js';

const COLLECTION_FILTERS: Set<string> = new Set([
  'mainnet', 'testnet', 'evm', 'midnight', 'solana', 'reef', 'cardano', 'stellar', 'all',
]);

function viaChain(filter: string): ChainConfig | ChainConfig[] | undefined;
function viaChain(filter: CompoundFilter): ChainConfig[];
function viaChain(input: string | CompoundFilter): ChainConfig | ChainConfig[] | undefined {
  if (typeof input !== 'string') {
    const chains = Array.from(registry.values());
    return chains.filter(c => {
      if (input.network && c.network !== input.network) return false;
      if (input.type && c.type !== input.type) return false;
      return true;
    });
  }

  if (COLLECTION_FILTERS.has(input)) {
    const chains = Array.from(registry.values());
    if (input === 'all') return chains;
    if (input === 'mainnet' || input === 'testnet') return chains.filter(c => c.network === input);
    return chains.filter(c => c.type === input as CollectionFilter);
  }

  return registry.get(input);
}

viaChain.isSupported = (chainId: string): boolean => registry.has(chainId);

viaChain.isEvm = (chainId: string): boolean => {
  const chain = registry.get(chainId);
  return chain?.type === 'evm';
};

viaChain.isMidnight = (chainId: string): boolean => {
  const chain = registry.get(chainId);
  return chain?.type === 'midnight';
};

viaChain.isSolana = (chainId: string): boolean => {
  const chain = registry.get(chainId);
  return chain?.type === 'solana';
};

viaChain.isReef = (chainId: string): boolean => {
  const chain = registry.get(chainId);
  return chain?.type === 'reef';
};

export default viaChain;
export * from './types/index.js';
