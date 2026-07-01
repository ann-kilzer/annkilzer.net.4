import { describe, it, expect, beforeEach } from 'vitest'
import {
  detectLocale,
  DEFAULT_LOCALE,
  getStoredLocale,
  storeLocale,
  initialLocale,
  LOCALE_STORAGE_KEY,
} from '@/i18n/detectLocale'

describe('detectLocale', () => {
  it('detects Japanese from an exact primary tag', () => {
    expect(detectLocale(['ja'])).toBe('ja')
  })

  it('detects Japanese from a region-qualified tag', () => {
    expect(detectLocale(['ja-JP'])).toBe('ja')
  })

  it('detects English from a region-qualified tag', () => {
    expect(detectLocale(['en-US'])).toBe('en')
  })

  it('picks the first supported language in preference order', () => {
    expect(detectLocale(['fr', 'ja', 'en'])).toBe('ja')
  })

  it('is case-insensitive', () => {
    expect(detectLocale(['JA-JP'])).toBe('ja')
  })

  it('falls back to default for unsupported languages', () => {
    expect(detectLocale(['fr', 'de', 'zh'])).toBe(DEFAULT_LOCALE)
  })

  it('falls back to default for an empty list', () => {
    expect(detectLocale([])).toBe(DEFAULT_LOCALE)
  })

  it('falls back to default when navigator is unavailable', () => {
    expect(detectLocale(undefined)).toBe(DEFAULT_LOCALE)
  })

  it('skips empty entries', () => {
    expect(detectLocale(['', 'ja'])).toBe('ja')
  })
})

describe('locale persistence', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('returns undefined when nothing is stored', () => {
    expect(getStoredLocale()).toBeUndefined()
  })

  it('round-trips a stored locale', () => {
    storeLocale('ja')
    expect(getStoredLocale()).toBe('ja')
  })

  it('ignores an invalid stored value', () => {
    localStorage.setItem(LOCALE_STORAGE_KEY, 'fr')
    expect(getStoredLocale()).toBeUndefined()
  })

  it('does not persist an unsupported locale', () => {
    storeLocale('fr')
    expect(localStorage.getItem(LOCALE_STORAGE_KEY)).toBeNull()
  })
})

describe('initialLocale', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('prefers a stored locale over browser detection', () => {
    storeLocale('ja')
    expect(initialLocale()).toBe('ja')
  })

  it('falls back to browser detection when nothing is stored', () => {
    // jsdom navigator.language is "en-US" by default
    expect(initialLocale()).toBe('en')
  })
})
