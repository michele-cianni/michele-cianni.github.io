---
name: i18n-check
description: Verify it/en parity across ui.ts, profile.json, projects.json and both index pages
disable-model-invocation: true
---

Read-only audit of Italian/English parity. Report findings; do not edit unless asked.

1. **Page composition**: compare the component imports and the `<main>` section order in `src/pages/index.astro` and `src/pages/en/index.astro`. Only the lang/locale arguments and relative import paths may differ.
2. **UI strings**: in `src/i18n/ui.ts`, every key in `it` must exist in `en` and vice versa. Flag empty values and values identical across locales (possible untranslated copy).
3. **Content JSON**: in `src/data/profile.json` and `src/data/projects.json`, every multilingual field (`{ "it": ..., "en": ... }`) must have both keys, non-empty. Every project needs an `order` field, unique across projects.
4. **Unused/missing keys**: grep `t('...')` calls under `src/` and flag keys used but not defined in `ui.ts`, and keys defined but never used.

Output: a short list grouped by check, each item with `file:line` and the fix. If everything passes, say so in one line.
