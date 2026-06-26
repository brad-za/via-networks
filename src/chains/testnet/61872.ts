import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Upside Testnet',
  code: 'upside',
  network: 'testnet',
  type: 'evm',
  chainId: '61872',
  explorer: 'https://explorer.upside.testnet.zeeve.net/',
  tokens: {
    weth: '0x0000000000000000000000000000000000000000',
    feeToken: '0x0000000000000000000000000000000000000000',
  },
  contracts: {
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
