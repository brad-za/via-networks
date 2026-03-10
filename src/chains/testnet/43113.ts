import type { EvmChainConfig } from '../../types/index.js';

const chain: EvmChainConfig = {
  name: 'Avalanche Fuji',
  code: 'avax',
  network: 'testnet',
  type: 'evm',
  chainId: 43113,
  rpc: {
    default: 'https://43113.rpc.vialabs.io/',
    alchemy: 'https://avax-fuji.g.alchemy.com/v2/',
  },
  explorer: 'https://testnet.snowtrace.io/',
  tokens: {
    usdc: '0x5425890298aed601595a70ab815c96711a31bc65',
    weth: '0xD59A1806BAa7f46d1e07A07649784fA682708794',
    feeToken: '0x5425890298aed601595a70ab815c96711a31bc65',
  },
  contracts: {
    message: '0x8f92F60ffFB05d8c64E755e54A216090D8D6Eaf9',
    featureGateway: '0x70B806CBE98953befd43c558E70AeD133f98A44B',
    featureCCTP: '0x5EdA91d22B31A0eD5717295fCBA0C5E990Fdf1B9',
  },
  cctp: {
    protoCCTPGateway: '0x02986E15f847F4dc509F01B781E20F95da851b44',
    circleTokenMessenger: '0xeb08f243e5d3fcff26a9e38ae5520a669f4019d0',
    circleMessageTransmitter: '0xa9fb1b3009dcb79e2fe346c16a604b8fa8ae0a79',
    circleTokenMinter: '0x4ed8867f9947a5fe140c9dc1c6f207f3489f501e',
    isCCTPEnabled: true,
    cctpLeafChains: [
      { chainId: 64165, rootManager: '0xD882a92421490aD0e500043B7E60506F45bE6716', leafManager: '0x3EdCD98439d8fc68Fc46825C97880Af9eF4b0272' },
      { chainId: 195, rootManager: '0x60fB013997CFa53729A9c8Dfbacecc65c8Dde897', leafManager: '0xa06f5842bB1bF8ea42397fb116BFA17c3F8c8c5b' },
      { chainId: 779672, rootManager: '0x3bE439F306b4838f8E7Fa24646c04Ad192a42586', leafManager: '0x804bbFd5d5491Da318bAD9e665b01600861e54a7' },
      { chainId: 173750, rootManager: '0x376736B474259EC3278F6c36CCfAB24BdDe24653', leafManager: '0x31c84d37Ff57E53a7a9fA77C57E62c557Bd4F15e' },
    ],
  },
};

export default chain;
