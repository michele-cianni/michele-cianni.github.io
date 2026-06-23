# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

A static personal portfolio site for Michele Cianni. Astro v7 + Tailwind v4 + TypeScript (strict). No client framework, no backend — content lives in JSON, the contact form is markup only.

## Commands

- `npm run dev` — dev server at `localhost:4321`
- `npm run host` — dev server exposed on the LAN (`--host`)
- `npm run build` — production build to `./dist/`
- `npm run preview` — serve the built `./dist/` locally

No test or lint scripts exist. Type-checking comes from `astro build` (tsconfig extends `astro/tsconfigs/strict`). Requires Node >= 22.12.

## Architecture

**Content vs. UI strings — two separate systems.**
- `src/data/profile.json` and `src/data/projects.json` hold all *content*. Multilingual fields are nested objects: `{ "it": "...", "en": "..." }` (see `problem`, `built`, `result`, `sector`, `bio`, etc.). Components pick the language at render time.
- `src/i18n/ui.ts` holds short *UI strings* (nav labels, headings, form labels) as a flat key map per locale. `src/i18n/utils.ts` exposes `getLangFromUrl(Astro.url)` and `useTranslations(lang)` → `t(key)`, which falls back to the default locale if a key is missing.

**i18n routing (Astro built-in).** `astro.config.mjs` sets `defaultLocale: 'it'` with `prefixDefaultLocale: false`:
- Italian is served at `/` → `src/pages/index.astro`
- English is served at `/en/` → `src/pages/en/index.astro`
- The two index pages are **maintained by hand** and duplicate the same component composition (`Navbar → Hero → About → Projects → Skills → Contact → Footer`). There is no `[lang]` dynamic route. Adding a locale = add to `astro.config` locales + add a column to `ui.ts` + create a new `src/pages/<lang>/index.astro`.
- `Layout.astro` builds `hreflang` alternates and strips the `/en/` prefix to derive the locale-agnostic path.

**Components are self-contained.** Each `src/components/*.astro` owns its markup, a scoped `<style>`, and (where needed) an inline `<script>` for vanilla-JS behavior — e.g. the `IntersectionObserver` scroll-reveal pattern in `Projects.astro`. No shared JS bundle, no UI library. Components read content directly from the data JSON and call `t()` for labels.

**Styling — Tailwind v4, configured in CSS.** There is no `tailwind.config.js`. `src/styles/global.css` does `@import "tailwindcss"` and defines the theme (colors, fonts) in an `@theme {}` block. Tailwind is wired via `@tailwindcss/vite` in `astro.config.mjs`. The design is a light "paper" aesthetic (`paper-grain` body texture, Fraunces + Newsreader serif fonts loaded in `Layout.astro`).

**`Layout.astro`** is the only layout: SEO/OG/Twitter meta, canonical + hreflang links, font loading, favicons. Page-level `<title>`/`description`/`lang` come in as props.

## Conventions / gotchas

- New UI string → add it to **both** `it` and `en` in `src/i18n/ui.ts` (the type is derived from the `it` keys).
- New project → append to `src/data/projects.json` with an `order` field (Projects sorts by it) and `{it,en}` content fields.
- A change to the page section list must be applied to **both** `src/pages/index.astro` and `src/pages/en/index.astro`.
- `index.astro` has an `UNDER_CONSTRUCTION` flag that swaps in `UnderConstruction.astro` when `true`.

## Deploy

Push to `main` → `.github/workflows/deploy.yml` builds and deploys to GitHub Pages. Custom domain `michelecianni.dev` (CNAME written during the workflow and in `public/CNAME`). `astro.config.mjs` `site` must match this domain for correct canonical/sitemap URLs.
