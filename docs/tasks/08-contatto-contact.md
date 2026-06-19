# Task 08 — Contatto (form su carta)

**Dipende da:** 01, 02
**Obiettivo:** ri-stilizzare la sezione contatto sul tema carta, mantenendo la
logica del form. Tono: "Parliamo del tuo progetto".

## File

- `src/components/Contact.astro` (restyle)

## Da mantenere

- `action="https://formspree.io/f/maqlljqa"`, `method="POST"`, campi e validazione.
- Link social (GitHub, LinkedIn, Telegram, WhatsApp, Instagram) e contatti
  (email/telefono) da `profile.json`.

## Da cambiare

- Stile carta: input/textarea con bordi `--color-line`, focus terracotta.
- Heading "Parliamo del tuo progetto" / "Let's talk about your project" da `ui.ts`.
- Label/placeholder tradotti per lingua.

## Da rimuovere

- `form-card-header` finto terminale (`// new_message.md`, dot rossi/gialli/verdi).
- `contact-bg-grid`, `contact-bg-glow`, glass.
- Eyebrow `// 04 — contact`.

## Criteri di accettazione

- Form invia ancora a Formspree; campi e `required` invariati.
- Stile carta coerente; label/placeholder tradotti su `/` e `/en/`.
- Nessun terminale/grid/glow residuo.
