import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Arc',
  code: 'arc',
  network: 'mainnet',
  type: 'evm',
  chainId: '5042',
  explorer: 'https://explorer.arc.io/',
  tokens: {
    // Native gas token predeploy — USDC is the native asset on Arc (6-dec ERC-20 interface)
    usdc: '0x3600000000000000000000000000000000000000',
    eurc: '0xbEf5f6d51CB62b58e6A8f77868681825C6fe21c1',
    weth: '0x0000000000000000000000000000000000000000',
    feeToken: '0x3600000000000000000000000000000000000000',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
