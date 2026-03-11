import type { BaseChainConfig } from './base.js';
import type { EvmTokens, SolanaTokens } from './tokens.js';
import type { EvmContracts, MidnightContracts, ReefContracts, SolanaContracts } from './contracts.js';
import type { EvmCctpV2 } from './cctp.js';

export interface EvmChainConfig extends BaseChainConfig {
  type: 'evm';
  explorer?: string;
  tokens: EvmTokens;
  contracts: EvmContracts;
  cctp: EvmCctpV2;
}

export interface MidnightChainConfig extends BaseChainConfig {
  type: 'midnight';
  networkId: string;
  contracts: MidnightContracts;
}

export interface ReefChainConfig extends BaseChainConfig {
  type: 'reef';
  explorer?: string;
  tokens: EvmTokens;
  contracts: ReefContracts;
  cctp: EvmCctpV2;
}

export interface SolanaChainConfig extends BaseChainConfig {
  type: 'solana';
  explorer?: string;
  tokens: SolanaTokens;
  contracts: SolanaContracts;
}

export type ChainConfig = EvmChainConfig | MidnightChainConfig | SolanaChainConfig | ReefChainConfig;
