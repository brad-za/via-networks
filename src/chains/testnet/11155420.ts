import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'OP Sepolia',
  code: 'op',
  network: 'testnet',
  type: 'evm',
  chainId: '11155420',
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
