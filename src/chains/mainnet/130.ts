import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Unichain',
  code: 'unichain',
  network: 'mainnet',
  type: 'evm',
  chainId: '130',
  explorer: 'https://uniscan.xyz/',
  tokens: {
    usdc: '0x078D782b760474a361dDA0AF3839290b0EF57AD6',
    weth: '0x4200000000000000000000000000000000000006',
    feeToken: '0x078D782b760474a361dDA0AF3839290b0EF57AD6',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
