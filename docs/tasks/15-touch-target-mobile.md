# Task 15 — Touch target ≥44px

**Dipende da:** 09, 11
**Obiettivo:** toggle lingua e bottone menu mobile sono sotto i 44px di
altezza (passano il floor WCAG 2.2 AA di 24px, ma non la soglia comune di
usabilità mobile di 44px) — il bottone menu è il controllo di navigazione
più importante su schermo piccolo.

## File

- `src/components/Navbar.astro` (`.lang-toggle` ~26px, `#menu-btn` ~27px)
- `src/components/Footer.astro` (`.social-link`, 34×34px)
- `public/files/Michele-Cianni_CV.html` (`.print-btn`, `.contact-pill`)

## Passi

1. Aumentare il padding verticale di `.lang-toggle` e `#menu-btn` finché
   l'altezza calcolata raggiunge ~44px, mantenendo font-size e border
   invariati (solo l'area di tap cresce).
2. Stesso trattamento per `.social-link` nel footer (può restare quadrato,
   solo più grande) e per `.print-btn`/`.contact-pill` nel CV.

## Criteri di accettazione

- Altezza calcolata (devtools, viewport mobile) ≥ 44px per tutti gli
  elementi sopra.
- Nessuna rottura di layout su mobile (375px) e desktop.
