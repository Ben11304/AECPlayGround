# Design — AECplayground

A locked design system for this app. Every page redesign reads this file before
emitting code. Do not regenerate per page — extend or amend this file when the
system needs to grow.

Hallmark redesign · 2026-07-17 · theme: Blueprint

---

## Genre

editorial — academic research-registry

Rationale: AEC is the industry that invented the blueprint. Deep prussian blue
on warm off-white paper is the domain's own color language, read as authority
and precision. Every SaaS competitor uses indigo/cyan; none looks like a
technical registry.

---

## Macrostructure family

- **Marketing/Landing pages** (index): Masthead — left-aligned editorial layout,
  horizontal rules as structural dividers, stats as ruled definition lists.
  No hero background gradients. No centered layout.

- **Catalog/Data pages** (benchmarks, leaderboard, tools): Workbench — true
  sidebar filter, dense content grid, hairline card borders, no glow on hover.

- **Content pages** (about, landscape, landscape-tier4): Long Document —
  continuous prose, section dividers as horizontal rules, no decorative
  background images.

---

## Theme — Blueprint

```css
:root {
  --color-paper:       250 249 247;   /* oklch(98.5% 0.008 85) — barely warm off-white */
  --color-parchment:   243 241 235;   /* oklch(95.5% 0.010 85) — section alternates */
  --color-ink:          19  20  24;   /* oklch(14% 0.025 260) — near-black */
  --color-muted:        90  92  99;   /* oklch(44% 0.015 260) — secondary text */
  --color-rule:        219 217 212;   /* oklch(86% 0.008 85) — warm rule gray */
  --color-accent:       26  74 127;   /* oklch(36% 0.12 255) — prussian blue */
  --color-accent-ink:  250 249 247;   /* near-white on accent */
  --color-focus:        53 123 184;   /* oklch(52% 0.15 255) — lighter blue, a11y */
}
```

Tailwind token names: `bg-paper`, `bg-parchment`, `text-ink`, `text-muted`,
`border-rule`, `bg-primary-700` (accent), `text-primary-700`.

---

## Typography

- **Display**: Newsreader (Google Fonts, opsz variable, weights 400/600/700)
  — editorial serif designed for digital reading; instantly non-SaaS
- **Body**: Inter (weights 300–700) — legible, neutral
- **Mono**: JetBrains Mono — technical precision
- Display tracking: `-0.01em` (tight, journal-like)
- All headings: `font-style: normal` always (no italic headers — Hallmark rule 6)

Google Fonts import:
```
Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;0,6..72,700;1,6..72,400
Inter:wght@300;400;500;600;700
```

---

## Spacing

4-point base. Named via Tailwind default scale. No raw values in templates.

---

## Motion

- Transitions: 150ms ease-out, color/border changes only
- No scroll-reveal animations, no slide-up, no pulse-slow
- `prefers-reduced-motion: reduce` → opacity-only ≤ 150ms (inherit from Tailwind)

---

## Microinteractions stance

- Hover: border color → `primary-700` (prussian), shadow lifts (no glow)
- Cards: `box-shadow: 0 3px 12px rgba(19,20,24,.07)` on hover — depth, not light
- Focus: 2px solid `--color-focus` outline, 2px offset
- No celebratory toasts, no pulsing decorations

---

## CTA voice

- **Primary**: filled `bg-primary-700`, white text, 0.25rem border-radius, `px-4 py-2`
  — darken to `primary-800` on hover
- **Secondary**: `bg-parchment`, ink text, hairline `border-rule`, same shape
- **Ghost**: text-only `text-muted`, hover `text-ink bg-parchment`
- No pill shapes. No shadow on buttons.

---

## Accent placement

3px prussian blue stripe at `position: fixed; top: 0` — page spine color.
Max accent use: ≤ 5% per viewport (links, active underlines, badges only).

---

## What pages MUST share

- The Newsreader/Inter/JetBrains Mono font stack
- The Blueprint color system (paper/ink/prussian)
- The 3px top accent stripe
- The `section-label` pattern: mono, uppercase, 10px, tracking-widest, primary-700
- CTA voice (button shape, border-radius, padding rhythm)
- Nav: wordmark left, links center, JSON download right; solid paper bg; no blur

## What pages MAY differ on

- Macrostructure within their family (masthead vs workbench vs long-doc)
- Section backgrounds: paper vs parchment alternation
- Sidebar presence (catalog/workbench pages only)
