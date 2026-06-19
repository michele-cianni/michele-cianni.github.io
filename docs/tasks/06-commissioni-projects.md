# Task 06 — Commissioni (case study)

**Dipende da:** 01, 02, 03
**Obiettivo:** il cuore del sito. Trasformare i progetti in case study editoriali
("Commissioni") orientati al cliente. Niente browser-mockup finto.

## File

- `src/components/Projects.astro` (riscrivere → "Commissioni")
- `src/components/ProjectCard.astro` (riscrivere → case study)

## Anatomia di una commissione

```
COMMISSIONE 01 · ⊙                      settore: <sector>
<title>
─────────────────────────────────────────────────────────
Il problema    →  <problem>
Cosa ho fatto  →  <built>
Il risultato   →  <result>
                         tech · <techStack>      → <liveUrl>
```

- Numerazione "Commissione NN" in `--font-display` / registro.
- Testi presi dai campi localizzati di `projects.json` (task 03) via `lang`.
- Tech come didascalia sobria, non badge wall colorati.
- Link live come unica CTA per card.

## Da rimuovere

- `browser-frame` / `browser-chrome` / `viewport-*` (mockup finto).
- `viewport-grid`, `viewport-glow`, `live-dot` pulsante.
- `card-ghost-index` Bebas, glass (`backdrop-blur`), box-shadow neon.
- Eyebrow "Featured Project" e colori per-card neon (`projectColors`).

## Criteri di accettazione

- Ogni progetto reso come problema→fatto→risultato, tradotto su `/` e `/en/`.
- Nessun mockup/glass/glow/Bebas residuo.
- Link live funzionanti; tech come caption.
- Reduced-motion rispettato.
