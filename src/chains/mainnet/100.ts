import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Gnosis',
  code: 'gnosis',
  network: 'mainnet',
  type: 'evm',
  chainId: '100',
  explorer: 'https://gnosisscan.io/',
  tokens: {
    usdc: '0x2a22f9c3b484c3629090FeED35F17Ff8F88f76F0', // USDC.e, bridged
    weth: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
    feeToken: '0x2a22f9c3b484c3629090FeED35F17Ff8F88f76F0',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
