# @VIA-Labs-Tech/networks

Single source of truth for all VIA chain data, contract deployments, and token addresses.

Zero runtime dependencies. Pure TypeScript. ESM only.

## Install

```bash
npm install @VIA-Labs-Tech/networks
```

## Usage

```ts
import viaChain from '@VIA-Labs-Tech/networks';

// Lookup by chain ID (string)
const eth = viaChain('1');
// { chainId: '1', name: 'Ethereum Mainnet', type: 'evm', network: 'mainnet', ... }

// Filter by network
const mainnetChains = viaChain('mainnet');
const testnetChains = viaChain('testnet');

// Filter by chain type
const evmChains = viaChain('evm');
const midnightChains = viaChain('midnight');
const solanaChains = viaChain('solana');

// Get everything
const allChains = viaChain('all');

// Compound filters
const testnetEvm = viaChain({ network: 'testnet', type: 'evm' });
const mainnetSolana = viaChain({ network: 'mainnet', type: 'solana' });
```

## Helpers

```ts
viaChain.isSupported('1')     // true
viaChain.isSupported('99999') // false

viaChain.isEvm('1')           // true
viaChain.isMidnight('64364448') // true
viaChain.isSolana('501464')   // true
viaChain.isReef('13939')      // true
```

## Chain Types

Each chain config is a discriminated union on the `type` field:

### EVM

```ts
const eth = viaChain('1');
if (eth && eth.type === 'evm') {
  eth.tokens.usdc     // USDC address
  eth.tokens.weth     // Wrapped native token
  eth.tokens.feeToken // Fee payment token
  eth.contracts.message        // Message contract
  eth.contracts.featureGateway // Feature gateway
  eth.cctp.protoCCTPGateway    // CCTP gateway
  eth.cctp.isCCTPEnabled       // CCTP status
  eth.explorer                 // Block explorer URL
}
```

### Midnight

```ts
const mn = viaChain('64364448');
if (mn && mn.type === 'midnight') {
  mn.networkId            // 'undeployed'
  mn.contracts.feeToken   // 64-char hex (no 0x)
  mn.contracts.gateway    // 64-char hex (no 0x)
}
```

### Solana

```ts
const sol = viaChain('501464');
if (sol && sol.type === 'solana') {
  sol.tokens.usdc    // Mint address
  sol.tokens.eurc    // Mint address
  sol.contracts.message
}
```

### Reef

```ts
const reef = viaChain('13939');
if (reef && reef.type === 'reef') {
  reef.tokens.usdc
  reef.contracts.message
  reef.contracts.messageSubstrate  // Substrate address
  reef.cctp.protoCCTPGateway
}
```

## Supported Chains

### Mainnet
| Chain | ID | Code | Type |
|-------|------|------|------|
| Ethereum | 1 | eth | evm |
| Polygon | 137 | pol | evm |
| Reef | 13939 | reef | reef |
| Solana | 501464 | solana | solana |

### Testnet
| Chain | ID | Code | Type |
|-------|------|------|------|
| Nexis ZK | 1001 | nexis | evm |
| Avalanche Fuji | 43113 | avax | evm |
| Polygon Amoy | 80002 | pol | evm |
| Base Sepolia | 84532 | base | evm |
| Arbitrum Sepolia | 421614 | arb | evm |
| Ethereum Sepolia | 11155111 | eth | evm |
| Midnight | 64364448 | midnight | midnight |

## Types

All types are exported for direct use:

```ts
import type {
  ChainConfig,
  EvmChainConfig,
  MidnightChainConfig,
  SolanaChainConfig,
  ReefChainConfig,
  EvmTokens,
  SolanaTokens,
  EvmContracts,
  EvmCctpV2,
  CctpLeafChain,
  NetworkEnv,
  ChainType,
  CollectionFilter,
  CompoundFilter,
} from '@VIA-Labs-Tech/networks';
```

## License

MIT
