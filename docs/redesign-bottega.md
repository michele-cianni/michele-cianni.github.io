# Redesign sito — Concept "La Bottega"

Piano dettagliato per il redesign di `michele-cianni.github.io`.
Stack invariato: **Astro 6 + Tailwind v4 (via Vite) + sitemap**.

---

## 1. Contesto e obiettivo

Il sito attuale è tecnicamente curato ma porta tutti i cliché del portfolio dev
generato a macchina ("AI slop"):

- Dark `#0A0A0F` + viola neon `#6C63FF` (palette default di mezzo template).
- Sfondo dot-grid + radial glow ripetuto in **ogni** sezione.
- Finta finestra terminale (`developer.ts`, `// new_message.md`).
- Eyebrow mono `// 01 — about.me`, numerazione decorativa.
- Glassmorphism (`backdrop-blur`) su ogni card.
- Pallino verde "Available for opportunities", scroll-hint, Bebas Neue gigante.
- Browser-mockup finto nelle project card.

Il problema non è il singolo effetto ma la **somma**: zero scelte personali.

### Decisioni di brainstorming (confermate)

| Asse | Scelta |
|------|--------|
| Estetica | Warm / personale — carta calda, serif, voce in prima persona |
| Concept | **La Bottega** (artigiano digitale) |
| Pubblico | **Clienti freelance** (SME IT/DE) — prova, risultati, fiducia |
| Lingua | **Bilingue IT/EN**, IT default, con toggle |
| Ambizione | **Reinvenzione** (concept nuovo), stesso stack |

**Esito atteso:** un sito memorabile e umano dove i 2 progetti reali (G&M
Escavatori, Ledershow) sono il centro, raccontati come storie di valore per il
cliente — non come liste di tecnologie.

---

## 2. Identità visiva

Sostituire interamente i token in `src/styles/global.css` (`@theme`).

### Palette (carta calda)

```
--color-paper:        #F6F1E7   /* sfondo avorio caldo */
--color-paper-deep:   #ECE4D4   /* sezioni alternate / card */
--color-ink:          #211C18   /* testo primario, quasi-nero caldo */
--color-ink-soft:     #5B524A   /* testo secondario seppia */
--color-accent:       #B5481F   /* terracotta/ruggine — primario */
--color-seal:         #7A2E1E   /* oxblood — sigillo/timbro */
--color-line:         #D8CDB8   /* righe/bordi sottili su carta */
```

Massimo 2 accenti. Niente nero puro, niente neon.

### Tipografia

Scartare **Bebas Neue / Inter / JetBrains Mono**. Introdurre:

- **Fraunces** (display serif variabile, optical sizing, carattere letterpress) →
  titoli, wordmark, numeri "Commissione".
- **Newsreader** *oppure* **Spectral** (serif leggibile) → corpo testo.
- Mono solo per micro-etichette di registro ("COMMISSIONE 01") se serve; in
  alternativa maiuscoletto serif. **Niente mono diffuso** (era un marcatore slop).

Caricamento: mantenere il pattern attuale in `Layout.astro` (preconnect +
stylesheet `media="print"`/`onload` + `<noscript>`), aggiornando la URL Google
Fonts a `Fraunces` + `Newsreader`.

### Texture e motivi

- **Grana di carta** sottile via SVG noise a bassa opacità (≤ 4%) come unico
  livello di sfondo — rimpiazza dot-grid + glow su tutte le sezioni.
- **Sigillo/timbro** `⊙` in oxblood come accento ricorrente (hero, separatori,
  fine sezione).
- Righe-ledger sottili (`--color-line`) per separare blocchi.
- Bordi netti. **Eliminare** `backdrop-filter`, box-shadow neon, glow.

### Movimento

- Mantenere lo scroll-reveal soft (IntersectionObserver già presente) ma più
  sobrio. Conservare il rispetto di `prefers-reduced-motion` ovunque (già fatto
  bene nel codice attuale — replicare il pattern).
- Rimuovere: cursore lampeggiante, shimmer-line neon, scroll-hint "scroll",
  pallino verde pulsante.

---

## 3. Struttura della pagina (one-pager, ordine client-first)

| # | Sezione | Contenuto | Sostituisce |
|---|---------|-----------|-------------|
| 1 | **Insegna** (hero) | Wordmark "Bottega Cianni" + value prop forte 1ª persona ("Costruisco siti che portano clienti") + sottotitolo breve + CTA "Parliamo" / "I lavori". Toggle lingua nel nav. | `Hero.astro` |
| 2 | **Manifesto** | Chi sono + come lavoro, voce diretta. Spazio per **foto ritratto**. | `About.astro` (via card terminale) |
| 3 | **Commissioni** ⭐ | Cuore del sito. Ogni progetto = case study editoriale: cliente+settore → problema → cosa ho costruito → risultato → tech come didascalia → link live. | `Projects.astro` + `ProjectCard.astro` (via browser-mockup) |
| 4 | **Come lavoro** (opz.) | Cosa offro: sito vetrina, catalogo, form+email transazionale, SEO. Le skill confluiscono qui in modo discreto. | `Skills.astro` (badge wall) |
| 5 | **Contatto** | Form Formspree esistente (`formspree.io/f/maqlljqa`) ri-stilizzato su carta; "Parliamo del tuo progetto". Mantenere i social. | `Contact.astro` |
| 6 | **Footer** | Sobrio su carta. Rimuovere `process.exit(0)`, shimmer neon, logo terminale. | `Footer.astro` |

### Anatomia di una "Commissione" (sezione 3)

```
COMMISSIONE 01 · ⊙                      [settore: macchine edili]
G&M Escavatori
─────────────────────────────────────────────────────────────
Il problema   →  [1-2 frasi: cosa mancava al cliente]
Cosa ho fatto →  [catalogo statico, form validato server-side,
                  email transazionale, SEO IT]
Il risultato  →  [esito REALE — vedi nota metriche]
                                              tech · Next.js, Resend…
                                              → gem-escavatori.it
```

---

## 4. Bilingue IT/EN

Usare l'**i18n nativo di Astro** (no toggle solo-client: serve SEO per ricerche IT).

### `astro.config.mjs`

```js
export default defineConfig({
  site: 'https://michelecianni.dev',   // dominio reale (CNAME)
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: { prefixDefaultLocale: false },  // IT su /, EN su /en/
  },
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap()],
});
```

### Nuovi file i18n

- `src/i18n/ui.ts` — dizionario stringhe UI:
  ```ts
  export const languages = { it: 'Italiano', en: 'English' };
  export const defaultLang = 'it';
  export const ui = {
    it: { 'hero.valueProp': 'Costruisco siti che portano clienti', /* … */ },
    en: { 'hero.valueProp': 'I build websites that bring you customers', /* … */ },
  } as const;
  ```
- `src/i18n/utils.ts` — helper standard Astro:
  ```ts
  import { ui, defaultLang } from './ui';
  export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    return lang in ui ? lang as keyof typeof ui : defaultLang;
  }
  export function useTranslations(lang: keyof typeof ui) {
    return (key: keyof typeof ui[typeof defaultLang]) =>
      ui[lang][key] ?? ui[defaultLang][key];
  }
  ```

### Pagine

- `src/pages/index.astro` (IT) e `src/pages/en/index.astro` (EN): compongono le
  stesse sezioni, ricavano `lang` da `Astro.url` e lo passano ai componenti.
- Ogni componente accetta prop `lang` (e/o riceve la funzione `t`).

### `Layout.astro`

- `<html lang={lang}>` dinamico.
- `<link rel="alternate" hreflang="it" href="…/" />` + `hreflang="en"` + `x-default`.
- `canonical` per locale.
- `color-scheme: light`, `theme-color` chiaro, OG/Twitter aggiornati.

### Toggle lingua

Nel `Navbar`: link `/` ↔ `/en/` (mantenendo l'ancora di sezione se possibile).

---

## 5. Modello dati

### `src/data/projects.json`

Estendere ogni progetto con campi case-study **localizzati**:

```jsonc
{
  "id": "gem-escavatori",
  "sector": { "it": "Macchine edili e agricole", "en": "Construction & agri machinery" },
  "problem": { "it": "…", "en": "…" },
  "built":   { "it": "…", "en": "…" },
  "result":  { "it": "…", "en": "…" },
  "techStack": ["Next.js", "Tailwind CSS", "TypeScript", "Resend", "Vercel"],
  "liveUrl": "https://www.gem-escavatori.it/",
  "order": 1
}
```

Titolo, tech, URL restano condivisi. In alternativa tenere la copy lunga in
`src/i18n` riferita per `id` — scegliere in fase di implementazione.

### `src/data/profile.json`

- Tagline client-facing bilingue (via "Full-Stack Developer & AI Enthusiast" come
  claim principale; tenerla eventualmente come riga secondaria).
- Bio riscritta in 1ª persona, orientata al cliente.

> ⚠️ **Niente metriche inventate.** I "risultati" dei case study (lead, traffico
> organico, conversioni) si scrivono **solo se reali**. Servono i numeri/esiti
> veri di G&M e Ledershow; in mancanza, copy qualitativa onesta (es. "form di
> contatto validato lato server con consegna email affidabile"), senza cifre.

---

## 6. File interessati

**Da riscrivere (estetica Bottega + prop `lang`):**
- `src/styles/global.css` — tema carta (token, font, texture).
- `src/components/Hero.astro` → Insegna.
- `src/components/About.astro` → Manifesto (rimuovere card terminale).
- `src/components/Projects.astro` + `src/components/ProjectCard.astro` → Commissioni
  (rimuovere browser-mockup, glass, glow, ghost-index Bebas).
- `src/components/Contact.astro` → restyle carta (logica form invariata).
- `src/components/Navbar.astro` → semplificare (via logo terminale/cursore/scroll
  shimmer) + toggle lingua.
- `src/components/Footer.astro` → semplificare (via `process.exit(0)`, shimmer).
- `src/components/Skills.astro` → rifondere in "Come lavoro" o lista sobria;
  valutare rimozione come sezione a sé.

**Nuovi:**
- `src/i18n/ui.ts`, `src/i18n/utils.ts`, `src/pages/en/index.astro`.

**Da modificare:**
- `astro.config.mjs` (i18n + `site` su dominio reale).
- `src/layouts/Layout.astro` (font, lang, hreflang, meta chiari).
- `src/data/profile.json`, `src/data/projects.json`.

**Asset:**
- Foto ritratto in `public/` (da fornire).
- `UnderConstruction.astro` resta invariato (flag in `index.astro`).

---

## 7. Da fornire (non bloccante per lo scaffolding)

1. **Foto ritratto** per il Manifesto.
2. **Risultati reali** dei 2 progetti (numeri/esiti veri per i case study).
3. OK su **font** (Fraunces + Newsreader) e **palette** terracotta — si rifinisce a video.

## 8. Verifica

- `npm run dev` → controllare `/` (IT) e `/en/`: toggle lingua, gerarchia
  client-first, leggibilità case study.
- Responsive mobile/desktop; `prefers-reduced-motion`; contrasto **AA** su carta.
- Check anti-slop: nessun dot-grid / glow / glass / terminale / Bebas / neon residuo.
- `npm run build` pulito; sitemap + `hreflang` corretti.

## 9. Sequenza di implementazione suggerita

1. Token tema + font in `global.css` e `Layout.astro` (la base cambia tutto).
2. i18n: config + `ui.ts`/`utils.ts` + pagina `/en/`.
3. Insegna → Manifesto → Commissioni → Contatto → Footer → Navbar/toggle.
4. Dati: `profile.json` + `projects.json` con copy bilingue (placeholder onesti
   finché non arrivano foto/metriche reali).
5. Pulizia: rimuovere asset/codice morto (es. `Skills.astro` se assorbito).
6. Verifica completa (sezione 8).
