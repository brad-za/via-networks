import { existsSync, writeFileSync } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';

// --- Parse and validate payload ---

const payload = JSON.parse(process.argv[2]);
const { chainId, contracts, tokens, cctp } = payload;

if (!chainId) { console.error('Missing chainId'); process.exit(1); }
if (!contracts) { console.error('Missing contracts'); process.exit(1); }
if (!tokens) { console.error('Missing tokens'); process.exit(1); }
if (!cctp) { console.error('Missing cctp'); process.exit(1); }

// --- Locate chain file ---

const chainsDir = join(import.meta.dirname, '..', 'chains');
const mainnetPath = join(chainsDir, 'mainnet', `${chainId}.ts`);
const testnetPath = join(chainsDir, 'testnet', `${chainId}.ts`);
const chainFile = existsSync(mainnetPath) ? mainnetPath : existsSync(testnetPath) ? testnetPath : null;

if (!chainFile) { console.error(`No chain file for ${chainId}`); process.exit(1); }

// --- Load and merge updates ---

const { default: chain } = await import(chainFile);

Object.assign(chain.contracts, contracts);
Object.assign(chain.tokens, tokens);
Object.assign(chain.cctp, cctp);

// --- Write updated chain file ---

const typeMap: Record<string, string> = {
  evm: 'EvmChainConfig',
  midnight: 'MidnightChainConfig',
  reef: 'ReefChainConfig',
  solana: 'SolanaChainConfig',
};

const typeName = typeMap[chain.type];
const json = JSON.stringify(chain, null, 2);

writeFileSync(chainFile, [
  `import type { ${typeName} } from '../../types/index.js';`,
  '',
  `const chain: ${typeName} = ${json} as const;`,
  '',
  'export default chain;',
  '',
].join('\n'));

console.log(`Updated chain ${chainId} at ${chainFile}`);

// --- Regenerate registry ---

execSync('npx tsx src/scripts/generate-registry.ts', { stdio: 'inherit' });
