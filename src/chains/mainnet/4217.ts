import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Tempo',
  code: 'tempo',
  network: 'mainnet',
  type: 'evm',
  chainId: '4217',
  explorer: 'https://explore.tempo.xyz/',
  tokens: {
    usdc: '0x20C000000000000000000000b9537d11c60E8b50', // USDC.e, bridged; no gas token — fees paid in stablecoins
    weth: '0x0000000000000000000000000000000000000000',
    feeToken: '0x20C000000000000000000000b9537d11c60E8b50',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
