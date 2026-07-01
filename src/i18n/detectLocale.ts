export const SUPPORTED_LOCALES = ['en', 'ja'] as const
export type Locale = (typeof SUPPORTED_LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'en'

export const LOCALE_STORAGE_KEY = 'locale'

function isLocale(value: string | null): value is Locale {
  return value !== null && (SUPPORTED_LOCALES as readonly string[]).includes(value)
}

/**
 * Read a previously persisted locale from localStorage. Returns undefined
 * when nothing valid is stored or storage is unavailable (SSR / privacy mode).
 */
export function getStoredLocale(): Locale | undefined {
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
    return isLocale(stored) ? stored : undefined
  } catch {
    return undefined
  }
}

/**
 * Persist the chosen locale to localStorage. Silently no-ops when storage
 * is unavailable.
 */
export function storeLocale(locale: string): void {
  if (!isLocale(locale)) return
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  } catch {
    // ignore write failures (private mode, quota, SSR)
  }
}

/**
 * The locale to start with: a persisted choice takes priority, otherwise
 * fall back to browser detection.
 */
export function initialLocale(): Locale {
  return getStoredLocale() ?? detectLocale()
}

/**
 * Determine the best supported locale from the browser's language
 * preferences (navigator.languages / navigator.language — the client-side
 * equivalent of the Accept-Language header).
 *
 * Matches on the primary subtag, so "ja-JP" resolves to "ja". Falls back
 * to DEFAULT_LOCALE when nothing matches or navigator is unavailable (SSR).
 */
export function detectLocale(
  languages: readonly string[] | undefined =
    typeof navigator !== 'undefined'
      ? (navigator.languages ?? [navigator.language])
      : undefined,
): Locale {
  if (!languages) return DEFAULT_LOCALE

  for (const lang of languages) {
    if (!lang) continue
    const primary = lang.toLowerCase().split('-')[0]
    const match = SUPPORTED_LOCALES.find((l) => l === primary)
    if (match) return match
  }

  return DEFAULT_LOCALE
}
