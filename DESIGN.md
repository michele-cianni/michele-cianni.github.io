---
name: Bottega Cianni
description: Warm paper-and-ink portfolio for a freelance developer — case studies over tech lists
colors:
  paper: "#F6F1E7"
  paper-deep: "#ECE4D4"
  ink: "#211C18"
  ink-soft: "#5B524A"
  accent: "#B5481F"
  seal: "#7A2E1E"
  line: "#D8CDB8"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    letterSpacing: "0.05em"
rounded:
  none: "0px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0.875rem 2rem"
---

# Design System: Bottega Cianni

## Overview

**Creative North Star: "La Bottega" — the digital workshop.**

A craftsperson's ledger, not a developer's terminal. The system trades the previous dark/neon dev-portfolio cliché (near-black background, neon-purple accent, dot-grid glow, fake terminal windows) for warm paper, ink, and a single confident terracotta accent — the visual register of a workshop record book, not a SaaS landing page. Depth and separation come from ledger-rule lines and generous space, never from shadow or blur.

This system explicitly rejects: dark `#0A0A0F`/neon-purple `#6C63FF` theming, dot-grid and radial-glow backgrounds, glassmorphism/`backdrop-blur`, fake terminal UI, blinking cursors, pulsing status dots, scroll-hint shimmer, and oversized Bebas Neue display type.

**Key Characteristics:**
- Warm paper background, ink-colored text, one terracotta accent
- Display serif (Fraunces) for headings, readable serif (Newsreader) for body
- Flat by design — no shadows, no blur, no glow
- A single oxblood "seal" mark (⊙) as the only recurring decorative motif

## Colors

A two-accent, paper-grounded palette: warm neutrals carry the page, terracotta carries emphasis, oxblood is reserved for a single recurring mark.

### Primary
- **Terracotta** (`#B5481F`): the one strong accent — links, primary CTAs, "Commissione" numbering. Used deliberately, not decoratively.

### Secondary
- **Oxblood Seal** (`#7A2E1E`): reserved for the ⊙ seal/stamp motif in the hero, section dividers, and section ends. Not a general-purpose accent.

### Neutral
- **Warm Ivory Paper** (`#F6F1E7`): primary background.
- **Deep Paper** (`#ECE4D4`): alternating sections / card backgrounds.
- **Warm Quasi-Black Ink** (`#211C18`): primary text.
- **Soft Sepia Ink** (`#5B524A`): secondary text.
- **Ledger Line** (`#D8CDB8`): thin borders/rules separating blocks.

### Named Rules
**The Two-Accent Rule.** Terracotta and oxblood are the only accents anywhere in the system. No third color competes for attention.
**The No-Pure-Black Rule.** Never `#000`. Ink is always the warm `#211C18`, never neutral black.

## Typography

**Display Font:** Fraunces (variable, optical sizing), fallback Georgia, serif
**Body Font:** Newsreader, fallback Georgia, serif
**Label/Mono Font:** none — micro-labels use small-caps/letter-spaced Newsreader, not monospace.

**Character:** A letterpress display serif paired with a calm reading serif — editorial and warm, not technical. Monospace is banned outright; it was the previous design's "developer" signal and is being deliberately removed.

### Hierarchy
- **Display** (400, `clamp(2rem, 5vw, 3.5rem)`, line-height 1.2): page/section headings, wordmark "Bottega Cianni", "Commissione NN" numbering.
- **Body** (400, 1rem, line-height 1.7): case-study copy, manifesto text. Cap at 65-75ch line length.
- **Label** (500, 0.8125rem, letter-spacing 0.05em): micro-labels like "COMMISSIONE 01" — small-caps serif, never monospace.

### Named Rules
**The No-Mono Rule.** Monospace type is fully removed; it read as a "developer" costume in the previous design. Micro-labels use letter-spaced serif instead.

## Elevation

Flat by design. No shadows, no blur, no glow anywhere in the system — the previous theme's glassmorphism (`backdrop-blur` on every card) and neon glows are explicitly removed. The only background treatment is a single, subtle paper-grain SVG noise texture (≤4% opacity) applied once globally, never per-section. Separation between blocks comes from thin ledger-rule borders (`--color-line`, `#D8CDB8`), not elevation.

### Named Rules
**The Flat-By-Default Rule.** Surfaces never cast shadows. Depth is conveyed by paper texture and ledger lines, not by box-shadow or blur.

## Components

### Buttons
- **Shape:** sharp corners, no border-radius (`rounded: 0`) — "bordi netti" (clean edges) replaces the previous design's rounded/glass treatment.
- **Primary:** terracotta background (`#B5481F`), paper-colored text, padding `0.875rem 2rem` *(exact padding not yet locked in the source docs — confirm during Task 04 implementation)*.
- **Hover / Focus:** opacity or ink-shift transition only; no glow, no shadow.
- **Secondary/Ghost:** ink-colored text on transparent/paper background, no fill.

### Case-Study Block ("Commissione") — signature component
The heart of the site. Not a card — a ledger entry. Top row: small-caps label "COMMISSIONE 01 · ⊙" plus sector tag, right-aligned. Below: client name in display serif. A thin ledger-rule divider, then three labelled rows (Il problema / Cosa ho fatto / Il risultato) in body serif, tech stack as a small caption, link to the live site. No card shadow, no rounded corners, no browser-mockup chrome (explicitly removed from the previous design).

### Inputs / Fields (Contact form)
- **Style:** thin ink/line-colored border on paper background, sharp corners.
- **Focus:** border shifts to terracotta; no glow ring.
- **Error/Disabled:** *not yet specified in source docs — define during Task 08 implementation.*

### Navigation
- Sober wordmark "Bottega Cianni" in Fraunces, IT/EN language toggle, no terminal-style logo, no blinking cursor, no scroll shimmer (all explicitly removed from the previous design).

## Do's and Don'ts

### Do:
- **Do** use Fraunces for all display/heading type and Newsreader for body copy.
- **Do** treat terracotta (`#B5481F`) as the only strong accent; reserve oxblood (`#7A2E1E`) exclusively for the ⊙ seal motif.
- **Do** apply paper-grain texture (SVG noise, ≤4% opacity) exactly once, globally — never per-section.
- **Do** use thin ledger-rule borders (`#D8CDB8`) to separate blocks instead of shadows or cards.
- **Do** keep contrast at WCAG AA or better on every ink-on-paper and accent-on-paper pairing.
- **Do** write only real, verified outcomes in case studies; use honest qualitative copy when no real metric exists yet.

### Don't:
- **Don't** use Bebas Neue, Inter, or JetBrains Mono anywhere — all three are fully retired from this system.
- **Don't** use dot-grid backgrounds or radial glow in any section.
- **Don't** use `backdrop-filter`, glassmorphism, or any glow/neon box-shadow.
- **Don't** add fake terminal windows, blinking cursors, pulsing "available" status dots, or scroll-hint shimmer.
- **Don't** use a fake browser-mockup frame around project screenshots.
- **Don't** invent or round up metrics/results that aren't real.
- **Don't** introduce a third accent color beyond terracotta and oxblood.
