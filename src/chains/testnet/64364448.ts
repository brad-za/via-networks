import type { MidnightChainConfig } from '../../types/index.js';

const chain: MidnightChainConfig = {
  name: 'Midnight Testnet',
  code: 'midnight',
  network: 'testnet',
  type: 'midnight',
  chainId: 64364448,
  networkId: 'undeployed',
  nodeUrl: 'wss://rpc.testnet.midnight.network/ws',
  indexerHttpUrl: 'https://indexer.testnet.midnight.network/api/v3/graphql',
  indexerWsUrl: 'wss://indexer.testnet.midnight.network/api/v3/graphql/ws',
  proofServerUrl: 'https://proof.testnet.midnight.network',
  contracts: {
    feeToken: '93bbc1f63aacb2e42ed8ad803543c5be86a632a9d8c58ca3b16925e5d0a50208',
    gateway: '9a14bc7885ccdcd2ee94a491a03972b0799f5f02133acd2e2bc5be81764d0ff9',
  },
};

export default chain;
