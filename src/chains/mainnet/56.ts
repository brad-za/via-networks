import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'BSC',
  code: 'bsc',
  network: 'mainnet',
  type: 'evm',
  chainId: '56',
  explorer: 'https://bscscan.com/',
  tokens: {
    usdc: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    weth: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    feeToken: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
