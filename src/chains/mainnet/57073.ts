import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Ink',
  code: 'ink',
  network: 'mainnet',
  type: 'evm',
  chainId: '57073',
  explorer: 'https://explorer.inkonchain.com/',
  tokens: {
    usdc: '0x2D270e6886d130D724215A266106e6832161EAEd',
    weth: '0x4200000000000000000000000000000000000006',
    feeToken: '0x2D270e6886d130D724215A266106e6832161EAEd',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
