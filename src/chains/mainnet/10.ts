import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Optimism',
  code: 'op',
  network: 'mainnet',
  type: 'evm',
  chainId: '10',
  explorer: 'https://optimistic.etherscan.io/',
  tokens: {
    usdc: '0x0b2c639c533813f4aa9d7837caf62653d097ff85',
    weth: '0x4200000000000000000000000000000000000006',
    feeToken: '0x0b2c639c533813f4aa9d7837caf62653d097ff85',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
