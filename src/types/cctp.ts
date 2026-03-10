export interface CctpLeafChain {
  chainId: number;
  rootManager: string;
  leafManager: string;
}

export interface EvmCctp {
  protoCCTPGateway?: string;
  intentCCTPGateway?: string;
  circleTokenMessenger?: string;
  circleMessageTransmitter?: string;
  circleTokenMinter?: string;
  isCCTPEnabled?: boolean;
  cctpLeafChains?: CctpLeafChain[];
}
