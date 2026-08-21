import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Sonic',
  code: 'sonic',
  network: 'mainnet',
  type: 'evm',
  chainId: '146',
  explorer: 'https://sonicscan.org/',
  tokens: {
    usdc: '0x29219dd400f2Bf60E5a23d13Be72B486D4038894',
    weth: '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38',
    feeToken: '0x29219dd400f2Bf60E5a23d13Be72B486D4038894',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
