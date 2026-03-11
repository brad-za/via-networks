import type { ChainConfig, CollectionFilter, CompoundFilter } from './types/index.js';
import registry from './registry.js';

function viaChain(id: number): ChainConfig | undefined;
function viaChain(filter: CollectionFilter): ChainConfig[];
function viaChain(filter: CompoundFilter): ChainConfig[];
function viaChain(input: number | CollectionFilter | CompoundFilter): ChainConfig | ChainConfig[] | undefined {
  if (typeof input === 'number') {
    return registry.get(input);
  }

  const chains = Array.from(registry.values());

  if (typeof input === 'string') {
    if (input === 'all') return chains;
    if (input === 'mainnet' || input === 'testnet') return chains.filter(c => c.network === input);
    return chains.filter(c => c.type === input);
  }

  return chains.filter(c => {
    if (input.network && c.network !== input.network) return false;
    if (input.type && c.type !== input.type) return false;
    return true;
  });
}

viaChain.isSupported = (chainId: number): boolean => registry.has(chainId);

viaChain.isEvm = (chainId: number): boolean => {
  const chain = registry.get(chainId);
  return chain?.type === 'evm';
};

viaChain.isMidnight = (chainId: number): boolean => {
  const chain = registry.get(chainId);
  return chain?.type === 'midnight';
};

viaChain.isSolana = (chainId: number): boolean => {
  const chain = registry.get(chainId);
  return chain?.type === 'solana';
};

viaChain.isReef = (chainId: number): boolean => {
  const chain = registry.get(chainId);
  return chain?.type === 'reef';
};

export default viaChain;
export * from './types/index.js';
