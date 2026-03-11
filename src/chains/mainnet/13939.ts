import type { ReefChainConfig } from '../../types/index.js';

const chain: ReefChainConfig = {
  name: 'Reef Mainnet',
  code: 'reef',
  network: 'mainnet',
  type: 'reef',
  chainId: '13939',
  tokens: {
    usdc: '0x7922d8785D93E692bb584e659b607Fa821e6a91a',
    weth: '0x0000000000000000000000000000000001000000',
    feeToken: '0x7922d8785D93E692bb584e659b607Fa821e6a91a',
  },
  contracts: {
    message: '0xdAFcF1e328c09cbc480A09f751c170CfCca3e083',
    messageSubstrate: '5EMjsd1648TVgor7qD19pXda8mbfbDZ3NyTRUiWKZBRmPZ7e',
  },
  cctp: {
    protoCCTPGateway: '0xc2d83e23f3a841235A62F35091ca84930C19c7C0',
  },
};

export default chain;
