import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Pharos',
  code: 'pharos',
  network: 'mainnet',
  type: 'evm',
  chainId: '1672',
  explorer: 'https://pharosscan.xyz/',
  tokens: {
    usdc: '0xC879C018dB60520F4355C26eD1a6D572cdAC1815',
    weth: '0x52C48d4213107b20bC583832b0d951FB9CA8F0B0',
    feeToken: '0xC879C018dB60520F4355C26eD1a6D572cdAC1815',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
