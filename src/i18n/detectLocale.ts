export const SUPPORTED_LOCALES = ['en', 'ja'] as const
export type Locale = (typeof SUPPORTED_LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'en'

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
