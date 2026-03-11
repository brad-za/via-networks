import { describe, it, expect } from 'vitest';
import viaChain from '../src/index.js';

describe('viaChain(chainId)', () => {
  it('returns chain config by id', () => {
    const eth = viaChain(1);
    expect(eth).toBeDefined();
    expect(eth!.name).toBe('Ethereum Mainnet');
    expect(eth!.chainId).toBe(1);
    expect(eth!.type).toBe('evm');
  });

  it('returns undefined for unknown chain', () => {
    expect(viaChain(99999)).toBeUndefined();
  });
});

describe('viaChain(filter)', () => {
  it('returns all mainnet chains', () => {
    const chains = viaChain('mainnet');
    expect(chains.length).toBeGreaterThan(0);
    expect(chains.every(c => c.network === 'mainnet')).toBe(true);
  });

  it('returns all testnet chains', () => {
    const chains = viaChain('testnet');
    expect(chains.length).toBeGreaterThan(0);
    expect(chains.every(c => c.network === 'testnet')).toBe(true);
  });

  it('returns all evm chains', () => {
    const chains = viaChain('evm');
    expect(chains.length).toBeGreaterThan(0);
    expect(chains.every(c => c.type === 'evm')).toBe(true);
  });

  it('returns midnight chains', () => {
    const chains = viaChain('midnight');
    expect(chains.length).toBe(1);
    expect(chains[0].chainId).toBe(64364448);
  });

  it('returns solana chains', () => {
    const chains = viaChain('solana');
    expect(chains.length).toBe(1);
    expect(chains[0].chainId).toBe(501464);
  });

  it('returns reef chains', () => {
    const chains = viaChain('reef');
    expect(chains.length).toBe(1);
    expect(chains[0].chainId).toBe(13939);
  });

  it('returns all chains', () => {
    const chains = viaChain('all');
    expect(chains.length).toBeGreaterThan(0);
    expect(chains.length).toBe(viaChain('mainnet').length + viaChain('testnet').length);
  });
});

describe('viaChain(compoundFilter)', () => {
  it('filters by network + type', () => {
    const chains = viaChain({ network: 'testnet', type: 'evm' });
    expect(chains.length).toBeGreaterThan(0);
    expect(chains.every(c => c.network === 'testnet' && c.type === 'evm')).toBe(true);
  });

  it('filters by type only', () => {
    const chains = viaChain({ type: 'midnight' });
    expect(chains.length).toBe(1);
  });

  it('filters by network only', () => {
    const chains = viaChain({ network: 'mainnet' });
    expect(chains.every(c => c.network === 'mainnet')).toBe(true);
  });
});

describe('viaChain.isSupported', () => {
  it('returns true for known chain', () => {
    expect(viaChain.isSupported(1)).toBe(true);
  });

  it('returns false for unknown chain', () => {
    expect(viaChain.isSupported(99999)).toBe(false);
  });
});

describe('viaChain.isEvm / isMidnight / isSolana / isReef', () => {
  it('identifies evm chains', () => {
    expect(viaChain.isEvm(1)).toBe(true);
    expect(viaChain.isEvm(64364448)).toBe(false);
  });

  it('identifies midnight chains', () => {
    expect(viaChain.isMidnight(64364448)).toBe(true);
    expect(viaChain.isMidnight(1)).toBe(false);
  });

  it('identifies solana chains', () => {
    expect(viaChain.isSolana(501464)).toBe(true);
    expect(viaChain.isSolana(1)).toBe(false);
  });

  it('identifies reef chains', () => {
    expect(viaChain.isReef(13939)).toBe(true);
    expect(viaChain.isReef(1)).toBe(false);
  });
});
