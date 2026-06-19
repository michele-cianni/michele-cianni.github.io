# Task 09 — Navbar + Footer + toggle lingua

**Dipende da:** 01, 02
**Obiettivo:** semplificare nav e footer sul tema carta e aggiungere il toggle
lingua IT/EN.

## File

- `src/components/Navbar.astro` (riscrivere)
- `src/components/Footer.astro` (riscrivere)

## Navbar

- Wordmark/iniziali in `--font-display` (no logo terminale `[MC]_` con cursore).
- Link sezioni con etichette tradotte (`ui.ts`): Manifesto, Commissioni, Servizi,
  Contatto, CV.
- **Toggle lingua**: link `/` ↔ `/en/`.
- Mantenere il menu mobile overlay, ristilizzato su carta.

## Footer

- Identità + social + copyright, sobrio su carta.
- Rimuovere: `process.exit(0)` exit-strip, shimmer-line neon, logo terminale,
  `// tagline` mono.

## Da rimuovere (entrambi)

- `scroll-bar` neon gradient (valutare: tenerlo in terracotta tenue o rimuoverlo).
- shimmer-line, cursori lampeggianti.

## Criteri di accettazione

- Toggle lingua funziona da `/` a `/en/` e viceversa.
- Nav/footer su carta, nessun terminale/shimmer/neon residuo.
- Menu mobile funzionante e accessibile (`aria-*` invariati).
