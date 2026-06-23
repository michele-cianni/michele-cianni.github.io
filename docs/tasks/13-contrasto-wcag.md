# Task 13 — Contrasto WCAG AA (placeholder form + CV)

**Dipende da:** 08, 11
**Obiettivo:** due testi sotto la soglia AA (4.5:1), verificati col calcolo
di luminanza/contrasto WCAG, non a occhio.

## File

- `src/components/Contact.astro` (`.form-input::placeholder`, riga ~429)
- `public/files/Michele-Cianni_CV.html` (`.cv-updated`, blocco `<style>`)

## Passi

1. `Contact.astro` — `.form-input::placeholder` usa
   `color-mix(in srgb, var(--color-ink-soft) 65%, transparent)`, che rende
   come `rgb(145,138,129)` su `#F6F1E7`: contrasto **3.04:1**. Sostituire con
   `var(--color-ink-soft)` diretto (6.78:1, passa con margine) o con un mix
   ≥85%.
2. `Michele-Cianni_CV.html` — `.cv-updated` usa `opacity: .8` sul colore
   `--text-2`, che rende **4.21:1** (appena sotto soglia). Portare l'opacity
   a ~0.9 o usare `--text-1` attenuato.

## Criteri di accettazione

- Entrambi i colori risultanti ≥ 4.5:1 contro lo sfondo carta (verificare col
  calcolo di contrasto, non visivamente).
