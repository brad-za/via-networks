import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Flare',
  code: 'flr',
  network: 'mainnet',
  type: 'evm',
  chainId: '14',
  explorer: 'https://flare-explorer.flare.network/',
  tokens: {
    usdc: '0xFbDa5F676cB37624f28265A144A48B0d6e87d3b6', // USDC.e, bridged
    weth: '0x1D80c49BbBCd1C0911346656B529DF9E5c2F783d',
    feeToken: '0xFbDa5F676cB37624f28265A144A48B0d6e87d3b6',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
