# DESIGN_SYSTEM.md
# Cooperativa Notebook — Design System & UI Reference
# Autor: Oliver Ayala
# Basado en: public/index.html (versión aprobada)

---

## Filosofía visual

- El shell desaparece. La cognición es protagonista.
- Fondo siempre blanco. Sin gradientes de fondo.
- Mucho espacio en blanco. Respirabilidad ante todo.
- Sin apariencia de LMS, dashboard, portal, o manual.
- Inspiración: NotebookLM, Obsidian, Notion, OneNote.

---

## Tokens de color

```css
:root {
  --verde:       #1c6b4a;   /* acento principal UI */
  --verde-claro: #e8f4ef;   /* fondos suaves, glyphs */
  --verde-borde: #b8dccc;   /* bordes activos, dividers */
  --gris-texto:  #1a1a1a;   /* texto principal */
  --gris-sec:    #4a4a4a;   /* texto secundario */
  --gris-borde:  #d8d8d8;   /* bordes por defecto */
  --blanco:      #ffffff;   /* fondo único */

  /* Colores del logo (solo para el SVG del mark) */
  --logo-bulb:   #fbd418;   /* bombilla — extraído del EPS CMYK */
  --logo-teal:   #1aff9e;   /* arco y dots */
  --logo-blue:   #29d6e8;   /* gradiente final del arco */
  --logo-base:   #e8a010;   /* base de la bombilla */
}
```

---

## Tipografía

```css
--font: 'Inter', system-ui, sans-serif;
/* Sin serifas. Sin itálicas en UI. */

/* Jerarquía */
.prompt-question { font-size: clamp(30px, 5vw, 46px); font-weight: 300; letter-spacing: -0.02em; }
.prompt-question strong { font-weight: 500; }
.card-title      { font-size: 22px; font-weight: 400; letter-spacing: -0.01em; }
.card-description{ font-size: 13px; font-weight: 300; line-height: 1.6; }
.card-label      { font-size: 10px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; }
.wordmark-top    { font-size: 11px; font-weight: 400; color: #999; }
.wordmark-bottom { font-size: 13px; font-weight: 500; color: #1a1a1a; }
.footnote-text   { font-size: 11px; font-weight: 300; color: #c8c8c0; }
```

---

## Logo SVG (mark only)

Extraído del EPS original `Marca_Oliver__actual_Mesa_de_trabajo_1.eps`.
Colores CMYK convertidos a hex exacto.
Usar este SVG base — solo cambiar el `id` del gradiente para evitar conflictos entre instancias.

```svg
<!-- viewBox="0 0 60 60" — usar width/height según contexto -->
<!-- Topbar: 28×28px | Hero: 52×52px -->
<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="lg-arc-[ID]" x1="8" y1="4" x2="56" y2="52" gradientUnits="userSpaceOnUse">
      <stop offset="0%"   stop-color="#1aff9e"/>
      <stop offset="50%"  stop-color="#1affb8"/>
      <stop offset="100%" stop-color="#29d6e8"/>
    </linearGradient>
  </defs>
  <!-- Arco: casi círculo completo, abierto abajo-derecha -->
  <path d="M30 5.5 A24.5 24.5 0 1 1 53.5 43"
        stroke="url(#lg-arc-[ID])" stroke-width="5" stroke-linecap="round" fill="none"/>
  <!-- Dots (escalonados, lado izquierdo) -->
  <circle cx="15"  cy="9.5"  r="2.8" fill="#1aff9e"/>
  <circle cx="8.5" cy="19"   r="3.6" fill="#1aff9e" opacity="0.88"/>
  <circle cx="6"   cy="30"   r="2.5" fill="#1aff9e" opacity="0.65"/>
  <circle cx="7"   cy="40"   r="1.7" fill="#1aff9e" opacity="0.45"/>
  <!-- Bombilla pera -->
  <path d="M30 13 C21 13 16 19 16 26 C16 31 18.5 35 23 38 L23 43 L37 43 L37 38 C41.5 35 44 31 44 26 C44 19 39 13 30 13 Z"
        fill="#fbd418"/>
  <!-- Brillo interior -->
  <ellipse cx="25" cy="21" rx="3.5" ry="5" fill="#fff176" opacity="0.45"/>
  <!-- Filamento squiggle -->
  <path d="M24 39 Q26 36.5 28 39 Q30 36.5 32 39 Q34 36.5 36 39"
        stroke="white" stroke-width="1.5" stroke-linecap="round" fill="none"/>
  <line x1="27" y1="39.5" x2="27" y2="42.5" stroke="white" stroke-width="1.4" stroke-linecap="round"/>
  <line x1="33" y1="39.5" x2="33" y2="42.5" stroke="white" stroke-width="1.4" stroke-linecap="round"/>
  <!-- Base cap -->
  <rect x="24.5" y="43" width="11" height="2.8" rx="1.4" fill="#e8a010" opacity="0.9"/>
  <rect x="26.5" y="46.5" width="7" height="2.2" rx="1.1" fill="#e8a010" opacity="0.6"/>
</svg>
```

---

## Topbar

```html
<header class="topbar">
  <a href="/" class="topbar-brand">
    <!-- Logo mark (28×28) -->
    <svg class="logo-mark" .../>
    <div class="topbar-wordmark">
      <span class="wordmark-top">Cooperativa</span>
      <span class="wordmark-bottom">Notebook</span>
    </div>
  </a>
  <!-- Breadcrumb opcional: solo en páginas internas -->
  <!-- <span class="topbar-breadcrumb">Contenidos › Incidencia Política</span> -->
</header>
```

```css
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 40px;
  border-bottom: 1px solid var(--gris-borde);
  background: var(--blanco);
  position: sticky; top: 0; z-index: 10;
}
/* Mobile */
@media (max-width: 600px) {
  .topbar { padding: 13px 20px; }
}
```

---

## Cards de navegación

El patrón base para cualquier página de selección (nivel 1, nivel 2, etc.)

```css
.sections-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  width: 100%; max-width: 640px;
}

.section-card {
  border: 1px solid var(--gris-borde);
  border-radius: 8px;
  padding: 32px 28px 28px;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.15s;
  position: relative; overflow: hidden;
}

/* Acento izquierdo al hover */
.section-card::before {
  content: '';
  position: absolute; top: 0; left: 0;
  width: 3px; height: 100%;
  background: var(--verde);
  opacity: 0; transition: opacity 0.2s;
}
.section-card:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(28,107,74,0.08); }
.section-card:hover::before { opacity: 1; }

/* Glyph */
.card-glyph {
  width: 36px; height: 36px;
  background: var(--verde-claro); border-radius: 7px;
  transition: background 0.2s;
}
.section-card:hover .card-glyph { background: var(--verde); }
/* SVG stroke inside glyph: var(--verde) → white on hover */

/* Arrow: aparece al hover */
.card-arrow { opacity: 0; transform: translateX(-4px); transition: opacity 0.2s, transform 0.2s; }
.section-card:hover .card-arrow { opacity: 1; transform: translateX(0); }
```

Mobile: `grid-template-columns: 1fr` en < 600px. Flechas siempre visibles en mobile.

---

## Animación de entrada

Tres oleadas escalonadas. Reutilizar en todas las páginas.

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

.hero-logo       { animation: fadeUp 0.4s ease both; }
.notebook-prompt { animation: fadeUp 0.4s ease 0.07s both; }
.sections-grid   { animation: fadeUp 0.4s ease 0.14s both; }
.footnote        { animation: fadeUp 0.4s ease 0.2s both; }
```

---

## Footnote

Siempre presente. Siempre al fondo. Siempre "Oliver Ayala".

```html
<div class="footnote">
  <p class="footnote-text">Oliver Ayala</p>
</div>
```

En páginas internas puede extenderse:
```html
<p class="footnote-text">Oliver Ayala · Cooperativa Notebook</p>
```

---

## Lenguaje de navegación

| ❌ No usar       | ✅ Usar              |
|-----------------|---------------------|
| Módulos         | Dominios / Secciones |
| Contenido       | Explorar / Conceptos |
| Aprendizaje     | Exploración          |
| Cursos          | Áreas                |
| Inicio / Home   | Notebook             |
| Ver más         | Explorar             |

---

## Estructura de navegación del sitio

```
/index.html              → "¿Qué deseas explorar?" (Contenidos / Herramientas)
/contents/index.html     → Lista de dominios educativos
/contents/[dominio]/     → Módulos dentro de un dominio
/tools/index.html        → Lista de herramientas interactivas
/tools/[herramienta]/    → Herramienta individual
```

Breadcrumb en topbar desde nivel 2 en adelante.

---

## Reglas inamovibles

- Fondo: **siempre #ffffff**. Sin excepciones.
- Sin footer. El footnote no es un footer.
- Sin métricas, KPIs, estadísticas, ni widgets.
- Sin bordes pesados, cards administrativas, paneles tipo dashboard.
- Topbar sin nombre del autor — solo en el footnote.
- Inter sin itálicas en la UI.
- Botones táctiles: mínimo 44px de altura.
- Fuente mínima en mobile: 15px.
