import { describe, it, expect } from 'vitest';
import via from '../src/index.js';

describe('via(chainId)', () => {
  it('returns chain config by id', () => {
    const eth = via(1);
    expect(eth).toBeDefined();
    expect(eth!.name).toBe('Ethereum Mainnet');
    expect(eth!.chainId).toBe(1);
    expect(eth!.type).toBe('evm');
  });

  it('returns undefined for unknown chain', () => {
    expect(via(99999)).toBeUndefined();
  });
});

describe('via(filter)', () => {
  it('returns all mainnet chains', () => {
    const chains = via('mainnet');
    expect(chains.length).toBeGreaterThan(0);
    expect(chains.every(c => c.network === 'mainnet')).toBe(true);
  });

  it('returns all testnet chains', () => {
    const chains = via('testnet');
    expect(chains.length).toBeGreaterThan(0);
    expect(chains.every(c => c.network === 'testnet')).toBe(true);
  });

  it('returns all evm chains', () => {
    const chains = via('evm');
    expect(chains.length).toBeGreaterThan(0);
    expect(chains.every(c => c.type === 'evm')).toBe(true);
  });

  it('returns midnight chains', () => {
    const chains = via('midnight');
    expect(chains.length).toBe(1);
    expect(chains[0].chainId).toBe(64364448);
  });

  it('returns solana chains', () => {
    const chains = via('solana');
    expect(chains.length).toBe(1);
    expect(chains[0].chainId).toBe(501464);
  });

  it('returns reef chains', () => {
    const chains = via('reef');
    expect(chains.length).toBe(1);
    expect(chains[0].chainId).toBe(13939);
  });

  it('returns all chains', () => {
    const chains = via('all');
    expect(chains.length).toBe(10);
  });
});

describe('via(compoundFilter)', () => {
  it('filters by network + type', () => {
    const chains = via({ network: 'testnet', type: 'evm' });
    expect(chains.length).toBeGreaterThan(0);
    expect(chains.every(c => c.network === 'testnet' && c.type === 'evm')).toBe(true);
  });

  it('filters by type only', () => {
    const chains = via({ type: 'midnight' });
    expect(chains.length).toBe(1);
  });

  it('filters by network only', () => {
    const chains = via({ network: 'mainnet' });
    expect(chains.every(c => c.network === 'mainnet')).toBe(true);
  });
});

describe('via.isSupported', () => {
  it('returns true for known chain', () => {
    expect(via.isSupported(1)).toBe(true);
  });

  it('returns false for unknown chain', () => {
    expect(via.isSupported(99999)).toBe(false);
  });
});

describe('via.isEvm / isMidnight / isSolana / isReef', () => {
  it('identifies evm chains', () => {
    expect(via.isEvm(1)).toBe(true);
    expect(via.isEvm(64364448)).toBe(false);
  });

  it('identifies midnight chains', () => {
    expect(via.isMidnight(64364448)).toBe(true);
    expect(via.isMidnight(1)).toBe(false);
  });

  it('identifies solana chains', () => {
    expect(via.isSolana(501464)).toBe(true);
    expect(via.isSolana(1)).toBe(false);
  });

  it('identifies reef chains', () => {
    expect(via.isReef(13939)).toBe(true);
    expect(via.isReef(1)).toBe(false);
  });
});

describe('via.rpc', () => {
  it('returns default rpc url', () => {
    const rpc = via.rpc(1);
    expect(rpc).toBe('https://1.rpc.vialabs.io/');
  });

  it('returns undefined for unknown chain', () => {
    expect(via.rpc(99999)).toBeUndefined();
  });
});
