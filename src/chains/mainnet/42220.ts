import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'CELO',
  code: 'celo',
  network: 'mainnet',
  type: 'evm',
  chainId: '42220',
  explorer: 'https://celoscan.io/',
  tokens: {
    usdc: '0xcebA9300f2b948710d2653dD7B07f33A8B32118C',
    weth: '0x471EcE3750Da237f93B8E339c536989b8978a438',
    feeToken: '0xcebA9300f2b948710d2653dD7B07f33A8B32118C',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
