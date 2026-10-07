# Task 14 — Font-loading CV + transition più leggere

**Dipende da:** 09, 11
**Obiettivo:** il CV non riusa il trucco di font-loading non bloccante già
presente in `Layout.astro`; due hover ad accento animano `width` invece di
`transform` (costo di layout evitabile, impatto minimo ma gratuito da
correggere).

## File

- `public/files/Michele-Cianni_CV.html` (`<link>` font, righe ~12-15)
- `src/components/Navbar.astro` (`.nav-item::after`, riga ~165)
- `src/components/Footer.astro` (`.footer-nav-item::after`, riga ~234)

## Passi

1. Nel CV, sostituire il `<link rel="stylesheet">` bloccante dei font con lo
   stesso pattern di `Layout.astro` (righe 45-58): `preconnect` +
   `media="print" onload="this.media='all'"` + fallback `<noscript>`.
2. In Navbar e Footer, cambiare l'hover dell'underline da
   `transition: width` a `transform: scaleX(0) → scaleX(1)` con
   `transform-origin: left` (stesso effetto visivo, nessun layout thrash).

## Criteri di accettazione

- Il CV non blocca il first paint sul caricamento font (verificare in
  devtools → Network, il font non è più "render blocking").
- L'underline su nav desktop/footer si comporta visivamente come prima.
