import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Arbitrum Sepolia',
  code: 'arb',
  network: 'testnet',
  type: 'evm',
  chainId: '421614',
  explorer: 'https://sepolia.arbiscan.io/',
  tokens: {
    weth: '0x980B62Da83eFf3D4576C647993b0c1D7faf17c73',
    feeToken: '0x0000000000000000000000000000000000000000',
  },
  contracts: {},
  cctp: {},
};

export default chain;
