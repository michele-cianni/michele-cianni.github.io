# Task — Redesign sito

Task derivati da [`../redesign-bottega.md`](../redesign-bottega.md).
Ordine di esecuzione consigliato (le dipendenze sono indicate in ogni file).

| # | Task | Dipende da |
|---|------|-----------|
| 01 | [Fondazione tema (palette + font + texture)](01-theme-foundation.md) | — |
| 02 | [Setup i18n IT/EN](02-i18n-setup.md) | 01 |
| 03 | [Modello dati (profile + projects bilingue)](03-data-model.md) | 02 |
| 04 | [Insegna (hero)](04-insegna-hero.md) | 01, 02 |
| 05 | [Manifesto (about)](05-manifesto-about.md) | 01, 02 |
| 06 | [Commissioni (case study)](06-commissioni-projects.md) | 01, 02, 03 |
| 07 | [Come lavoro (servizi/skills)](07-come-lavoro-skills.md) | 01, 02 |
| 08 | [Contatto (form su carta)](08-contatto-contact.md) | 01, 02 |
| 09 | [Navbar + Footer + toggle lingua](09-navbar-footer.md) | 01, 02 |
| 10 | [Pulizia + verifica](10-cleanup-verify.md) | tutti |
| 11 | [Redesign CV HTML (tema carta)](11-cv-redesign.md) | 01 |

Task 12-17 derivano dall'audit tecnico post-redesign in
[`../audit-carta.md`](../audit-carta.md).

| # | Task | Dipende da |
|---|------|-----------|
| 12 | [Reveal visibile di default (no opacity:0)](12-reveal-visibile-default.md) | 04, 05, 06, 07, 08, 09 |
| 13 | [Contrasto WCAG AA (placeholder form + CV)](13-contrasto-wcag.md) | 08, 11 |
| 14 | [Font-loading CV + transition più leggere](14-performance-font-cv.md) | 09, 11 |
| 15 | [Touch target ≥44px](15-touch-target-mobile.md) | 09, 11 |
| 16 | [Validazione + errori form contatto](16-validazione-form-contatto.md) | 08 |
| 17 | [Rimuovere codice morto](17-pulizia-codice-morto.md) | 01 |

## Da fornire da Michele (non bloccante per lo scaffolding)

1. Foto ritratto → task 05.
2. Risultati reali dei 2 progetti → task 03/06 (niente metriche inventate).
3. OK su font (Fraunces + Newsreader) e palette terracotta → task 01.
