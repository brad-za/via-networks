import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Cronos',
  code: 'cro',
  network: 'mainnet',
  type: 'evm',
  chainId: '25',
  explorer: 'https://explorer.cronos.org/',
  tokens: {
    usdc: '0xc21223249CA28397B4B6541dfFaEcC539BfF0c59',
    weth: '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23',
    feeToken: '0xc21223249CA28397B4B6541dfFaEcC539BfF0c59',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
