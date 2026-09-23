import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Soneium',
  code: 'soneium',
  network: 'mainnet',
  type: 'evm',
  chainId: '1868',
  explorer: 'https://soneium.blockscout.com/',
  tokens: {
    usdc: '0xbA9986D2381edf1DA03B0B9c1f8b00dc4AacC369', // USDC.e, bridged
    weth: '0x4200000000000000000000000000000000000006',
    feeToken: '0xbA9986D2381edf1DA03B0B9c1f8b00dc4AacC369',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
