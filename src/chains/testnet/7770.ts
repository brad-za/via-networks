import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'PandaSea Testnet',
  code: 'pandasea',
  network: 'testnet',
  type: 'evm',
  chainId: '7770',
  tokens: {
    weth: '0x0000000000000000000000000000000000000000',
    feeToken: '0x0000000000000000000000000000000000000000',
  },
  contracts: {
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
