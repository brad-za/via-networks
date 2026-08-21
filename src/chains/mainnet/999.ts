import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Hyper EVM',
  code: 'hype',
  network: 'mainnet',
  type: 'evm',
  chainId: '999',
  explorer: 'https://hyperevmscan.io/',
  tokens: {
    usdc: '0xb88339CB7199b77E23DB6E890353E22632Ba630f',
    weth: '0x5555555555555555555555555555555555555555',
    feeToken: '0xb88339CB7199b77E23DB6E890353E22632Ba630f',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
