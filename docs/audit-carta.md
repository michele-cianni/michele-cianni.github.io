# Audit tecnico — tema carta

Audit di qualità tecnica (`/impeccable audit`) sul sito live e sul CV HTML,
dopo il completamento del redesign "carta" (task 01-11). Sola diagnosi: non
applica fix, li elenca nei task 12-17.

Metodo: lettura diretta di ogni componente/layout/style, scansione con lo
scanner statico del progetto (`detect.mjs`), verifica matematica (non a
occhio) di due sospetti fallimenti di contrasto WCAG.

## Punteggio

| # | Dimensione | Punteggio | Nota |
|---|------------|-----------|------|
| 1 | Accessibilità | 3/4 | Placeholder form sotto soglia AA (3.04:1, verificato) |
| 2 | Performance | 3/4 | Il CV non riusa il trucco di font-loading del sito |
| 3 | Responsive | 3/4 | Toggle lingua e menu mobile sotto i 44px di touch target |
| 4 | Theming | 3/4 | `UnderConstruction.astro` morto, palette dark/neon ancora nel repo |
| 5 | Anti-pattern | 3/4 | Nessun ban violato dal vivo; unico punto d'attenzione: zero immagini |
| **Totale** | | **15/20** | **Buono — sistemare i punti deboli** |

## Verdetto anti-pattern

**Superato.** Niente gradient text, niente glassmorphism, niente hero-metric,
niente griglie di card identiche, niente eyebrow tracciate ripetute, niente
side-stripe (la riga di `.entry::before` nel CV è 1px, è la "riga da
registro" voluta, non uno stripe decorativo). Il sigillo ⊙ e la numerazione
"Commissione NN" sono una voce distintiva reale, applicata con coerenza.

Due punti d'attenzione onesti, non fallimenti:

- **Fraunces + Newsreader** sono entrambi nella reflex-reject list dei font
  "default AI" — ma l'identità è già stata scelta e documentata in
  `DESIGN.md`: nessuna azione raccomandata, solo consapevolezza.
- **Vicinanza alla lane "editorial-typographic"**: serif display + righe da
  registro + label maiuscole piccole + palette quasi monocromatica + zero
  immagini in tutto il sito. Sigillo, "Commissione" e terracotta sono
  differenziatori reali, ma l'assenza totale di immagini è la leva più
  concreta per allontanarsi dalla lane (già tracciata in task 05, foto
  ritratto).

## Sintesi

- Punteggio: **15/20** (Buono)
- Problemi: 0 P0, 2 P1, 5 P2, 4 P3 (dettaglio nei task 12-17)
- Falsi positivi verificati ed esclusi: `About.astro:13` ("broken image" — è
  solo `<img>` citato in un commento), `Layout.astro:49` ("single font" — lo
  stesso `<link>` carica sia Fraunces che Newsreader, il regex dello scanner
  ha letto solo il primo nome).

## Cosa fare

| Task | Priorità | Titolo |
|------|----------|--------|
| [12](tasks/12-reveal-visibile-default.md) | P1 | Reveal visibile di default (no `opacity: 0`) |
| [13](tasks/13-contrasto-wcag.md) | P1 | Contrasto WCAG AA (placeholder form + CV) |
| [14](tasks/14-performance-font-cv.md) | P2 | Font-loading CV + transition più leggere |
| [15](tasks/15-touch-target-mobile.md) | P2 | Touch target ≥44px (toggle lingua, menu, CV) |
| [16](tasks/16-validazione-form-contatto.md) | P2 | Validazione + messaggi d'errore form contatto |
| [17](tasks/17-pulizia-codice-morto.md) | P3 | Rimuovere `UnderConstruction.astro` e CSS morto |

La foto ritratto (P2, lane editorial) è già tracciata in
[task 05](tasks/05-manifesto-about.md) — nessun task nuovo. Dopo aver chiuso
12-17, ri-eseguire `/impeccable audit` per verificare il punteggio.

## Cose che funzionano già

- Palette di base con margine reale: ink-soft su carta **6.78:1**, ink su
  carta **15:1**, accento su carta **4.77:1** (verificato, non assunto).
- `prefers-reduced-motion` gestito correttamente e ovunque tranne un caso
  (vedi task 12).
- Token (`--color-*`, `--font-*`) usati con coerenza in ogni file live; i
  soli valori fuori sistema sono in codice morto.
- Disciplina anti-pattern solida: niente mono, niente glow, niente terminal
  finto — residuo zero del vecchio tema.
