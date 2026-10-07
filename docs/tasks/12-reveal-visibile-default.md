# Task 12 — Reveal visibile di default (no `opacity: 0`)

**Dipende da:** 04, 05, 06, 07, 08, 09
**Obiettivo:** i blocchi a comparsa (`*-reveal`) sono `opacity: 0` di default
e diventano visibili solo quando un `IntersectionObserver` aggiunge una
classe. Senza JS che parte, o su print/screenshot headless, restano
invisibili per sempre. È il pattern che la regola motion del design system
vieta esplicitamente ("Reveal animations must enhance an already-visible
default").

## File

- `src/components/About.astro` (`.about-reveal`)
- `src/components/Projects.astro` (`.projects-reveal`)
- `src/components/ProjectCard.astro` (`.commission-reveal`)
- `src/components/Skills.astro` (`.services-reveal`)
- `src/components/Contact.astro` (`.contact-reveal`)
- `src/components/Footer.astro` (`.reveal`)
- `src/styles/global.css` (`scroll-behavior: smooth`, riga ~19)

## Passi

1. In ogni CSS di cui sopra, invertire lo stato di default: l'elemento parte
   visibile (`opacity: 1; transform: none`). La classe aggiunta dallo script
   diventa lo stato di **partenza** dell'animazione di entrata (l'elemento è
   visibile da subito; JS aggiunge solo l'enhancement quando l'observer è
   pronto), non lo stato finale che sblocca la visibilità.
2. Aggiungere in ognuno dei 6 blocchi `<style>` un reset `@media print` che
   forzi `opacity: 1; transform: none; animation: none` — stesso pattern già
   presente in `public/files/Michele-Cianni_CV.html` (`@media print`).
3. In `global.css`, aggiungere:
   ```css
   @media (prefers-reduced-motion: reduce) {
     html { scroll-behavior: auto; }
   }
   ```

## Criteri di accettazione

- Disattivando JavaScript nel browser, About/Skills/Commissioni/Contatto/
  Footer sono visibili (senza animazione, va bene).
- Anteprima di stampa (`Ctrl+P`) di `/` e `/en/` mostra tutte le sezioni.
- Le animazioni di entrata funzionano ancora normalmente con JS attivo.
- `prefers-reduced-motion: reduce` disattiva anche lo scroll fluido.
