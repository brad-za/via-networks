import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Etherlink',
  code: 'etherlink',
  network: 'mainnet',
  type: 'evm',
  chainId: '42793',
  explorer: 'https://explorer.etherlink.com/',
  tokens: {
    usdc: '0x796Ea11Fa2dD751eD01b53C372fFDB4AAa8f00F9', // bridged
    weth: '0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb',
    feeToken: '0x796Ea11Fa2dD751eD01b53C372fFDB4AAa8f00F9',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
