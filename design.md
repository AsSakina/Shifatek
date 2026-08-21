---
name: Shifatek Design System
colors:
  surface: '#fbf8fb'
  surface-dim: '#dcd9dc'
  surface-bright: '#fbf8fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f6'
  surface-container: '#f0edf0'
  surface-container-high: '#eae7ea'
  surface-container-highest: '#e4e2e5'
  on-surface: '#1b1b1e'
  on-surface-variant: '#45464e'
  inverse-surface: '#303033'
  inverse-on-surface: '#f3f0f3'
  outline: '#76767f'
  outline-variant: '#c6c6cf'
  surface-tint: '#515d82'
  primary: '#0c193a'
  on-primary: '#ffffff'
  primary-container: '#222e50'
  on-primary-container: '#8a96be'
  inverse-primary: '#b9c5f0'
  secondary: '#006b54'
  on-secondary: '#ffffff'
  secondary-container: '#00fdc9'
  on-secondary-container: '#007058'
  tertiary: '#001f1f'
  on-tertiary: '#ffffff'
  tertiary-container: '#003636'
  on-tertiary-container: '#0ba8a8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b9c5f0'
  on-primary-fixed: '#0d1a3b'
  on-primary-fixed-variant: '#3a4669'
  secondary-fixed: '#27ffcc'
  secondary-fixed-dim: '#00e0b2'
  on-secondary-fixed: '#002117'
  on-secondary-fixed-variant: '#00513f'
  tertiary-fixed: '#7af5f5'
  tertiary-fixed-dim: '#5bd9d8'
  on-tertiary-fixed: '#002020'
  on-tertiary-fixed-variant: '#004f4f'
  background: '#fbf8fb'
  on-background: '#1b1b1e'
  surface-variant: '#e4e2e5'
typography:
  display:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 51px
    letterSpacing: -0.045em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 28px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 28px
  headline-sm:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 24px
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 29px
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.18em
  label-sm:
    fontFamily: DM Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 40px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
---

# Shifatek Design System

## How to use this file

This is the single source of truth for Shifatek UI work. When building or changing any interface:

1. **Read the frontmatter first** — it holds the machine-readable tokens (colors, type scale, radii, spacing). Use token names, never raw hex values, when the codebase exposes tokens.
2. **Read "Brand Colors — quick reference"** below for the five named brand hexes. These are the accents referenced throughout the component specs.
3. **Follow the component specs verbatim** for buttons, cards, inputs, chips, lists, checkboxes and radios. Don't invent new variants; extend an existing one.
4. **Round every dimension to the 8px grid** (or the named spacing tokens). 4px is the smallest allowed step.
5. **Never introduce a new color, font, radius, or shadow** that isn't defined here. If something is genuinely missing, say so and ask.

### Resolved decisions (2026-08-21)

The marketing site was rebuilt on this system. What was settled:

- **Light clinical palette wins.** The site is `#FBF8FB` canvas, white cards, navy headings — the dark navy build is gone. Tokens live in `src/styles/tokens.css`, which mirrors this frontmatter.
- **Manrope + DM Sans** (2026-08-21, second revision). Manrope 700/800 carries every heading and the logo, at `-0.045em` tracking and 1.06 line-height — the tight geometric look. DM Sans 400/500/600/700 carries all body and UI text. This replaced Fraunces + Switzer, which had themselves replaced the original Nunito Sans + Inter.
- **Mint is the primary CTA** (`#10FFCB` fill, `#222E50` text, 10px radius). **Orange is reserved for alerts only** — low-stock badges and the contact band. Ilmia's accent is indigo `--indigo #3a4669` (light) / `#b9c5f0` (dark), not orange.
- Where the frontmatter and the brand hexes disagree (`secondary-container #00fdc9` vs Neon Mint `#10FFCB`, `background #fbf8fb` vs Canvas `#FFFCFF`, `on-tertiary-container #0ba8a8` vs Teal `#00A6A6`), the **brand hexes ship**; the frontmatter governs the neutral system — surfaces, outlines, on-surface text, error states, tonal containers.

### Dark theme

The site ships both themes. `<html data-theme="light|dark">` is set before first paint by an inline script in `index.html`; the toggle in the header persists the choice to `localStorage['shifatek-theme']`, and until the user chooses, the OS preference wins. All dark values live in `:root[data-theme='dark']` in `src/styles/tokens.css`.

**Brand colors never change between themes.** Only the semantic tokens flip. Use the semantic ones in components — never hard-code a hex.

| Token | Light | Dark | Used for |
| --- | --- | --- | --- |
| `--surface` | `#fbf8fb` | `#0d1426` | Page canvas |
| `--card` | `#ffffff` | `#131d35` | Cards, panels, inputs |
| `--surface-container-low` | `#f5f3f6` | `#131d35` | Tinted bands, footer |
| `--border` | `#dfdfdf` | `rgba(255,255,255,.09)` | Card and input borders |
| `--hairline` | `rgba(34,46,80,.12)` | `rgba(255,255,255,.10)` | Section rules |
| `--ink-strong` | `#222e50` | `#f1f5ff` | Headings, strong labels |
| `--ink` | `#45464e` | `#b4bdd4` | Body copy |
| `--ink-muted` | `#6c6d78` | `#8a94ad` | Captions, index numerals |
| `--teal-ink` | `#00767a` | `#35d6d6` | Teal text (eyebrows, links) |
| `--coral-ink` | `#c94a00` | `#ff8a3d` | Coral text |
| `--alert-bg` / `--alert-ink` | `#c94a00` / white | `#ff8a3d` / `#14203a` | Alert badges |
| `--shadow-card` | navy-tinted | `rgba(0,0,0,.4)` | Elevation |
| `--contact-bg` | `#bb440a` | `#93340a` | Contact band |
| `--roadmap-bg` / `--roadmap-num` | `#bfe8dc` / `#006265` | `#16463f` / `#5bd9d8` | Roadmap band |
| `--grain-opacity` | `0.035` | `0.05` | Grain overlay |

Two elements stay dark in both themes on purpose: the bento visual tile and the mint CTA (always `--navy` text on mint).

### Contrast rules on the light canvas

Non-negotiable, because the neons were picked for a dark background:

- **Mint `#10FFCB` is a background only** — never text, never an icon on white. Pair it with `#222E50` text.
- **Teal `#00A6A6`** for borders, icons, rules and glow tints. Teal *text* uses `--teal-ink #00767a`.
- **Coral `#FE5F00`** for status dots, alert fills and large accents. Coral *text* uses `--coral-ink #c94a00`.
- Body copy is `on-surface-variant #45464E`; headings are `#222E50`.

### Brand Colors — quick reference

| Name | Hex | Closest token | Use for |
| --- | --- | --- | --- |
| Deep Blue / Primary Surface | `#222E50` | `primary-container` | Sidebars, headers, primary text, secondary button border |
| Neon Mint | `#10FFCB` | `secondary-container` (`#00fdc9`) | Primary CTA background, "AI-powered" signals |
| Teal Blue | `#00A6A6` | `on-tertiary-container` (`#0ba8a8`) | Clinical indicators, data viz, focus rings, secondary actions |
| Vibrant Orange | `#FE5F00` | — (no token) | Alerts and low-stock warnings **only** |
| Indigo | `#3A4669` | `on-primary-fixed-variant` | Ilmia accent — tags, status dots, hover fill |
| Background Canvas | `#FFFCFF` | `background` (`#fbf8fb`) | App background |
| Card Surface | `#FFFFFF` | `surface-container-lowest` | All data containers |
| Border | `#DFDFDF` | `outline-variant` (`#c6c6cf`) | Card and input borders, list dividers |

### Copy-paste values

```css
/* Elevation */
--shadow-card:  0 8px 24px rgba(34, 46, 80, 0.08);
--shadow-modal: 0 16px 48px rgba(34, 46, 80, 0.12);

/* Radii not in the frontmatter scale */
--radius-action: 10px; /* buttons, inputs */
--radius-card:   16px; /* cards, panels — same as rounded.lg */
--radius-micro:  4px;  /* checkboxes, tags — same as rounded.sm */
```

---

## Brand & Style

The design system is engineered for a high-tech, hybrid pharmacy management platform that balances clinical precision with an approachable, human-centric interface. It targets healthcare professionals and pharmacists, requiring an environment that feels both authoritative and innovative.

The aesthetic follows a **Modern Corporate** style with **Tactile** accents. It leverages high-contrast color pairings and geometric clarity to ensure data density remains readable. A recurring motif is the 8-pointed Nsoromma star, symbolizing guardianship and high quality, integrated subtly into iconography and patterns to root the digital product in its African-centric context. The emotional response is one of trust, efficiency, and technological empowerment.

## Colors

This design system utilizes a sophisticated palette designed for a clinical SaaS environment.

- **Primary Surface (#222E50):** Used for navigation sidebars, headers, and primary text to provide a grounded, authoritative foundation.
- **Neon Mint (#10FFCB):** The primary CTA color. Its high luminosity ensures visibility against dark surfaces and signals "AI-powered" functionality.
- **Background Canvas (#FFFCFF):** A soft, warm white used for the main application background to reduce eye strain during long shifts.
- **Teal Blue (#00A6A6):** Used for clinical indicators, health-related data visualizations, and secondary actions.
- **Vibrant Orange (#FE5F00):** Reserved for alerts, critical low-stock warnings, and urgent notifications.
- **Card Surfaces (#FFFFFF):** Used for all data containers to provide maximum contrast against the soft white background.

## Typography

The typography strategy employs a dual-font system to bridge the gap between human care and technical efficiency.

- **Headlines:** Use **Manrope** at 700 (800 for the logo and emphasised words) with `letter-spacing: -0.045em` and `line-height: 1.06`. The tight tracking is the point — it is what gives the headings their weight. *(Superseded Fraunces, which superseded Nunito Sans.)*
- **Body & UI:** Use **DM Sans** for all functional text, data tables, and inputs. Weight 600 for labels, list items and nav; 700 for eyebrows and buttons. *(Superseded Switzer, which superseded Inter.)*
- **Scalability:** Display and Large Headlines should downscale by approximately 25% on mobile devices to maintain visual hierarchy without overwhelming the viewport.

## Layout & Spacing

The layout is built on an **8px grid system** to ensure mathematical harmony across all components.

- **Grid Model:** A 12-column fluid grid is used for desktop (1440px max-width), transitioning to a 4-column grid for mobile.
- **Rhythm:** Use `lg` (24px) spacing for major section gaps and card padding. Use `sm` (12px) for internal element grouping within cards.
- **Safe Areas:** On mobile, side margins must be 16px. On desktop, they expand to 32px or are centered within the max-width container.
- **Reflow:** Inventory tables should collapse into "data cards" on mobile devices, ensuring the 8-pointed star motif remains as a decorative element in the header or footer of the card.

## Elevation & Depth

This design system uses a combination of **Tonal Layering** and **Ambient Shadows** to create a clear functional hierarchy.

- **Low Elevation:** Primary background is flat (#FFFCFF).
- **Mid Elevation (Cards):** Standard surface containers (#FFFFFF) use a subtle 1px border (#DFDFDF) combined with a soft, deep-blue tinted shadow: `0 8px 24px rgba(34, 46, 80, 0.08)`. This makes the cards feel lifted and interactable.
- **High Elevation (Modals/Popovers):** These use a more pronounced shadow: `0 16px 48px rgba(34, 46, 80, 0.12)` to focus the user's attention.
- **Interactions:** On hover, cards may increase their shadow spread slightly or transition their border color to the Secondary Accent (Teal Blue).

## Shapes

The shape language is "Soft-Modern," utilizing distinct corner radii to differentiate between container types and action types.

- **Primary Containers:** 16px (rounded-lg) for cards and main dashboard panels.
- **Action Elements:** 10px for buttons and input fields to provide a sturdier, more professional feel than the softer cards.
- **Micro-elements:** 4px (soft) for checkboxes, radio buttons, and small tags.
- **Iconography:** Icons should incorporate the Nsoromma star motif—a geometric 8-pointed star—wherever a "verification" or "AI-ready" status is indicated.

## Components

### Buttons
- **Primary:** Neon Mint (#10FFCB) background with Deep Blue (#222E50) text. 10px radius.
- **Secondary:** Transparent background with 2px Deep Blue border.
- **States:** Hovering on Primary should darken the mint slightly; active states should show a slight scale-down (0.98x).

### Cards
- **Style:** White background, 16px radius, 1px #DFDFDF border, and the defined ambient shadow.
- **Header:** Include a subtle top-border or icon accent using Teal Blue (#00A6A6) for pharmacy-related data.

### Input Fields
- **Style:** 10px radius, 1px border (#DFDFDF).
- **Focus:** Border transitions to Teal Blue (#00A6A6) with a 2px outer glow of the same color at 10% opacity.

### Chips & Badges
- **Status Badges:** Use rounded-pill shapes. High-priority alerts use Vibrant Orange (#FE5F00) with white text. Neutral status uses Deep Blue at 10% opacity with Deep Blue text.

### Inventory Lists
- **Style:** Alternating row highlights are not used; instead, use thin 1px horizontal dividers. The 8-pointed star icon is used as a bullet point for "Recommended Actions" generated by the AI.

### Checkboxes & Radios
- **Style:** 4px radius for checkboxes; circular for radios. Use Teal Blue (#00A6A6) for the selected state.

---

## Pages and routing

Three routes, resolved from `window.location.pathname` in `src/App.tsx` — no router library, and navigation is plain `<a href>` full page loads:

| Path | Content |
| --- | --- |
| `/` | Hero, Mission (01), Solutions (02), Aujourd'hui (03), Équipe bento (04), Contact (05) |
| `/aphia` | Product hero (text only, no image), sticky section-nav, Aujourd'hui, **Demain · APHIA V2**, Contact |
| `/ilmia` | Product hero, sticky section-nav, Aujourd'hui, Contact |

Product pages set their accent with `.accent-teal` / `.accent-indigo`, which drive `--accent` and `--accent-ink` for eyebrows, capability numerals and section-nav hover. `vercel.json` rewrites every path to `/index.html` so deep links resolve.

## Interactions

### Wipe fill (`.wipe`)

The signature hover on any card that carries a single idea. The accent colour rises from the bottom edge and fills the card; the text inverts with it; the icon chip stays on its light background and adopts the fill colour for its glyph.

- Fill enters on `transform: translateY(101% → 0)` over **550 ms**, `cubic-bezier(.65,0,.35,1)`. Text and border cross-fade over 350 ms so they land slightly ahead of the fill.
- Painted with `::after` (`::before` is the product-card accent bar), `z-index: 0`, with `.wipe > * { position: relative; z-index: 1 }` lifting the content above it. The host must be positioned.
- Driven by two custom properties set per card: `--fill` and `--fill-ink`. Four theme-aware pairings ship as tokens, `--fill-1..4` with matching `-ink`: deep navy, mint, deep teal, deep coral in light; their lighter `*-fixed` counterparts with dark ink in dark. Every pairing is ≥ 4.5:1 in both themes — pure `--teal` as a fill is **not** allowed (white on it is 3.0:1).
- Also triggers on `:focus-within`, so keyboard users see it. Frozen (no transition) under `prefers-reduced-motion`.

### Product cards

Two juxtaposed cards, one per product, in a two-column grid that collapses to one column at 860px. **No accent bar across the top** — the tag pill and status dot carry the product colour instead (teal for APHIA Care, indigo for Ilmia). Each card carries its own screens in `.product-preview`: rendered at `1 / --s` width then scaled by `--s` (0.78) so the mockup keeps a comfortable internal layout, and clipped by the card's bottom edge so the interface reads as continuing past it. APHIA Care layers a second screen behind the first, offset up and right.

On hover the card takes the full wipe fill in its product colour — `--fill-3` for APHIA Care, `--fill-5` (indigo) for Ilmia — the tag pill switches to `rgba(255,255,255,.2)` with the fill ink, the status dot inverts, and the screens rise 16px. The mockups stay on their own light surfaces, reading as screenshots dropped on a coloured card.

## Layouts

### Bento (`.bento`)

12-column grid, unequal spans, `--sp-md` gutters — the antidote to a row of four identical cards. Current composition: intro text `span 5` over two rows, dark visual tile `span 7`, then value tiles at `span 3 / 4 / 5 / 7`. Collapses to `span 6` pairs under 980px and a single column under 620px. Vary the spans when the content changes; never let all tiles end up the same width.

### Capability list — "Aujourd'hui"

Two-column list of what a product already does: index numeral, check glyph, label, on a 34px / 22px / 1fr sub-grid. Hairline top border on the grid, hairline under every row, no row backgrounds. Numerals and checks take the page accent (`--accent-ink`, teal on APHIA, coral on Ilmia); labels are DM Sans 600 in `--ink-strong`. Collapses to one column at 860px. Each row is its own `Reveal` with a 70ms stagger.

### Roadmap band — "Demain"

Full-bleed mint band (`--roadmap-bg`), APHIA-only, 50/50 grid with a wide gap: copy left (eyebrow, heading, one paragraph in `--roadmap-ink-soft`), numbered list right on `--roadmap-line` hairlines. In dark it becomes a deep teal `#16463f` rather than flipping to a light band. Numerals use `--roadmap-num`, never raw `--teal` — pure teal is only 4.1:1 on mint.

### Contact band

Full-bleed coral (`--contact-bg`), cream ink, 50/50 copy + form. Fields are underline-only: transparent background, 1px bottom border in `--contact-line`, solid on hover. **Keep the focus outline** — a 2px cream `outline` with 4px offset. The reference this came from set `outline: 0` and signalled focus with border colour alone, which fails keyboard use. Submit is a navy pill (`--contact-btn-bg`) that lifts 3px on hover.

The form posts to `/api/contact`, which relays through Resend: an acknowledgement to the visitor from `noreply@shifatek.com` and a notification to `contact@shifatek.com` with `reply_to` set to the visitor. Four visual states — idle, `Envoi en cours…` with the button disabled, the success note with a check glyph, and an error note. A hidden honeypot field (`.honeypot`, off-screen and `tabindex="-1"`) drops bot submissions silently. See README for the `RESEND_API_KEY` setup.

### Logo

The wordmark ships as two transparent PNGs per lockup, extracted from the brand artwork: `logo-light.png` / `logo-dark.png` (wordmark, 26px tall, header) and `logo-full-light.png` / `logo-full-dark.png` (wordmark + "TECHNOLOGIES AU SERVICE DE LA SANTÉ", 44px tall, footer). Both variants are rendered; CSS hides the wrong one per `data-theme`, so the swap costs no JS and no flash. Never re-tint them — the light file is navy `#17213a`, the dark file is white.

### Statement band — "Notre conviction"

Full-bleed navy gradient in both themes, breaking up the light page: section label, an oversized white heading capped at 20ch, then the argument in two columns under a `rgba(255,255,255,.16)` rule. A Nsoromma mark bleeds off the right edge at 12% opacity. Columns collapse and the watermark is dropped below 860px.

### Section labels

Every section opens with `NN · LABEL ·································` — a tabular index numeral, the uppercase eyebrow, and a hairline rule filling the remaining width.
