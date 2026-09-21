# Bramvastgoed — Design System

## 1. Visual Theme & Atmosphere

Bramvastgoed is a premium Dutch real-estate brand. The interface should feel editorial, architectural, calm, confident and luxurious — never flashy or generic.

Core principles:
- Luxury through restraint, whitespace and typography.
- Large, cinematic property photography.
- Strong editorial compositions inspired by premium property magazines.
- Architecture and homes remain the visual hero.
- Minimal UI chrome; every element has a clear purpose.
- Motion is subtle and purposeful.

Avoid:
- Generic SaaS layouts.
- Loud gradients, glassmorphism or excessive rounded cards.
- Overuse of gold/champagne.
- Stock-looking imagery.
- Dense dashboards or visually noisy interfaces.

## 2. Color Palette & Roles

- Ink — #111111 — primary text, navigation, headings.
- Deep Navy — #0D1B2A — premium brand surface and selected dark sections.
- Warm Ivory — #F7F5F0 — primary page background.
- Pure White — #FFFFFF — cards and photography frames.
- Stone — #D9D5CC — borders, dividers and muted UI.
- Taupe — #8A8378 — secondary text.
- Champagne — #B9A37A — restrained accent for micro-details only.

Color ratio:
- 70% ivory/white
- 20% ink/navy
- 8% stone/taupe
- 2% champagne accent

Never use champagne as a large background or primary button fill.

## 3. Typography

Primary display type:
- Editorial serif: Playfair Display or Cormorant Garamond.
- Use for hero headlines, property names and major editorial statements.

Primary UI/body type:
- Inter or DM Sans.
- Use for navigation, metadata, descriptions, buttons and functional UI.

Hierarchy:
- Hero: clamp(3.5rem, 8vw, 7.5rem), tight line-height.
- H1: clamp(3rem, 6vw, 6rem).
- H2: clamp(2rem, 4vw, 4rem).
- H3: 1.5–2rem.
- Body: 1rem–1.125rem.
- Small metadata: 0.7–0.8rem, uppercase, letter-spacing 0.12em.

Use sentence case for editorial headlines. Use uppercase only for labels and navigation metadata.

## 4. Layout Principles

Desktop:
- Maximum content width: 1440px.
- Outer gutter: 48–80px.
- Use generous vertical rhythm.
- Prefer asymmetrical editorial grids over repetitive card grids.
- Property photography may bleed to viewport edges.

Grid:
- 12-column desktop grid.
- 6-column tablet grid.
- 4-column mobile grid.

Spacing scale:
- 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 160.

Sections should breathe. Do not fill empty space simply because it is available.

## 5. Navigation

Desktop navigation:
- Minimal, transparent over hero photography when contrast permits.
- Logo left.
- Primary navigation centered or right-aligned.
- One understated CTA: "Plan een afspraak".
- Navigation becomes solid ivory/white after scrolling.

Mobile:
- Compact logo.
- Menu button with generous touch target.
- Full-screen or large overlay navigation.

## 6. Hero

The homepage hero should feel cinematic.

Structure:
1. Full viewport or near-full viewport property image/video.
2. Small eyebrow: "BRAM VASTGOED".
3. Large serif headline.
4. Short supporting sentence.
5. One primary CTA and one secondary text link.
6. Optional property/location metadata.

Use a dark image overlay only when needed for readability.

Example direction:
"Ruimte om thuis te komen."
Supporting copy should remain concise and human.

## 7. Property Cards

Property cards should feel like editorial property listings, not ecommerce tiles.

Rules:
- Large image ratio around 4:3 or 3:2.
- Minimal border treatment.
- Property name in serif.
- Location, price and status in sans-serif metadata.
- Status labels such as TE KOOP / VERKOCHT are small and restrained.
- Hover: image scales subtly (1.02–1.04), never dramatic.
- Avoid excessive shadows and rounded corners.

## 8. Buttons & Links

Primary button:
- Ink or Deep Navy background.
- Ivory/white text.
- Square or very lightly rounded corners (2–4px).
- Height 48–56px.
- Horizontal padding 24–32px.

Secondary action:
- Text link with a refined underline or animated underline.
- No pill-shaped secondary buttons.

Hover:
- Smooth 200–350ms transition.
- Avoid bouncing or exaggerated transforms.

## 9. Photography

Photography is a primary design component.

Prefer:
- Architectural compositions.
- Natural daylight.
- Wide interiors.
- Detail shots.
- Dutch/Rotterdam context where relevant.
- Consistent color grading.

Image treatment:
- Never place arbitrary filters over property images.
- Preserve architectural lines.
- Use object-position intentionally.
- Lazy-load below-the-fold imagery.

## 10. Depth & Elevation

The visual system relies primarily on spacing and photography rather than shadows.

Use:
- 1px stone borders.
- Very subtle shadows only where needed for floating controls.
- No heavy card shadows.
- No glassmorphism.

## 11. Motion

Motion should feel expensive and quiet.

- Page transitions: 300–600ms.
- Image reveal: soft clip-path or opacity transition.
- Hover image scale: 1.02–1.04.
- Text reveal: slight upward movement + opacity.
- Respect prefers-reduced-motion.

Never animate every element simultaneously.

## 12. Responsive Behavior

Mobile is not a compressed desktop layout.

At <= 768px:
- Collapse navigation.
- Reduce hero typography.
- Stack editorial grids.
- Keep large photography.
- Maintain generous spacing, but reduce section padding.
- Ensure all touch targets are at least 44px.
- Keep CTA actions obvious.

At <= 480px:
- Use 20–24px page gutters.
- Hero height can remain cinematic but should prioritize the property image and headline.

## 13. Accessibility

- Maintain WCAG-conscious contrast.
- Never communicate status using color alone.
- Provide meaningful alt text for property photography.
- Visible keyboard focus states.
- Respect reduced-motion preferences.
- Use semantic headings in logical order.
- Buttons and links must have clear accessible names.

## 14. Brand Voice

Tone:
- Confident.
- Human.
- Sophisticated.
- Local and knowledgeable.
- Never salesy or exaggerated.

Copy should be short, precise and property-focused.

Avoid clichés such as:
- "Unieke kans!"
- "Mis deze kans niet!"
- "Droomwoning!"
unless context genuinely warrants them.

## 15. Agent Prompt Guide

Before editing UI, read this DESIGN.md and treat it as the visual source of truth.

When creating a page:
1. Start with the content hierarchy.
2. Select the strongest property image.
3. Establish an editorial grid.
4. Apply typography before decorative styling.
5. Use whitespace deliberately.
6. Keep interactions subtle.
7. Test desktop, tablet and mobile.
8. Do not introduce new colors, fonts, component styles or visual effects without a clear reason.

The finished interface should feel like a premium architectural property publication rather than a conventional real-estate portal.
