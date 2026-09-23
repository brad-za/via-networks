import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Ronin',
  code: 'ron',
  network: 'mainnet',
  type: 'evm',
  chainId: '2020',
  explorer: 'https://app.roninchain.com/',
  tokens: {
    usdc: '0x0B7007c13325C48911F73A2daD5FA5dCBf808aDc', // bridged
    weth: '0xe514d9DEB7966c8BE0ca922de8a064264eA6bcd4',
    feeToken: '0x0B7007c13325C48911F73A2daD5FA5dCBf808aDc',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
