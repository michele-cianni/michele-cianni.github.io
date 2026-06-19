# Task 03 — Modello dati (profile + projects bilingue)

**Dipende da:** 02
**Obiettivo:** estendere i dati per reggere i case study bilingue e la copy
client-facing. Niente componenti qui, solo dati + tipi.

## File

- `src/data/projects.json` (estendere)
- `src/data/profile.json` (copy)
- eventuale aggiornamento dell'interfaccia `Project` (in `ProjectCard.astro` o tipo condiviso)

## Passi

1. `projects.json` — per ogni progetto aggiungere campi case-study **localizzati**:
   ```jsonc
   "sector":  { "it": "…", "en": "…" },
   "problem": { "it": "…", "en": "…" },
   "built":   { "it": "…", "en": "…" },
   "result":  { "it": "…", "en": "…" }
   ```
   Titolo, `techStack`, `liveUrl`, `order` restano condivisi. (Alternativa: copy in
   `src/i18n` riferita per `id` — decidere e restare coerenti.)
2. Aggiornare l'interfaccia `Project` di conseguenza.
3. `profile.json`: bio in 1ª persona orientata al cliente; tagline bilingue
   client-facing (claim principale "Costruisco siti che portano clienti" / "I build
   websites that bring you customers").

## ⚠️ Vincolo contenuti

**Niente metriche inventate.** `result` si scrive solo con esiti reali (chiedere a
Michele i dati di G&M e Ledershow). In mancanza, copy qualitativa onesta senza cifre.

## Criteri di accettazione

- `projects.json` valido, con campi localizzati per entrambi i progetti.
- Tipi aggiornati, nessun errore TypeScript in `astro build`.
- Nessun numero/risultato non verificato.
