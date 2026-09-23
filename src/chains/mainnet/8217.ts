import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Kaia',
  code: 'kaia',
  network: 'mainnet',
  type: 'evm',
  chainId: '8217',
  explorer: 'https://kaiascan.io/',
  tokens: {
    usdc: '0xE2053BCf56D2030d2470Fb454574237cF9ee3D4B', // USDC.e, bridged
    weth: '0x19Aac5f612f524B754CA7e7c41cbFa2E981A4432',
    feeToken: '0xE2053BCf56D2030d2470Fb454574237cF9ee3D4B',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
