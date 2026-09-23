import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'ZKsync Era',
  code: 'zksync',
  network: 'mainnet',
  type: 'evm',
  chainId: '324',
  explorer: 'https://explorer.zksync.io/',
  tokens: {
    usdc: '0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4',
    weth: '0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91',
    feeToken: '0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
