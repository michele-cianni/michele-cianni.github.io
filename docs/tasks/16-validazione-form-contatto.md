# Task 16 — Validazione + errori form contatto

**Dipende da:** 08
**Obiettivo:** il form ha `novalidate` ma nessuna validazione/messaggio
d'errore custom a sostituirla: chi salta un campo obbligatorio non ha
nessun feedback prima del POST a Formspree.

## File

- `src/components/Contact.astro` (`<form novalidate>`, riga ~111)

## Passi

Scegliere una delle due:

- **A (minima):** rimuovere `novalidate` e lasciare la validazione nativa
  del browser (i campi sono già `required` e già stilizzati su `:focus`).
- **B:** se la UI nativa va evitata di proposito, aggiungere un piccolo
  script di validazione con testo d'errore visibile e `aria-invalid`/
  `aria-describedby` sui campi.

## Criteri di accettazione

- Sottomettere il form con un campo obbligatorio vuoto produce un feedback
  visibile (nativo o custom) prima dell'invio.
