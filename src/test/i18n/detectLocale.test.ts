import { describe, it, expect } from 'vitest'
import { detectLocale, DEFAULT_LOCALE } from '@/i18n/detectLocale'

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
