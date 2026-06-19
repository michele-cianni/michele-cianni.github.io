# Task 10 — Pulizia + verifica

**Dipende da:** tutti
**Obiettivo:** rimuovere codice/asset morti e verificare il redesign end-to-end.

## Pulizia

- Rimuovere componenti/asset non più usati (es. `Skills.astro` se assorbito al
  task 07, `src/assets/background.svg` se inutilizzato).
- Aggiornare `index.astro` (IT) e `en/index.astro` (EN) con l'ordine sezioni
  finale: Insegna → Manifesto → Commissioni → Come lavoro → Contatto.
- `UnderConstruction.astro`: lasciare invariato (flag `UNDER_CONSTRUCTION`).
- Grep anti-slop sull'intero `src/`: nessun residuo di `bg-grid`, `bg-glow`,
  `backdrop-filter`, `Bebas`, `#6C63FF`, `#0A0A0F`, `developer.ts`, `process.exit`.

## Verifica

- `npm run dev`: controllare `/` (IT) e `/en/`.
  - Toggle lingua, gerarchia client-first, leggibilità case study.
- Responsive mobile/desktop.
- `prefers-reduced-motion`: nessuna animazione forzata.
- Contrasto testo/sfondo ≥ **AA** su carta.
- `npm run build`: pulito; verificare sitemap + `hreflang` nell'output.

## Criteri di accettazione

- Build pulita, entrambe le route generate.
- Grep anti-slop senza risultati.
- Nessun componente/asset morto referenziato.
