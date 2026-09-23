import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Flow EVM',
  code: 'flow',
  network: 'mainnet',
  type: 'evm',
  chainId: '747',
  explorer: 'https://evm.flowscan.io/',
  tokens: {
    usdc: '0xF1815bd50389c46847f0Bda824eC8da914045D14', // stgUSDC, bridged
    weth: '0xd3bF53DAC106A0290B0483EcBC89d40FcC961f3e',
    feeToken: '0xF1815bd50389c46847f0Bda824eC8da914045D14',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
