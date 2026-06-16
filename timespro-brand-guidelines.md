# TimesPro — Brand Guidelines

**Source:** Extracted directly from timespro.com's live page source (saved HTML, including embedded CSS and `@font-face` declarations), provided 16 June 2026. This supersedes the earlier brochure-pixel-sampled draft — values below are pulled from the site's actual CSS, not estimated. Where something still couldn't be confirmed from this single page's source, it's marked `[Not observed in this page — verify elsewhere]` rather than guessed.

---

## 1. Typography

**Title / Heading typeface: Montserrat**
- Self-hosted, full weight range loaded: 100, 200, 300, 400, 500, 600, 700, 800, 900
- Confirmed usage: modal/form titles (login, register, OTP, forgot-password screens) — e.g. `.start-login-container-title{font-family:"Montserrat";font-size:20px;font-weight:700;letter-spacing:.4px}`
- Use for: page titles, section headers, card titles — anywhere a heading needs presence.

**Secondary / Body typeface: Open Sans**
- Self-hosted, weights loaded: 300, 400, 500, 600, 700 (plus 800 referenced in at least one rule)
- Used far more pervasively than Montserrat across the page — this is the workhorse body font.
- Use for: body copy, form labels, button text (where not otherwise specified), navigation, footnotes.

**Practical pairing for the prototype:** Montserrat 600–700 for H1–H3, Open Sans 400 for body, Open Sans 500–600 for UI labels/buttons. This mirrors the weight pattern observed in the source (titles consistently bolder Montserrat; everything else lighter-weight Open Sans).

---

## 2. Color Palette (extracted from live CSS, not sampled from images)

| Color | Hex | Where confirmed in source | Suggested use |
|---|---|---|---|
| **TimesPro Red** | `#DA2128` (also appears as `#D92128`/`#d92128` — same color, casing/rounding variance) | Primary CTA buttons (`.btn-primary` background), browser `theme-color` meta tag, focus/hover borders, active tab underline | **Primary action color** — main CTAs, active states, key highlights |
| **TimesPro Navy** | `#00008C` | Input focus borders, primary-button hover state, link hover color | **Secondary brand color** — focus states, hover states, secondary emphasis |
| **Neutral Black** | `#000000` | Default text color (by far the most frequent color in the stylesheet) | Body text |
| **Mid Gray** | `#B2B2B2` | Secondary/muted text, placeholders (inferred from frequency and typical use) | Disabled states, muted text, borders |
| **Dark Gray** | `#3D3D3D` | Secondary text/icon color | Subheadings, secondary text |
| **Light Pink Tint** | `#FFF0F0` / `#FFD8D8` | Light backgrounds behind red-accented UI elements (error states, highlighted cards) | Soft backgrounds for alerts, highlighted/featured cards |
| **White** | `#FFFFFF` | Button text on red/navy backgrounds, card backgrounds | Base background, text-on-color |

**Key correction from the earlier brochure-based draft:** the brochure pixel-sampling estimated navy as `#30237D` and red as `#C71F2A` — both were close but not exact. The live site's actual values, confirmed directly from CSS, are **Red `#DA2128`** and **Navy `#00008C`**. Use these going forward; the brochure draft's values should be discarded.

**Not observed in this page — verify elsewhere:** a documented full neutral gray scale, success/warning/error semantic colors beyond the red-tinted error states noted above, and any secondary accent colors used outside this specific page (e.g., marketing/landing pages may use a richer palette than this transactional/login-heavy page shows).

---

## 3. Buttons & Components (confirmed CSS rules)

**Primary button (`.btn-primary`):**
```
background-color: #DA2128 (red)
color: #FFFFFF
border-radius: 4px
font-weight: 500
text-transform: capitalize
```
Hover state: background darkens toward navy (`#00008C`) per observed hover rule on related button classes — confirm exact hover token before hardcoding, as this was inferred from adjacent rules rather than `.btn-primary:hover` directly.

**Border radius convention:** `4px` is by far the most common value (18 occurrences) — treat this as the default corner radius for buttons, inputs, and small components. Larger radii (`8px`, `10px`) appear less frequently, likely for cards or larger containers. Pill-shaped values (`70px`, `45px`, `38px`) also appear — likely for fully-rounded chip/tag elements.

**Form inputs:** `border: 2px solid #00008C` on focus, `border-radius: 8px`, generous padding (`12px 16px` observed).

---

## 4. Tone & Positioning (carried over from project context, unchanged)

- **Brand role:** TimesPro is the delivery/services partner — institute names (IIT, IIM, DTU) carry primary credibility; TimesPro carries the operational/platform layer.
- **Tone:** Professional, authoritative without being cold. Clear and confident, not hype-driven.
- **Disclaimer pattern:** TimesPro-provided add-ons (EMI, financing) carry explicit "services offered by TimesPro, [Institute] not responsible" disclaimers — replicate this wherever such services appear in any UI.

---

## 5. What's Confirmed vs. Still Open

**Confirmed directly from live site source (high confidence):**
- Montserrat (titles) + Open Sans (body/secondary) — exact weights loaded
- Primary red `#DA2128` and navy `#00008C` — exact hex from CSS, not sampled
- Primary button styling (color, radius, weight, text-transform)
- 4px as the dominant border-radius convention

**Still open (this page didn't cover it):**
- This source was a certification-courses/login-flow page — a marketing landing page or homepage may reveal additional hero-section styling, marketing-specific color accents, or imagery treatment not visible here.
- Full semantic color set (success/warning states) beyond the red error-tint observed.
- Logo file/lockup wasn't re-confirmed in this HTML extract — the navy+red logo lockup documented from the brochures (Section 1 of the prior draft) is likely still accurate since it matches this page's confirmed navy/red palette, but worth a quick visual cross-check if a fresh logo asset is needed.

**Recommendation:** this is now solid enough to build the Antigravity prototype against. If a marketing/category page on the live site becomes available later, a second pass on that specific page would round out hero-section and imagery conventions.
