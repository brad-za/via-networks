import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Plasma',
  code: 'plasma',
  network: 'mainnet',
  type: 'evm',
  chainId: '9745',
  explorer: 'https://plasmascan.to/',
  tokens: {
    usdc: '0x2d661C89D812261039AF9764eceaAee884f5F67F',
    weth: '0x6100E367285b01F48D07953803A2d8dCA5D19873',
    feeToken: '0x2d661C89D812261039AF9764eceaAee884f5F67F',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
