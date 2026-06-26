# 00 · Sistema Visual — CoopeNotebook
# Agente de Arquitectura Visual | Referencia maestra

---

## Filosofía visual

> "El shell desaparece. La cognición es protagonista."

- Fondo siempre **blanco (#ffffff)**. Sin gradientes de fondo.
- Mucho espacio en blanco. Respirabilidad ante todo.
- Sin apariencia de LMS, dashboard, portal, o manual.
- Inspiración: NotebookLM, Obsidian, Notion, OneNote.
- Inter sin itálicas en la UI. Fuente mínima mobile: 15px.
- Botones táctiles: mínimo **44px** de altura.

---

## Tokens de color canónicos (ADOPTAR SIEMPRE)

```css
:root {
  /* Identidad CoopeNotebook */
  --verde:       #1c6b4a;   /* acento principal — tabs, íconos, encabezados */
  --verde-sec:   #2fa36b;   /* eyebrow, acentos secundarios */
  --verde-claro: #e8f4ef;   /* fondos suaves, hover, glyphs */
  --verde-borde: #b8dccc;   /* bordes activos, dividers */

  /* Ámbar Jester — SOLO en 3 lugares (ver regla) */
  --ambar:       #f0a226;   /* franja superior, barrita tab activo, bloque legal */
  --ambar-txt:   #9a6a12;   /* texto sobre fondo ámbar */

  /* Lila — cápsulas KB con acento legal secundario */
  --lila:        #7d6a9c;
  --lila-txt:    #5a4a78;
  --lila-bg:     rgba(125,106,156,.08);
  --lila-line:   rgba(125,106,156,.3);

  /* Neutros */
  --tinta:   #1a2421;   /* texto principal KB */
  --tinta-2: #52615b;   /* texto secundario KB */
  --tinta-3: #7d7763;   /* labels, metadata */
  --gris-bg:     #f7f7f5;   /* fondo general (GOW/LNL) */
  --gris-borde:  #e4e4e0;   /* bordes por defecto */
  --blanco:  #ffffff;
  --niebla:  #f6f8f7;   /* fondo KB */
  --niebla-2:#fbfcfb;
  --linea:   #e7ece9;

  /* Tipografía */
  --font-body:  'Inter', system-ui, sans-serif;
  --font-title: 'Space Grotesk', sans-serif;  /* solo en KB */
}
```

---

## Regla del Ámbar (DURA, no negociable)

El **verde manda** (identidad CoopeNotebook). El **ámbar puntúa** en exactamente 3 lugares:

1. La **franja superior** de 5px: `linear-gradient(90deg, #1c6b4a, #2fa36b 55%, #f0a226)`
2. La **barrita del tab activo** (izquierda, 3px)
3. El **bloque de fuente legal** (borde izquierdo, fondo tenue)

**NO** usar ámbar en texto de cuerpo, botones generales, ni fondos dominantes.

---

## Topbar

Sticky, fondo blanco, borde inferior gris suave.

```html
<header class="topbar">
  <!-- Logo SVG 28×28 -->
  <div class="topbar-wordmark">
    <span class="wordmark-top">Cooperativa</span>
    <span class="wordmark-bottom">Notebook</span>
  </div>
  <!-- Breadcrumb solo en páginas internas -->
</header>
```

- Sin nombre del autor en topbar → solo en footnote
- Footnote: `Oliver Ayala · Cooperativa Notebook`

---

## Animación de entrada (estándar)

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
.hero-logo     { animation: fadeUp 0.4s ease both; }
.prompt-text   { animation: fadeUp 0.4s ease 0.07s both; }
.content-grid  { animation: fadeUp 0.4s ease 0.14s both; }
.footnote      { animation: fadeUp 0.4s ease 0.2s both; }
```

---

## Cards de navegación (selector de nivel)

```css
.section-card {
  border: 1px solid var(--gris-borde);
  border-radius: 8px;
  padding: 32px 28px 28px;
  transition: border-color .2s, box-shadow .2s, transform .15s;
}
.section-card:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(28,107,74,.08); }
/* Acento verde izquierdo al hover */
.section-card::before { content:''; position:absolute; top:0; left:0; width:3px; height:100%; background:var(--verde); opacity:0; transition:.2s; }
.section-card:hover::before { opacity:1; }
```

---

## Breakpoints

- `@media (max-width: 820px)` — índice colapsa a barra superior scrollable
- `@media (max-width: 600px)` — grid de 1 columna, flechas siempre visibles

---

## Lenguaje de navegación

| ❌ No usar     | ✅ Usar              |
|---------------|---------------------|
| Módulos       | Dominios / Secciones |
| Contenido     | Explorar / Conceptos |
| Aprendizaje   | Exploración          |
| Cursos        | Áreas                |
| Inicio / Home | Notebook             |

---

## Reglas inamovibles

- Fondo: **siempre #ffffff** en páginas de navegación. **#f6f8f7** en KB.
- Sin footer real. El footnote NO es un footer.
- Sin métricas, KPIs, estadísticas, ni widgets.
- `afiliado/a` — nunca "socio" ni "miembro"
- Montos: **HNL 15,000.00** (nunca L. 15,000)
- Todo el texto en **español**
