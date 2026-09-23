import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Katana',
  code: 'katana',
  network: 'mainnet',
  type: 'evm',
  chainId: '747474',
  explorer: 'https://katanascan.com/',
  tokens: {
    usdc: '0x203A662b0BD271A6ed5a60EdFbd04bFce608FD36', // vbUSDC, bridged
    weth: '0xEE7D8BCFb72bC1880D0Cf19822eB0A2e6577aB62',
    feeToken: '0x203A662b0BD271A6ed5a60EdFbd04bFce608FD36',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
