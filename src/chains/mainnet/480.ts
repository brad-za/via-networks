import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Worldchain',
  code: 'world',
  network: 'mainnet',
  type: 'evm',
  chainId: '480',
  explorer: 'https://worldscan.org/',
  tokens: {
    usdc: '0x79A02482A880bCE3F13e09Da970dC34db4CD24d1',
    weth: '0x4200000000000000000000000000000000000006',
    feeToken: '0x79A02482A880bCE3F13e09Da970dC34db4CD24d1',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
