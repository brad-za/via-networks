import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Robinhood',
  code: 'hood',
  network: 'mainnet',
  type: 'evm',
  chainId: '4663',
  explorer: 'https://robinhoodchain.blockscout.com/',
  tokens: {
    usdc: '0x80e0e24718dbFcad49ECAA6F1e6C89A190586cA8',
    weth: '0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73',
    feeToken: '0x80e0e24718dbFcad49ECAA6F1e6C89A190586cA8',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
