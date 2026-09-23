import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'X Layer',
  code: 'xlayer',
  network: 'mainnet',
  type: 'evm',
  chainId: '196',
  explorer: 'https://www.oklink.com/xlayer',
  tokens: {
    usdc: '0xB6CEceAB302E2E4948951eE7843FC24E92933061',
    weth: '0xe538905cf8410324e03A5A23C1c177a474D59b2b',
    feeToken: '0xB6CEceAB302E2E4948951eE7843FC24E92933061',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
