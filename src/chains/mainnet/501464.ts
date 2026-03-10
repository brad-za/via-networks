import type { SolanaChainConfig } from '../../types/index.js';

const chain: SolanaChainConfig = {
  name: 'Solana Mainnet',
  code: 'solana',
  network: 'mainnet',
  type: 'solana',
  chainId: 501464,
  rpc: { default: 'https://api.mainnet-beta.solana.com' },
  explorer: 'https://explorer.solana.com/',
  tokens: {
    usdc: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    eurc: 'HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr',
  },
  contracts: {
    message: '',
  },
};

export default chain;
