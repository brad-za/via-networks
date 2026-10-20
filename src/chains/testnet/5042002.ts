import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Arc Testnet',
  code: 'arc',
  network: 'testnet',
  type: 'evm',
  chainId: '5042002',
  explorer: 'https://explorer.testnet.arc.io/',
  tokens: {
    // Native gas token predeploy — USDC is the native asset on Arc (6-dec ERC-20 interface)
    usdc: '0x3600000000000000000000000000000000000000',
    eurc: '0x89B50855Aa3bE2F677cD6303Cec089B5F319D72a',
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
