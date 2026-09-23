import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Linea',
  code: 'linea',
  network: 'mainnet',
  type: 'evm',
  chainId: '59144',
  explorer: 'https://lineascan.build/',
  tokens: {
    usdc: '0x176211869cA2b568f2A7D4EE941E073a821EE1ff',
    weth: '0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f',
    feeToken: '0x176211869cA2b568f2A7D4EE941E073a821EE1ff',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
