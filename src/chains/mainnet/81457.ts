import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Blast',
  code: 'blast',
  network: 'mainnet',
  type: 'evm',
  chainId: '81457',
  explorer: 'https://blastscan.io/',
  tokens: {
    usdc: '0x4300000000000000000000000000000000000003', // USDB — no USDC on chain
    weth: '0x4300000000000000000000000000000000000004',
    feeToken: '0x4300000000000000000000000000000000000003',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
