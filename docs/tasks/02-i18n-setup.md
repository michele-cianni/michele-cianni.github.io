# Task 02 — Setup i18n IT/EN

**Dipende da:** 01
**Obiettivo:** routing bilingue nativo Astro (IT su `/`, EN su `/en/`) con
dizionario stringhe e helper. No toggle solo-client (serve SEO).

## File

- `astro.config.mjs` (modificare)
- `src/i18n/ui.ts` (nuovo)
- `src/i18n/utils.ts` (nuovo)
- `src/pages/en/index.astro` (nuovo, scaffold)
- `src/layouts/Layout.astro` (lang + hreflang)

## Passi

1. `astro.config.mjs`:
   ```js
   site: 'https://michelecianni.dev',
   i18n: {
     defaultLocale: 'it',
     locales: ['it', 'en'],
     routing: { prefixDefaultLocale: false },
   },
   ```
2. `src/i18n/ui.ts`: `languages`, `defaultLang = 'it'`, oggetto `ui` con tutte le
   stringhe UI per `it` ed `en` (chiavi tipo `hero.valueProp`, `nav.work`, …).
3. `src/i18n/utils.ts`: `getLangFromUrl(url)` e `useTranslations(lang)` (pattern
   standard Astro i18n, con fallback a `defaultLang`).
4. `src/pages/en/index.astro`: scaffold che compone le stesse sezioni di
   `index.astro` passando `lang="en"`.
5. `Layout.astro`: accettare prop `lang`; `<html lang={lang}>`; aggiungere
   `<link rel="alternate" hreflang>` per `it`, `en`, `x-default`; `canonical` per
   locale.

## Criteri di accettazione

- `/` rende IT, `/en/` rende EN (anche solo con placeholder).
- `getLangFromUrl` ritorna la lingua giusta; `useTranslations` fa fallback.
- `hreflang` e `canonical` presenti e corretti nell'HTML generato.
- `npm run build` genera entrambe le route.
