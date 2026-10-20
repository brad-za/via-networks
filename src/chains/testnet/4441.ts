import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'LitVM LiteForge',
  code: 'litvm',
  network: 'testnet',
  type: 'evm',
  chainId: '4441',
  explorer: 'https://liteforge.explorer.caldera.xyz/',
  tokens: {
    // Native gas token is zkLTC — no wrapped/fee token addresses known yet
    weth: '0x0000000000000000000000000000000000000000',
    feeToken: '0x0000000000000000000000000000000000000000',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
