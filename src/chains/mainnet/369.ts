import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'PulseChain',
  code: 'pls',
  network: 'mainnet',
  type: 'evm',
  chainId: '369',
  explorer: 'https://scan.pulsechain.com/',
  tokens: {
    usdc: '0x15D38573d2feeb82e7ad5187aB8c1D52810B1f07',
    weth: '0xA1077a294dDE1B09bB078844df4077d206f595f5',
    feeToken: '0x15D38573d2feeb82e7ad5187aB8c1D52810B1f07',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
