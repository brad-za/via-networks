# `@VIA-Labs-Tech/networks` — Replacement Plan

## What This Replaces

This `@VIA-Labs-Tech/npm-registry` package is being retired. It will be replaced by `@VIA-Labs-Tech/networks` — a new standalone package that serves as the single source of truth for all VIA chain data, contract deployments, and RPC endpoints.

**Why:**
- npm-registry mixes public and private data (RPCs, contract addresses, config in one flat blob)
- 250 stale chain JS files from old infrastructure — all dead
- No type safety, no discriminated unions, no support for non-EVM chains (Midnight)
- No RPC provider flexibility (hardcoded single RPC per chain)
- Consumers (wallet-con, slimCLI) need a clean, typed, single-function API

---

## New Package: `@VIA-Labs-Tech/networks`

**Repo:** github:VIA-Labs-Tech/networks (new standalone repo)

### API

```ts
import via from "@VIA-Labs-Tech/networks";

// One chain, everything resolved
const avax = via(43113);
// { chainId, name, code, type, network, explorer, rpc, tokens, contracts, cctp }

// String filters
via("mainnet")    // all mainnet chains
via("testnet")    // all testnet chains
via("evm")        // all EVM chains
via("midnight")   // all Midnight chains
via("all")        // everything

// Compound filters
via({ network: "mainnet", type: "evm" })   // mainnet EVM only
via({ network: "testnet", type: "evm" })   // testnet EVM only
via({ type: "midnight" })                   // same as via("midnight")

// Utilities
via.isSupported(43113)   // true
via.isEvm(43113)         // true
via.isMidnight(64364448)  // true
via.rpc(43113)           // resolved RPC URL (uses configured provider)

// RPC auto-resolves from env vars (ALCHEMY_API_KEY, INFURA_API_KEY)
// Or configure globally:
via.configure({ provider: "alchemy" });

```

### Key Differences from npm-registry

| npm-registry (old) | @VIA-Labs-Tech/networks (new) |
|---|---|
| One JS file per chain, flat object | One TS file per chain, structured (tokens, contracts, cctp, rpc) |
| `module.exports = { ... }` | `export default chain` with full TypeScript types |
| Single RPC string | RPC templates with env var interpolation (alchemy, infura, default) |
| EVM only | EVM + Midnight (discriminated union on `type`) |
| `getChainConfig(id)` returns flat blob | `via(id)` returns structured, typed object (tokens, contracts, cctp) |
| 250 stale chain files | Fresh start — only actively launched chains |
| Build script bundles to `chainConfigs.ts` | Auto-generated `_registry.ts` barrel with static imports |
| No contract deployment data | Contracts baked into each chain file, updated by slimCLI publish |

### Migration for Consumers

**wallet-con bridge providers** — update imports to use the new `via()` API:
```ts
import via from "@VIA-Labs-Tech/networks";

const config = via(84532);
// config.tokens.usdc, config.cctp.protoCCTPGateway, etc.

const mainnetChains = via("mainnet");
const testnetChains = via("testnet");
```

**slimCLI** — will consume `@VIA-Labs-Tech/networks` for chain metadata and RPCs. Its `config.json` shrinks to operational settings only (signers, relayers, fees, gas). After deploying contracts, `slimcli publish` writes addresses back into the networks package chain files.

---

## Timeline

1. Build `@VIA-Labs-Tech/networks` package (new repo)
2. Publish to npm
3. Update slimCLI to consume it
4. Update wallet-con to import from new package
5. Archive this repo

---

## Viability Assessment

**Verdict: Viable.** Assessed against all three consumer projects.

| Consumer | Impact | Notes |
|----------|--------|-------|
| **wallet-con** (bridge-via) | Safe | Rewrite imports to use `via()` API. Access structured fields: `config.tokens.usdc`, `config.cctp.protoCCTPGateway`. |
| **vg1-midnight-contracts** | None | Doesn't use npm-registry. Networks adds Midnight type support for future use. |
| **slimCLI** | Clean | Replaces `config.json` chain identity/RPC with `via(chainId)`. `config.json` shrinks to operational settings (signers, relayers, fees, gas). |

**Design decisions:**
- **RPC:** Template strings with runtime env var interpolation (`${ALCHEMY_API_KEY}`), resolved via `via.configure({ provider: "alchemy" })`
- **RPC resolution:** `via.rpc(chainId)` returns a resolved URL directly (uses configured provider, interpolates env vars)
- **Compound filters:** `via({ network: "mainnet", type: "evm" })` for intersecting network + type queries
- **Dual format:** `tsup` produces ESM + CJS (wallet-con uses vite/ESM, legacy uses CJS)
- **Midnight:** Discriminated union on `type` field; manufactured numeric chain ID (all chains use numeric IDs)
- **Manufactured chain IDs:** Non-EVM chains get random IDs in sparse uint32 ranges to avoid collisions. No sequential patterns.
  - `501464` — Solana
  - `2273266` — Cardano
  - `5731147` — Stellar
  - `64364448` — Midnight
- **Directory structure:** `chains/mainnet/` and `chains/testnet/` only — chain type discriminated by `type` field, not directory
- **`via.configure()`:** Module-level singleton (simple, matches CLI/app usage pattern)
- **Version bumping:** `npm version patch/minor` for releases (auto-creates git tag)
- **Fresh start:** Only actively launched chains. No migration of 250 stale configs.

---

## Type Definitions

```ts
// === Base ===
export type NetworkEnv = 'mainnet' | 'testnet';
export type ChainType = 'evm' | 'midnight' | 'solana' | 'reef';

export interface BaseChainConfig {
  chainId: number;           // all chains get a numeric ID (manufactured for non-native like Midnight)
  name: string;
  code: string;
  network: NetworkEnv;
  type: ChainType;
}

// === RPC ===
export interface RpcConfig {
  default: string;
  alchemy?: string;    // "https://.../${ALCHEMY_API_KEY}"
  infura?: string;     // "https://.../${INFURA_API_KEY}"
}

export interface EvmTokens {
  usdc?: string;
  eurc?: string;
  weth: string;        // required — gas refunds
  feeToken: string;    // required — fee payments
}

export interface EvmContracts {
  message?: string;          // legacy gateway v0
  featureGateway?: string;
  featureCCTP?: string;
}

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

export interface EvmChainConfig extends BaseChainConfig {
  type: 'evm';
  rpc: RpcConfig;
  explorer?: string;
  tokens: EvmTokens;
  contracts: EvmContracts;
  cctp: EvmCctp;
}

// === Midnight ===
export interface MidnightChainConfig extends BaseChainConfig {
  type: 'midnight';
  networkId: string;         // e.g., "undeployed"
  nodeUrl: string;           // ws://...
  indexerHttpUrl: string;
  indexerWsUrl: string;
  proofServerUrl: string;
  contracts: {
    feeToken?: string;       // 64-char hex (no 0x prefix)
    gateway?: string;        // 64-char hex (no 0x prefix)
  };
}

// === Reef (EVM + Substrate hybrid) ===
export interface ReefChainConfig extends BaseChainConfig {
  type: 'reef';
  rpc: RpcConfig;
  explorer?: string;
  tokens: EvmTokens;
  contracts: EvmContracts & {
    messageSubstrate?: string;   // Substrate-side message contract address
  };
  cctp: EvmCctp;
}

// === Solana ===
export interface SolanaChainConfig extends BaseChainConfig {
  type: 'solana';
  rpc?: RpcConfig;
  explorer?: string;
  tokens: { usdc?: string; eurc?: string; };
  contracts: { message?: string; };
}

// === Union & Helpers ===
export type ChainConfig = EvmChainConfig | MidnightChainConfig | SolanaChainConfig | ReefChainConfig;
export type ChainId = number;
export type CollectionFilter = 'mainnet' | 'testnet' | 'evm' | 'midnight' | 'solana' | 'reef' | 'all';

export interface CompoundFilter {
  network?: NetworkEnv;
  type?: ChainType;
}

export interface ViaGlobalConfig {
  provider?: 'default' | 'alchemy' | 'infura';
  accountant?: { mainnet: string; testnet: string; };
}
```

---

## Chain Data Examples

All data sourced from actual npm-registry chain files and vg1-midnight-contracts.

### Ethereum Mainnet (chainId: 1) — Full EVM + CCTP

```ts
const chain: EvmChainConfig = {
  name: 'Ethereum Mainnet', code: 'eth', network: 'mainnet', type: 'evm',
  chainId: 1,
  rpc: {
    default: 'https://1.rpc.vialabs.io/',
    alchemy: 'https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}',
    infura: 'https://mainnet.infura.io/v3/${INFURA_API_KEY}',
  },
  explorer: 'https://etherscan.io/',
  tokens: {
    usdc: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    eurc: '0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c',
    weth: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    feeToken: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  },
  contracts: {
    message: '0x7b67dF6728E294db2eb173ac7c738a4627Ae5e11',
    featureGateway: '0xba30eFc4F2553d0A7733D2CA3cEc98cDC4D428ba',
    featureCCTP: '0x31f840D4cFB05F2B72C41B501d6dd1CFe4106aa6',
  },
  cctp: {
    protoCCTPGateway: '0x53f67b67418dcFB5ca88D443ee82584148b3c973',
    intentCCTPGateway: '0x0000000000000000000000000000000000000000',
    circleTokenMessenger: '0xbd3fa81b58ba92a82136038b25adec7066af3155',
    circleMessageTransmitter: '0x0a992d191deec32afe36203ad87d7d289a738f81',
    circleTokenMinter: '0xc4922d64a24675e16e1586e3e3aa56c06fabe907',
    isCCTPEnabled: true,
    cctpLeafChains: [
      { chainId: 48900, rootManager: '0x3012C9175ef181Fb8Da827cc439cd88861cf6aaB', leafManager: '0x3fBD26bd2F4ea70042634ac10972C3E3DeaCd875' },
    ],
  },
};
```

### Avalanche Fuji (chainId: 43113) — Testnet EVM + CCTP + 4 leaf chains

```ts
const chain: EvmChainConfig = {
  name: 'Avalanche Fuji', code: 'avax', network: 'testnet', type: 'evm',
  chainId: 43113,
  rpc: {
    default: 'https://43113.rpc.vialabs.io/',
    alchemy: 'https://avax-fuji.g.alchemy.com/v2/${ALCHEMY_API_KEY}',
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
```

### Base Sepolia (chainId: 84532) — Testnet EVM + CCTP + 5 leaf chains

```ts
const chain: EvmChainConfig = {
  name: 'Base Sepolia', code: 'base', network: 'testnet', type: 'evm',
  chainId: 84532,
  rpc: {
    default: 'https://84532.rpc.vialabs.io/',
    alchemy: 'https://base-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}',
  },
  explorer: 'https://sepolia.basescan.org/',
  tokens: {
    usdc: '0x036CbD53842c5426634e7929541eC2318f3dCF7e',
    weth: '0x32D9c1DA01F221aa0eab4A0771Aaa8E2344ECd35',
    feeToken: '0x036CbD53842c5426634e7929541eC2318f3dCF7e',
  },
  contracts: {
    message: '0xE700Ee5d8B7dEc62987849356821731591c048cF',
    featureGateway: '0x9Fc203b5dc5c29912D5c2BEF6ADBC6C8d783ea9B',
    featureCCTP: '0x2253C9B38aCE84c189FbbCc25535dbA5A0015Ef0',
  },
  cctp: {
    protoCCTPGateway: '0xdcc8769Be2F2E938F02f66e9F8Bb224a81da5Bc9',
    circleTokenMessenger: '0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5',
    circleMessageTransmitter: '0x7865fAfC2db2093669d92c0F33AeEF291086BEFD',
    circleTokenMinter: '0xE997d7d2F6E065a9A93Fa2175E878Fb9081F1f0A',
    isCCTPEnabled: true,
    cctpLeafChains: [
      { chainId: 83, rootManager: '0x0553dDfc9A01D200B8608158295157fcBC63479d', leafManager: '0xF58725d7a4c0fBf7978A93772F284e8019Ee8E53' },
      { chainId: 325000, rootManager: '0xdBe060aAF22aE343C19A3Be553ddE0623125e552', leafManager: '0x9d1421d5813f6ba074880472D5775e820e18Fd7A' },
      { chainId: 41, rootManager: '0xF3Db272879071B64C5a81499b07d2617974dE6B7', leafManager: '0x9d1421d5813f6ba074880472D5775e820e18Fd7A' },
      { chainId: 1338, rootManager: '0x500161413B77a8a350755A9d774D3b23B89a4b8B', leafManager: '0xa1cbbf90A38B7C279a1Ef17E29cC61968AaA6945' },
      { chainId: 842, rootManager: '0x92D758eD7f324f1821AD01baD68679aE32376110', leafManager: '0x9d1421d5813f6ba074880472D5775e820e18Fd7A' },
    ],
  },
};
```

### Minimal EVM — Nexis ZK Testnet (chainId: 1001)

```ts
const chain: EvmChainConfig = {
  name: 'Nexis ZK Testnet', code: 'nexis', network: 'testnet', type: 'evm',
  chainId: 1001,
  rpc: {},
  tokens: {
    weth: '0x0000000000000000000000000000000000000000',
    feeToken: '0x0000000000000000000000000000000000000000',
  },
  contracts: {
    message: '0x0000000000000000000000000000000000000000',
  },
  cctp: {},
};
```

### Midnight Testnet (chainId: 64364448) — manufactured VIA chain ID

```ts
const chain: MidnightChainConfig = {
  name: 'Midnight Testnet', code: 'midnight', network: 'testnet', type: 'midnight',
  chainId: 64364448,
  networkId: 'undeployed',
  nodeUrl: 'wss://rpc.testnet.midnight.network/ws',
  indexerHttpUrl: 'https://indexer.testnet.midnight.network/api/v3/graphql',
  indexerWsUrl: 'wss://indexer.testnet.midnight.network/api/v3/graphql/ws',
  proofServerUrl: 'https://proof.testnet.midnight.network',
  contracts: {
    feeToken: '93bbc1f63aacb2e42ed8ad803543c5be86a632a9d8c58ca3b16925e5d0a50208',
    gateway: '9a14bc7885ccdcd2ee94a491a03972b0799f5f02133acd2e2bc5be81764d0ff9',
  },
};
```

### Reef Mainnet (chainId: 13939) — EVM + Substrate hybrid

```ts
const chain: ReefChainConfig = {
  name: 'Reef Mainnet', code: 'reef', network: 'mainnet', type: 'reef',
  chainId: 13939,
  rpc: {},
  tokens: {
    usdc: '0x7922d8785D93E692bb584e659b607Fa821e6a91a',
    weth: '0x0000000000000000000000000000000001000000', // unwrap MUST be false
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
```

### Solana Mainnet (chainId: 501464) — manufactured VIA chain ID

```ts
const chain: SolanaChainConfig = {
  name: 'Solana Mainnet', code: 'solana', network: 'mainnet', type: 'solana',
  chainId: 501464,
  rpc: { default: 'https://api.mainnet-beta.solana.com' },
  explorer: 'https://explorer.solana.com/',
  tokens: {
    usdc: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    eurc: 'HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr',
  },
  contracts: {
    message: '',
  },
};
```

---

## Package Structure

```
networks/
├── package.json          # @VIA-Labs-Tech/networks, zero runtime deps
├── tsconfig.json
├── tsup.config.ts        # dual ESM/CJS output
├── vitest.config.ts
├── src/
│   ├── index.ts          # via() function + re-exports
│   ├── types.ts          # all type definitions
│   ├── config.ts         # via.configure() global state
│   ├── resolve.ts        # RPC template → resolved URL
│   ├── registry.ts       # AUTO-GENERATED barrel of all chain imports
│   ├── chains/
│   │   ├── mainnet/      # 1.ts, 13939.ts, 501464.ts
│   │   └── testnet/      # 43113.ts, 84532.ts, 1001.ts, 64364448.ts
│   └── scripts/
│       ├── generate-registry.ts   # scans chains/, writes registry.ts
│       └── update-chain.ts        # patches a chain file from dispatch payload
├── test/
│   ├── via.test.ts
│   └── rpc-resolve.test.ts
└── .github/workflows/
    ├── ci.yml
    ├── publish.yml
    └── update-chain.yml
```

---

## Initial Setup

1. **Create repo:** `gh repo create VIA-Labs-Tech/networks --public`
2. **Scaffold:** `package.json`, `tsconfig.json`, `tsup.config.ts`, `vitest.config.ts`
   - Zero runtime dependencies — pure data + types
   - `tsup` for dual ESM/CJS build
   - `vitest` for testing
3. **Add chain files:** Only actively launched chains (fresh start, no migration)
   - Each chain: `src/chains/{mainnet,testnet}/{id}.ts` (type discriminated by `type` field, not directory)
   - Typed const export with full interface
4. **Generate registry:** `tsx src/scripts/generate-registry.ts`
   - Scans chain dirs, produces `src/registry.ts` (static imports, sorted, deterministic)
5. **Build:** `npm run build` → `dist/index.mjs` + `dist/index.cjs` + `dist/index.d.ts`
6. **Test:** `npm test` — verify `via()`, RPC resolution, type narrowing
7. **npm org:** `npm login --scope=@VIA-Labs-Tech` (or add `NPM_TOKEN` to CI)
8. **First publish:** `npm version 1.0.0 && git push --follow-tags` → publish workflow → package on npm

---

## CI/CD

### PR Validation (`.github/workflows/ci.yml`)

Runs on every pull request: checkout → install → build → test.

```yaml
name: CI
on: [pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run build
      - run: npm test
```

### Publish on Tag (`.github/workflows/publish.yml`)

Triggered by `v*` tags. Builds, tests, then publishes to npm.

```yaml
name: Publish
on:
  push:
    tags: ['v*']
jobs:
  publish:
    runs-on: ubuntu-latest
    permissions: { contents: read, id-token: write }
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, registry-url: 'https://registry.npmjs.org' }
      - run: npm ci
      - run: npm run build
      - run: npm test
      - run: npm publish --provenance --access public
        env: { NODE_AUTH_TOKEN: '${{ secrets.NPM_TOKEN }}' }
```

### Updating Chain Data

Two paths for updating chain data:

#### Manual: Direct Git (new chains, manual edits)

1. Clone the networks repo
2. Edit/add chain file directly in `src/chains/{network}/{chainId}.ts`
3. `npm run build && npm test`
4. Commit, push, open PR
5. Review, merge

#### Automated: slimCLI publish (post-deploy contract updates)

After deploying contracts, `slimcli publish` fires a `repository_dispatch` event:

```ts
await fetch('https://api.github.com/repos/VIA-Labs-Tech/networks/dispatches', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${GITHUB_TOKEN}`,
    'Accept': 'application/vnd.github.v3+json',
  },
  body: JSON.stringify({
    event_type: 'chain-update',
    client_payload: {
      chainId: 43113,
      contracts: { message: '0x...', featureGateway: '0x...' },
      tokens: { feeToken: '0x...' },
    }
  })
});
```

The workflow (`.github/workflows/update-chain.yml`) patches the chain file and opens an auto-PR:

```yaml
name: Update Chain Data
on:
  repository_dispatch:
    types: [chain-update]
jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npx tsx src/scripts/update-chain.ts '${{ toJson(github.event.client_payload) }}'
      - run: npm run build && npm test
      - uses: peter-evans/create-pull-request@v6
        with:
          title: 'chore: update chain ${{ github.event.client_payload.chainId }}'
          branch: 'auto/chain-${{ github.event.client_payload.chainId }}'
          commit-message: 'chore: update chain ${{ github.event.client_payload.chainId }} data'
```

### Release Flow

1. PR created (manual or auto from dispatch)
2. Review and merge → CI validates build + tests
3. Bump version: `npm version patch` (or `minor` for new chains) — auto-creates git tag
4. Push: `git push --follow-tags` → publish workflow fires → new version on npm
5. Consumers: `npm update @VIA-Labs-Tech/networks`
