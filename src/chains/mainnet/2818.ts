import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Morph',
  code: 'morph',
  network: 'mainnet',
  type: 'evm',
  chainId: '2818',
  explorer: 'https://explorer.morphl2.io/',
  tokens: {
    usdc: '0xCfb1186F4e93D60E60a8bDd997427D1F33bc372B',
    weth: '0x5300000000000000000000000000000000000011',
    feeToken: '0xCfb1186F4e93D60E60a8bDd997427D1F33bc372B',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
