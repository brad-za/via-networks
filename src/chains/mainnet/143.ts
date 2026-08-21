import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Monad',
  code: 'mon',
  network: 'mainnet',
  type: 'evm',
  chainId: '143',
  explorer: 'https://monadscan.com/',
  tokens: {
    usdc: '0x754704Bc059F8C67012fEd69BC8A327a5aafb603',
    weth: '0x3bd359C1119dA7Da1D913D1C4D2B7c461115433A',
    feeToken: '0x754704Bc059F8C67012fEd69BC8A327a5aafb603',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
