export interface CctpLeafChain {
  chainId: string;
  rootManager: string;
  leafManager: string;
}

export interface EvmCctpV2 {
  protoCCTPGateway?: string;
  intentCCTPGateway?: string;
  circleTokenMessenger?: string;
  circleMessageTransmitter?: string;
  circleTokenMinter?: string;
  isCCTPEnabled?: boolean;
  cctpLeafChains?: CctpLeafChain[];
}