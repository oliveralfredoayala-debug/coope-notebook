# 06 · Arquitectura técnica

## Estructura del archivo
- **Un archivo HTML autocontenido por tema** (todas sus cápsulas + portada + present view).
- CSS interno en `<head>`; JS interno al final.
- Sin librerías externas salvo la fuente (Google Fonts: Inter / Space Grotesk) e íconos (Tabler icons webfont).
- Sin `onclick` inline en el HTML final; usar `addEventListener`.

## Una sola fuente de verdad
- Las cápsulas viven como un arreglo de datos **`CAPS`**.
- Un **único renderizador** (`renderCap`) que toma `big=true/false` para edición/presente.
- Editar `CAPS` actualiza ambos modos.

## Modelo de datos `CAPS`
```js
const TEMA = "[Nombre del tema]";
const CAPS = [
  // Portada (la diseña el facilitador, primera, especial)
  { portada:true, label:"Portada", icon:"ti-photo",
    marca:"Cooperativa Notebook", h1:"[Título del tema]",
    p:"[Bajada de la portada.]" },

  // Cápsula estándar
  { label:"[Título cápsula]", icon:"ti-scale", eyebrow:"[Tema]",
    title:"[Título cápsula]",
    body:"[Cuerpo, máx 4–5 líneas.]",
    cards:[["[Sub-bloque]","[glosa]"], ...],   // 1–4 max
    art:"Artículo NN · Ley de Cooperativas de Honduras",
    law:"“[Texto literal verbatim del artículo.]”" }
];
```

## Componentes JS clave (de la plantilla)
- `renderCap(c)` — renderiza portada o cápsula estándar.
- `paintTabs()` / `paintDots()` — estado activo del índice y progreso.
- `setMode(p)` — toggle present view + Fullscreen API.
- `go(i)` — navegación circular entre cápsulas.
- Listener `keydown`: `ArrowRight`/`ArrowLeft` navegan, `Escape` sale del present.

## Convenciones de archivo
- Plantilla base: `templates/capsula-tema.html` — **no reinventar el armazón**.
- Nombre de archivo: `KB-[tema-slug].html`.
- Generar con `create_file`/Python en **UTF-8**.
- Verificar con `grep` que el HTML cierra bien.

## Breakpoint
- `@media (max-width:820px)` — índice horizontal scrollable, tabs en fila.
