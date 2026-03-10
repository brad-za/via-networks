import type { BaseChainConfig } from './base.js';
import type { RpcConfig } from './rpcs.js';
import type { EvmTokens, SolanaTokens } from './tokens.js';
import type { EvmContracts, MidnightContracts, ReefContracts, SolanaContracts } from './contracts.js';
import type { EvmCctp } from './cctp.js';

export interface EvmChainConfig extends BaseChainConfig {
  type: 'evm';
  rpc: RpcConfig;
  explorer?: string;
  tokens: EvmTokens;
  contracts: EvmContracts;
  cctp: EvmCctp;
}

export interface MidnightChainConfig extends BaseChainConfig {
  type: 'midnight';
  networkId: string;
  nodeUrl: string;
  indexerHttpUrl: string;
  indexerWsUrl: string;
  proofServerUrl: string;
  contracts: MidnightContracts;
}

export interface ReefChainConfig extends BaseChainConfig {
  type: 'reef';
  rpc: RpcConfig;
  explorer?: string;
  tokens: EvmTokens;
  contracts: ReefContracts;
  cctp: EvmCctp;
}

export interface SolanaChainConfig extends BaseChainConfig {
  type: 'solana';
  rpc?: RpcConfig;
  explorer?: string;
  tokens: SolanaTokens;
  contracts: SolanaContracts;
}

export type ChainConfig = EvmChainConfig | MidnightChainConfig | SolanaChainConfig | ReefChainConfig;
