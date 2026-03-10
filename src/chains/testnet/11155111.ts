import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Ethereum Sepolia',
  code: 'eth',
  network: 'testnet',
  type: 'evm',
  chainId: 11155111,
  rpc: {
    default: 'https://rpc.sepolia.org',
    alchemy: 'https://eth-sepolia.g.alchemy.com/v2/',
    infura: 'https://sepolia.infura.io/v3/',
  },
  explorer: 'https://sepolia.etherscan.io/',
  tokens: {
    weth: '0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9',
    feeToken: '0xe8a680a40f2b6aa63395fb69b62015fa08af7a16',
  },
  contracts: {},
  cctp: {},
};

export default chain;
