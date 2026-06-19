# Task 01 — Fondazione tema (palette + font + texture)

**Dipende da:** —
**Obiettivo:** sostituire l'identità dark/neon con il tema carta "Bottega".
È la base che cambia il colpo d'occhio di tutto il sito.

## File

- `src/styles/global.css` (riscrivere `@theme` + base)
- `src/layouts/Layout.astro` (font + meta colore chiaro)

## Passi

1. In `global.css`, sostituire i token `@theme`:
   ```
   --color-paper:      #F6F1E7;
   --color-paper-deep: #ECE4D4;
   --color-ink:        #211C18;
   --color-ink-soft:   #5B524A;
   --color-accent:     #B5481F;   /* terracotta */
   --color-seal:       #7A2E1E;   /* oxblood */
   --color-line:       #D8CDB8;
   --font-display: 'Fraunces', Georgia, serif;
   --font-body:    'Newsreader', Georgia, serif;
   ```
2. `body`: sfondo `--color-paper`, testo `--color-ink`, `--font-body`.
   Headings: `--font-display`. Aggiornare colori link → `--color-accent`.
3. Aggiungere texture grana di carta: un livello SVG noise a opacità ≤ 4% (utility
   riusabile, es. `.paper-grain`), da applicare una volta sola — **non** per sezione.
4. In `Layout.astro`: aggiornare la URL Google Fonts a
   `family=Fraunces:opsz,wght@9..144,400..700&family=Newsreader:wght@400;500;600`,
   mantenendo il pattern `media="print"`/`onload` + `<noscript>`.
5. `Layout.astro` meta: `color-scheme: light`, `theme-color` chiaro (es. `#F6F1E7`),
   rimuovere `content="dark"`.

## Da rimuovere (marcatori slop a livello globale)

- Token `--color-background:#0A0A0F`, `--color-surface`, viola `#6C63FF`.
- Font Bebas Neue, Inter, JetBrains Mono.

## Criteri di accettazione

- Sfondo carta, testo inchiostro caldo, accento terracotta visibili in dev.
- Nessun riferimento residuo a Bebas/Inter/JetBrains o ai colori dark/neon in
  `global.css` e `Layout.astro`.
- Contrasto testo/sfondo ≥ AA.
