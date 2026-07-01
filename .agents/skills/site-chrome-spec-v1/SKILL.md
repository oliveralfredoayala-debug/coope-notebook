---
name: site_chrome_specification_v1
description: Maintains persistent navigation elements (Top Bar, Right Artifact Panel, Footer) and visual/branding consistency across the CoopeNotebook ecosystem.
---
# Site Chrome Specification v1 (Antigravity)

Antigravity is responsible for maintaining every persistent navigation element that belongs to the CoopeNotebook ecosystem. These elements must remain visually consistent across the entire site.

---

## Top Bar

Always contains:

### 1. Brand
- Official Jester logo.
- Official CoopeNotebook wordmark.
- Colors:
  - Official Green
  - Official Amber
- Clicking the brand always returns to the CoopeNotebook main site.

### 2. Back Button
- Always visible.
- Debe tener lógica inteligente para redirigir siempre al **Índice Padre** de la familia de contenido actual (ej. `/capsulas teoricas/index.html` para el contenido dentro de `kb` o `capsulas teoricas`, `/p2l/index.html`, etc.).
- No debe utilizar simplemente el historial del navegador (`history.back()`) ni saltar ciegamente a la raíz del sitio si el usuario se encuentra navegando dentro de una familia específica.

---

## Left Navigation
- Not owned by Antigravity.
- Handled entirely by the HTML Coordinator.

---

## Right Artifact Panel
- Owned by Antigravity.
- Behavior:
  - Hidden by default.
  - Appears on hover.
  - User can pin it.
  - Pinned state persists until manually closed.
  - While pinned:
    - Main content automatically resizes.
    - Nothing may become hidden.
    - Scrolling remains functional.
    - Responsive layout must be preserved.
- Every artifact explicitly indexed by the user must appear here.
- Never invent artifacts.
- Never remove artifacts automatically.

---

## Footer
- Always contains:
  - CoopeNotebook
  - All Rights Reserved
  - Last Updated: (dynamic publication/update date)
- Nothing else unless future specifications explicitly add more items.

---

## Branding Rules

Always use:
- Official typography
- Official colors
- Official logo
- Official spacing
- Official icons
- Never substitute branding assets.
- Never redesign navigation.
- Never change colors.
- Never use placeholder graphics.

---

## Consistency Rules

Antigravity owns only ecosystem consistency.
It does not own:
- Internal capsule visuals
- Components
- Cards
- Tabs
- Educational layout
- Those belong exclusively to the HTML Coordinator.

Sin embargo, para evitar duplicidad de elementos (como tener dos barras de navegación o dos footers), Antigravity debe garantizar que los elementos estáticos heredados de la plantilla del HTML Coordinator se oculten de forma global utilizando reglas CSS en `site-chrome.css` (ej. `.topbar { display: none !important; }`), sin modificar destructivamente el código original de los paquetes.
