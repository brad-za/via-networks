import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { resolveRpc } from '../src/resolve.js';
import { configure } from '../src/config.js';
import type { RpcConfig } from '../src/types/index.js';

const rpc: RpcConfig = {
  default: 'https://1.rpc.vialabs.io/',
  alchemy: 'https://eth-mainnet.g.alchemy.com/v2/',
  infura: 'https://mainnet.infura.io/v3/',
};

beforeEach(() => {
  configure({ provider: 'default' });
});

afterEach(() => {
  delete process.env.ALCHEMY_API_KEY;
  delete process.env.INFURA_API_KEY;
});

describe('resolveRpc', () => {
  it('returns default url when provider is default', () => {
    expect(resolveRpc(rpc)).toBe('https://1.rpc.vialabs.io/');
  });

  it('returns alchemy url with api key', () => {
    process.env.ALCHEMY_API_KEY = 'test-alchemy-key';
    configure({ provider: 'alchemy' });
    expect(resolveRpc(rpc)).toBe('https://eth-mainnet.g.alchemy.com/v2/test-alchemy-key');
  });

  it('returns infura url with api key', () => {
    process.env.INFURA_API_KEY = 'test-infura-key';
    configure({ provider: 'infura' });
    expect(resolveRpc(rpc)).toBe('https://mainnet.infura.io/v3/test-infura-key');
  });

  it('falls back to default when provider url missing', () => {
    configure({ provider: 'alchemy' });
    expect(resolveRpc({ default: 'https://fallback.rpc/' })).toBe('https://fallback.rpc/');
  });

  it('returns undefined when no rpc config', () => {
    expect(resolveRpc(undefined)).toBeUndefined();
  });

  it('returns undefined when rpc has no urls', () => {
    expect(resolveRpc({})).toBeUndefined();
  });
});
