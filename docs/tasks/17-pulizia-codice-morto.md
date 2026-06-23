# Task 17 — Rimuovere codice morto (vecchio tema + CSS inutilizzato)

**Dipende da:** 01
**Obiettivo:** `UnderConstruction.astro` non è mai renderizzato
(`UNDER_CONSTRUCTION = false` in entrambi gli `index.astro`) ma porta ancora
la palette dark/neon/glassmorphism che il redesign ha sostituito — 18KB di
codice morto che contraddice il design system attuale. `global.css` ha
ancora stili `<code>`/`<pre>` con border-radius fuori token, anch'essi non
usati da nessun componente.

## File

- `src/components/UnderConstruction.astro`
- `src/pages/index.astro`, `src/pages/en/index.astro` (rimuovere import/flag)
- `src/styles/global.css` (righe ~71-107, blocco "Code")

## Passi

1. Verificare che non ci sia un piano a breve termine per riattivare
   `UNDER_CONSTRUCTION` (chiedere a Michele se serve ancora).
2. Se confermato inutile: eliminare `UnderConstruction.astro`, e in
   entrambi gli `index.astro` rimuovere l'import e il flag
   `UNDER_CONSTRUCTION`/il render condizionale.
3. In `global.css`, eliminare il blocco di stili `code`/`pre`/`kbd`/`samp`
   (nessun markdown o code-block è renderizzato sul sito).

## Criteri di accettazione

- Build pulita (`npm run build`), nessun riferimento residuo a
  `UnderConstruction`.
- `node ~/.claude/skills/impeccable/scripts/detect.mjs --json src/` non
  segnala più `design-system-radius` su `global.css`.
