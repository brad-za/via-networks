import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Berachain',
  code: 'bera',
  network: 'mainnet',
  type: 'evm',
  chainId: '80094',
  explorer: 'https://berascan.com/',
  tokens: {
    usdc: '0x549943e04f40284185054145c6E4e9568C1D3241', // USDC.e, bridged
    weth: '0x6969696969696969696969696969696969696969',
    feeToken: '0x549943e04f40284185054145c6E4e9568C1D3241',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
