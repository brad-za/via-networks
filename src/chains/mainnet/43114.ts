import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Avalanche',
  code: 'avax',
  network: 'mainnet',
  type: 'evm',
  chainId: '43114',
  explorer: 'https://snowtrace.io/',
  tokens: {
    usdc: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
    weth: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    feeToken: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
  },
  contracts: {
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
