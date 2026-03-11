import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Polygon',
  code: 'pol',
  network: 'mainnet',
  type: 'evm',
  chainId: '137',
  explorer: 'https://polygonscan.com/',
  tokens: {
    usdc: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
    eurc: '0x18ec0A6E18E5bc3784fDd3a3669906d2bfc5075c',
    weth: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    feeToken: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
  },
  contracts: {},
  cctp: {},
};

export default chain;
