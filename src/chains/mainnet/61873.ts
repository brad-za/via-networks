import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Upside Mainnet',
  code: 'upside',
  network: 'mainnet',
  type: 'evm',
  chainId: '61873',
  tokens: {
    weth: '0x0000000000000000000000000000000000000000',
    feeToken: '0x0000000000000000000000000000000000000000',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
    gateway: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
