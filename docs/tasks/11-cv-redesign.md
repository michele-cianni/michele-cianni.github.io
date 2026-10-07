# Task 11 — Redesign CV HTML (tema carta)

**Dipende da:** 01
**Obiettivo:** portare il CV standalone al tema "carta/bottega", riusando gli
stessi token di `src/styles/global.css` così CV e sito condividono palette e font.

> Il CV è un HTML autonomo (`public/files/Michele-Cianni_CV.html`, CSS inline):
> **non** usa `global.css` né i componenti Astro. Il redesign è una riscrittura
> dei token `:root` e degli stili inline del file, allineati ai valori del sito.

## File

- `public/files/Michele-Cianni_CV.html` (riscrivere `<style>` + `<head>` meta/font)

## Passi

1. Riscrivere il blocco `:root` (righe ~19-29) coi token carta da `global.css`:
   ```
   --bg:      #F6F1E7;
   --surface: #ECE4D4;
   --accent:  #B5481F;   /* terracotta */
   --seal:    #7A2E1E;   /* oxblood */
   --text-1:  #211C18;
   --text-2:  #5B524A;
   --line:    #D8CDB8;
   ```
2. Sostituire i font: `--font-display:'Fraunces',Georgia,serif`,
   `--font-body:'Newsreader',Georgia,serif`. **Eliminare la categoria mono**: i
   testi finora mono (eyebrow, meta, pill, role, footer, skill-category) passano
   a Newsreader/Fraunces con `letter-spacing` ridotto. La gerarchia si tiene con
   peso/dimensione, non col font.
3. Aggiornare il `<link>` Google Fonts allo stesso URL del sito:
   `family=Fraunces:opsz,wght@9..144,400..700&family=Newsreader:wght@400;500;600&display=swap`.
4. Meta: `theme-color` → `#F6F1E7`, `color-scheme` → `light`. `<html lang>` resta `en`.
5. Sostituire l'atmosfera dark: rimuovere `body::before` (glow radiali viola) e
   `body::after` (dot-grid). Opzionale: applicare la texture `.paper-grain` (lo
   stesso SVG noise di `global.css`) su `body`, una volta sola.
6. Adattare i dettagli decorativi al chiaro: bordi/separatori su `--line`,
   `entry::before` e i bullet su `--accent` terracotta. Usare il sigillo `⊙`
   (oxblood `--seal`) come accento, coerente con l'hero del sito (task 04).
7. Rivedere `@media print` (righe ~503-529): vira già al chiaro — riallineare i
   valori override ai nuovi token (accento terracotta al posto di indigo
   `#4338ca`) così schermo e stampa coincidono.
8. Footer: sostituire `process.exit(0) // end of cv` con una chiusura coerente
   col tono "bottega" (es. una firma/timbro o data). Decisione di copy.

## Da rimuovere (marcatori slop)

- Token dark/neon: `#0A0A0F`, `#1A1A2E` (`--surface`), viola `#6C63FF`.
- Font Bebas Neue, Inter, JetBrains Mono (e la variabile `--font-mono`).
- `body::before` / `body::after` (glow radiali + dot-grid).
- Estetica mono-terminale: eyebrow `// curriculum vitae`, footer `process.exit`.

## Criteri di accettazione

- CV su fondo carta, serif, accento terracotta.
- Nessun residuo Bebas / Inter / JetBrains o colori dark/neon nel file.
- Contrasto testo/sfondo ≥ AA.
- `@media print` coerente coi nuovi token (anteprima stampa allineata allo schermo).
- Transizione visiva fluida: dal click "back to portfolio" al sito redesignato
  nessuno stacco di palette/font.
- `prefers-reduced-motion` rispettato (mantenere il blocco esistente).
