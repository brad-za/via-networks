import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'OP BNB Testnet',
  code: 'opbnb',
  network: 'testnet',
  type: 'evm',
  chainId: '5611',
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
