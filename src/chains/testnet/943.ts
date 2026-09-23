import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Pulsechain Testnet',
  code: 'pls',
  network: 'testnet',
  type: 'evm',
  chainId: '943',
  explorer: 'https://scan.v4.testnet.pulsechain.com/',
  tokens: {
    weth: '0x0000000000000000000000000000000000000000',
    feeToken: '0x0000000000000000000000000000000000000000',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
