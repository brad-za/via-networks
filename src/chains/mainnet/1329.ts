import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Sei',
  code: 'sei',
  network: 'mainnet',
  type: 'evm',
  chainId: '1329',
  explorer: 'https://seiscan.io/',
  tokens: {
    usdc: '0xe15fC38F6D8c56aF07bbCBe3BAf5708A2Bf42392',
    weth: '0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7',
    feeToken: '0xe15fC38F6D8c56aF07bbCBe3BAf5708A2Bf42392',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
