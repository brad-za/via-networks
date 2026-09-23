import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Scroll',
  code: 'scroll',
  network: 'mainnet',
  type: 'evm',
  chainId: '534352',
  explorer: 'https://scrollscan.com/',
  tokens: {
    usdc: '0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4', // bridged
    weth: '0x5300000000000000000000000000000000000004',
    feeToken: '0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
