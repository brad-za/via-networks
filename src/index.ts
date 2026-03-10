import type { ChainConfig, CollectionFilter, CompoundFilter, ViaGlobalConfig } from './types/index.js';
import registry from './registry.js';
import { configure, getConfig } from './config.js';
import { resolveRpc } from './resolve.js';

function via(id: number): ChainConfig | undefined;
function via(filter: CollectionFilter): ChainConfig[];
function via(filter: CompoundFilter): ChainConfig[];
function via(input: number | CollectionFilter | CompoundFilter): ChainConfig | ChainConfig[] | undefined {
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

via.isSupported = (chainId: number): boolean => registry.has(chainId);

via.isEvm = (chainId: number): boolean => {
  const chain = registry.get(chainId);
  return chain?.type === 'evm';
};

via.isMidnight = (chainId: number): boolean => {
  const chain = registry.get(chainId);
  return chain?.type === 'midnight';
};

via.isSolana = (chainId: number): boolean => {
  const chain = registry.get(chainId);
  return chain?.type === 'solana';
};

via.isReef = (chainId: number): boolean => {
  const chain = registry.get(chainId);
  return chain?.type === 'reef';
};

via.rpc = (chainId: number): string | undefined => {
  const chain = registry.get(chainId);
  if (!chain) return undefined;
  if ('rpc' in chain) return resolveRpc(chain.rpc);
  return undefined;
};

via.configure = (config: Partial<ViaGlobalConfig>): void => configure(config);

export default via;
export * from './types/index.js';
