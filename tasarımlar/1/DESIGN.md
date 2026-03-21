# Design System Specification: The Nautical Editorial

## 1. Overview & Creative North Star
This design system is built to transcend the utility of standard maritime logistics and enter the realm of **High-End B2B Editorial**. We are not just building a supply tool; we are crafting a digital flagship that commands authority and trust.

**Creative North Star: "The Architectural Vessel"**
The design breaks the "template" look through intentional asymmetry and tonal depth. Rather than a rigid grid of boxes, we view the interface as a series of expansive, overlapping decks. By utilizing high-contrast typography scales (Extrabold vs. Medium) and sophisticated layering, we create a sense of structural integrity—like the hull of a luxury liner—while maintaining the breathing room of a premium publication.

---

## 2. Colors & Surface Logic
Our palette is rooted in the deep sea and the navigational sun, refined through a Material Design-inspired token system.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts.
*   *Correct:* A `surface-container-low` (#f6f3f5) card sitting on a `surface` (#fcf8fb) background.
*   *Incorrect:* A white box with a gray border.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of materials. Use the `surface-container` tiers to define importance:
*   **Base Layer:** `surface` (#fcf8fb) for the overall canvas.
*   **Secondary Sections:** `surface-container-low` (#f6f3f5) for sidebar or secondary navigation.
*   **Primary Interaction Areas:** `surface-container-lowest` (#ffffff) for cards and data tables to give them a natural "lift."
*   **Floating Elements:** Use `surface-bright` for critical pop-overs.

### The "Glass & Gradient" Rule
To avoid a flat, "out-of-the-box" feel:
*   **Signature Textures:** Use subtle linear gradients for primary CTAs, transitioning from `primary` (#243880) to `primary_container` (#3d5099). This provides a metallic, professional sheen.
*   **Glassmorphism:** For floating navigation bars or maritime pattern overlays, use semi-transparent `surface` colors (80% opacity) with a `24px` backdrop-blur.

---

## 3. Typography: Authority Through Contrast
We utilize **Inter** to its fullest potential, leaning into the extremes of its weight spectrum to create an editorial feel.

*   **Display & Headlines:** (Display-LG to Headline-SM) – Use **Extrabold (800)**. These are your anchors. Large tracking (e.g., -0.02em) on display sizes creates a dense, authoritative "block" of text that mimics premium print.
*   **Titles & Body:** (Title-LG to Body-MD) – Use **Medium (500)**. Avoid Regular (400) weight; Medium provides the visual "heft" required to stand up against the heavy headlines and dark navy tones.
*   **Labels:** (Label-MD to Label-SM) – Use **Semibold (600)** in All-Caps with +0.05em letter spacing for metadata and micro-copy to maintain a navigational feel.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering** rather than structural scaffolding.

*   **The Layering Principle:** Stack `surface-container-lowest` on `surface-container-low` for a soft, natural lift. This mimics the way light hits layered architectural planes.
*   **Ambient Shadows:** For "floating" states (Modals, Dropdowns), use an extra-diffused shadow: `0px 20px 40px rgba(27, 27, 29, 0.06)`. The shadow color must be a tinted version of `on-surface` (#1b1b1d), never pure black.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline-variant` (#c5c5d2) at **15% opacity**. High-contrast, 100% opaque borders are strictly forbidden.
*   **Maritime Wave Dividers:** Instead of lines, use the Wave SVG components to transition between major background color shifts (e.g., transitioning from a Navy `primary_container` hero to a White `surface` body).

---

## 5. Components & Interaction

### Buttons
*   **Primary:** Solid `primary` (#243880) with `on-primary` (#ffffff) text. Radius: `xl` (1.5rem). Apply a subtle inner-glow on hover.
*   **Secondary:** `secondary_fixed` (#cee5ff) background with `on_secondary_fixed` (#001d32) text.
*   **Tertiary:** No background. Bold text in `primary`.

### Cards & Data Lists
*   **Rule:** Forbid divider lines between list items. Use vertical whitespace (Spacing Scale `4` or `5`) to separate content.
*   **Shape:** All cards must use `rounded-xl` (1.5rem) corners to soften the industrial nature of the B2B content.
*   **State:** On hover, a card should shift from `surface-container-lowest` to a subtle gradient or increase its ambient shadow slightly.

### Input Fields
*   **Style:** Minimalist. No bottom line. Use a `surface-container-high` (#eae7ea) background with `rounded-md` corners.
*   **Focus:** Transition the background to `surface-container-lowest` and add a `2px` "Ghost Border" of `primary` at 20% opacity.

### Navigation Signature
*   **Maritime Overlays:** Apply the brand's maritime pattern overlay (knots, compass lines) at 5% opacity only on `primary_container` or `secondary_container` backgrounds. It should feel like a watermark on high-quality stationery.

---

## 6. Do’s and Don’ts

### Do
*   **Do** embrace negative space. If a layout feels "empty," increase the typography size rather than adding more boxes.
*   **Do** use asymmetrical layouts. A hero image can overlap two different surface containers to create depth.
*   **Do** use `Maritime Gold (#F59E0B)` sparingly as a "beacon"—only for critical alerts, primary CTAs, or active navigation states.

### Don't
*   **Don't** use 1px borders to separate content. It breaks the "Architectural Vessel" aesthetic.
*   **Don't** use standard "Drop Shadows." Only use the ambient, low-opacity diffused shadows defined in Section 4.
*   **Don't** use Inter Regular (400). It lacks the premium B2B weight required for this brand; stick to Medium (500).
*   **Don't** crowd the Wave SVG dividers. Give them space to breathe so the "organic" transition feels intentional.