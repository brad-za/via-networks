import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Rootstock',
  code: 'rsk',
  network: 'mainnet',
  type: 'evm',
  chainId: '30',
  explorer: 'https://explorer.rootstock.io/',
  tokens: {
    usdc: '0x74c9f2b00581F1B11AA7ff05aa9F608B7389De67', // USDC.e, bridged
    weth: '0x542fDA317318eBF1d3DEAf76E0b632741A7e677d',
    feeToken: '0x74c9f2b00581F1B11AA7ff05aa9F608B7389De67',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
