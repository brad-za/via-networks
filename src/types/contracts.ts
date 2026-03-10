export interface EvmContracts {
  message?: string;
  featureGateway?: string;
  featureCCTP?: string;
}

export interface MidnightContracts {
  feeToken?: string;
  gateway?: string;
}

export interface ReefContracts extends EvmContracts {
  messageSubstrate?: string;
}

export interface SolanaContracts {
  message?: string;
}
