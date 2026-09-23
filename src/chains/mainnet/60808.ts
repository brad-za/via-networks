import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'BOB',
  code: 'bob',
  network: 'mainnet',
  type: 'evm',
  chainId: '60808',
  explorer: 'https://explorer.gobob.xyz/',
  tokens: {
    usdc: '0xe75D0fB2C24A55cA1e3F96781a2bCC7bdba058F0', // USDC.e, bridged
    weth: '0x4200000000000000000000000000000000000006',
    feeToken: '0xe75D0fB2C24A55cA1e3F96781a2bCC7bdba058F0',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
