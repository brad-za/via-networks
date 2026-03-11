import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Polygon Amoy',
  code: 'pol',
  network: 'testnet',
  type: 'evm',
  chainId: '80002',
  explorer: 'https://amoy.polygonscan.com/',
  tokens: {
    weth: '0x360ad4f9a9A8EFe9A8DCB5f461c4Cc1047E1Dcf9',
    feeToken: '0x0000000000000000000000000000000000000000',
  },
  contracts: {},
  cctp: {},
};

export default chain;
