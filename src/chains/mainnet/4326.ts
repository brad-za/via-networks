import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Mega ETH',
  code: 'megaeth',
  network: 'mainnet',
  type: 'evm',
  chainId: '4326',
  explorer: 'https://mega.etherscan.io/',
  tokens: {
    usdc: '0xFAfDdbb3FC7688494971a79cc65DCa3EF82079E7', // USDM — no USDC on chain
    weth: '0x4200000000000000000000000000000000000006',
    feeToken: '0xFAfDdbb3FC7688494971a79cc65DCa3EF82079E7',
  },
  contracts: {
    // VIA contracts not yet deployed — placeholders, update via slimcli publish
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};

export default chain;
