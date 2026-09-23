import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Citrea',
  code: 'citrea',
  network: 'mainnet',
  type: 'evm',
  chainId: '4114',
  explorer: 'https://explorer.mainnet.citrea.xyz/',
  tokens: {
    usdc: '0xE045e6c36cF77FAA2CfB54466D71A3aEF7bbE839', // USDC.e, bridged
    weth: '0x3100000000000000000000000000000000000006',
    feeToken: '0xE045e6c36cF77FAA2CfB54466D71A3aEF7bbE839',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
