import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Stable',
  code: 'stable',
  network: 'mainnet',
  type: 'evm',
  chainId: '988',
  explorer: 'https://stablescan.xyz/',
  tokens: {
    usdc: '0x779Ded0c9e1022225f8E0630b35a9b54bE713736', // USDT0 — gas and ERC-20 on one balance; no USDC on chain
    weth: '0x779Ded0c9e1022225f8E0630b35a9b54bE713736',
    feeToken: '0x779Ded0c9e1022225f8E0630b35a9b54bE713736',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
