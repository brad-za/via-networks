import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Base Mainnet',
  code: 'base',
  network: 'mainnet',
  type: 'evm',
  chainId: '8453',
  explorer: 'https://basescan.org/',
  tokens: {
    usdc: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
    weth: '0x4200000000000000000000000000000000000006',
    feeToken: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
    gateway: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
