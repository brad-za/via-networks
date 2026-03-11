import { readdirSync } from 'fs';
import { writeFileSync } from 'fs';
import { join } from 'path';

const chainsDir = join(import.meta.dirname, '..', 'chains');
const outFile = join(import.meta.dirname, '..', 'registry.ts');

const imports: string[] = [];
const entries: string[] = [];

for (const network of ['mainnet', 'testnet'] as const) {
  const dir = join(chainsDir, network);
  const files = readdirSync(dir).filter(f => f.endsWith('.ts')).sort((a, b) => {
    return parseInt(a) - parseInt(b);
  });

  for (const file of files) {
    const id = file.replace('.ts', '');
    const varName = `chain_${id}`;
    imports.push(`import ${varName} from './chains/${network}/${id}.js';`);
    entries.push(`  ['${id}', ${varName}],`);
  }
}

const content = `// AUTO-GENERATED — do not edit. Run \`npm run generate-registry\` to regenerate.
import type { ChainConfig } from './types/index.js';

${imports.join('\n')}

const registry = new Map<string, ChainConfig>([
${entries.join('\n')}
]);

export default registry;
`;

writeFileSync(outFile, content);
console.log(`Generated registry with ${entries.length} chains.`);
