import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Arbitrum One',
  code: 'arb',
  network: 'mainnet',
  type: 'evm',
  chainId: '42161',
  explorer: 'https://arbiscan.io/',
  tokens: {
    usdc: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
    weth: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    feeToken: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
