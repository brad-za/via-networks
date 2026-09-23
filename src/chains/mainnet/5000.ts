import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Mantle',
  code: 'mantle',
  network: 'mainnet',
  type: 'evm',
  chainId: '5000',
  explorer: 'https://mantlescan.xyz/',
  tokens: {
    usdc: '0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9', // bridged
    weth: '0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8',
    feeToken: '0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
