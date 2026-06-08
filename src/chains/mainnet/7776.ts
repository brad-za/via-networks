import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'PandaSea Mainnet',
  code: 'pandasea',
  network: 'mainnet',
  type: 'evm',
  chainId: '7776',
  explorer: 'https://explorer.pandasea.io/',
  tokens: {
    weth: '0xd865113b9A8b5635D437e29BF6826c95C3E10961',
    feeToken: '0xd865113b9A8b5635D437e29BF6826c95C3E10961',
  },
  contracts: {
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
