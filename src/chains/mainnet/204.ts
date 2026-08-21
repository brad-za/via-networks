import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'OP BNB',
  code: 'opbnb',
  network: 'mainnet',
  type: 'evm',
  chainId: '204',
  explorer: 'https://opbnbscan.com/',
  tokens: {
    usdc: '0x9e5AAC1Ba1a2e6aEd6b32689DFcF62A509Ca96f3',
    weth: '0x4200000000000000000000000000000000000006',
    feeToken: '0x9e5AAC1Ba1a2e6aEd6b32689DFcF62A509Ca96f3',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
