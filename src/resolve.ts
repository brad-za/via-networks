import type { RpcConfig } from './types/index.js';
import { getConfig } from './config.js';
import 'dotenv/config';

export function resolveRpc(rpc: RpcConfig | undefined): string | undefined {
  if (!rpc) return undefined;

  const { provider } = getConfig();

  if (provider === 'alchemy' && rpc.alchemy) {
    return rpc.alchemy + (process.env.ALCHEMY_API_KEY ?? '');
  }

  if (provider === 'infura' && rpc.infura) {
    return rpc.infura + (process.env.INFURA_API_KEY ?? '');
  }

  return rpc.default;
}
