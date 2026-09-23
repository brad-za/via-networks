import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Plume',
  code: 'plume',
  network: 'mainnet',
  type: 'evm',
  chainId: '98866',
  explorer: 'https://explorer.plume.org/',
  tokens: {
    usdc: '0x222365EF19F7947e5484218551B56bb3965Aa7aF',
    weth: '0xEa237441c92CAe6FC17Caaf9a7acB3f953be4bd1',
    feeToken: '0x222365EF19F7947e5484218551B56bb3965Aa7aF',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
