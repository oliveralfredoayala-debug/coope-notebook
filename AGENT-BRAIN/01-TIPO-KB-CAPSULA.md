# 01 · Tipo: Cápsula KB (Teoría)
# Pieza de proyección del facilitador cooperativista

---

## Qué es

La **cápsula KB** es la unidad mínima del contenido teórico de Course-inator.
Es la "presentación de taller" del facilitador: su PowerPoint proyectable.

- Se **proyecta**, no se reparte al alumno.
- **No** captura respuestas. **No** tiene niveles de dificultad.
- Cada cápsula = **UN tab / UNA lámina**.
- Varias cápsulas de un tema → un archivo HTML con índice vertical izquierdo.

**Plantilla canónica:** `templates/KB-legislacion-proto.html`
**Plantilla simple:** `templates/capsula-tema-simple.html`
**Nombre de archivo:** `KB-[tema-slug].html`

---

## Esqueleto único (inviolable)

1. **Franja superior** degradada verde→ámbar, 5px.
2. **Topbar** con logo Jester + wordmark + botones nav + "Modo presentación"
3. **Índice vertical izquierdo** (~252px): árbol de cápsulas + tabs
4. **Escenario derecho (stage):** la cápsula activa
   - Ícono verde en cuadro tenue
   - **Eyebrow** — tema padre, mayúsculas, verde-sec, 12px
   - **Título** — ~24–25px, peso 600
   - **Cuerpo** — prosa libre, máx 4–5 líneas, 16px
   - **Sub-bloques opcionales (cards)** — grid 1–4, fondo niebla, título verde
   - **Bloque fuente legal** — borde lila izquierdo (nueva versión) o ámbar (simple)
5. **Barra present** (oculta hasta activar): anterior / dots / siguiente

---

## Diferencias entre plantilla simple y proto

| Elemento | capsula-tema-simple | KB-legislacion-proto |
|---|---|---|
| Índice nav | Tabs planos | Árbol cápsula→subtabs |
| Fuente legal | Ámbar simple | Lila con accordion |
| Topbar | Solo toggle | Logo Jester + nav pág |
| Apertura | Ninguna | Jester + burbuja |
| Listas | No | `.cap-list` con bullets |
| Hojas deco | No | Sí (solo present view) |

**Usar `KB-legislacion-proto.html` como THE template para cápsulas con árbol de contenido.**

---

## Modelo de datos CAPS

```js
const TEMA = "Nombre del tema";
const CAPS = [
  // Portada (primera, la diseña el facilitador)
  { portada:true, label:"Portada", icon:"ti-photo",
    marca:"Cooperativa Notebook", h1:"Título del tema",
    p:"Bajada de la portada." },

  // Cápsula estándar
  { label:"Título cápsula", icon:"ti-scale", eyebrow:"TEMA",
    title:"Título completo de la cápsula",
    body:"Cuerpo, máx 4–5 líneas.",
    cards:[["Sub-bloque","glosa"], ["Sub-bloque","glosa"]],
    art:"Artículo NN · Ley de Cooperativas de Honduras",
    law:""Texto literal verbatim del artículo."" }
];
```

---

## Reglas de granularidad

1. **Prueba del present view:** Si en modo presentación obliga a scroll → dos cápsulas.
2. **Una fuente legal por cápsula** (fuerte). Artículo distinto → cápsula aparte.
3. Ideas bajo el mismo artículo que se explican juntas → una sola cápsula.
4. **Máx 3–4 sub-bloques (cards)** por cápsula.
5. **Cuerpo máx 4–5 líneas.** Más → partir.

---

## Flujo obligatorio

**Fase 1** — Plan en texto: lista de cápsulas + artículo + sub-bloques + justificación.
Terminar con: "→ Esperando visto bueno para construir."

**Fase 2** — Construir HTML desde plantilla. Autoauditar contra checklist.

---

## Checklist de validación

- [ ] Granularidad: pasa prueba del present view
- [ ] Una fuente legal por cápsula
- [ ] Esqueleto: franja, índice, escenario, fuente legal
- [ ] Ámbar SOLO en franja + barrita + bloque legal (variante simple)
- [ ] Present view = mismo contenido re-escalado (nunca duplicado)
- [ ] Fuente legal literal verbatim, verificada
- [ ] Sin tags visibles, sin niveles, sin número de lámina
- [ ] Terminología: afiliado/a, HNL, sin itálicas, ≥15px
- [ ] Móvil: índice colapsa a barra superior, touch ≥44px
- [ ] Una sola fuente de verdad (CAPS + renderizador único)
