# 02 — Reglas Globales

Estas reglas aplican a **todos** los agentes del sistema sin excepción. Tienen precedencia sobre cualquier instrucción específica de agente cuando exista conflicto.

---

## Idioma y comunicación

1. **Toda comunicación se realiza en español.** Documentación, comentarios en código, nombres de variables visibles al usuario, mensajes de interfaz — todo en español.
2. **Terminología obligatoria:**
   - Siempre **afiliado/a**, nunca "socio" ni "miembro".
   - Siempre **HNL** para la moneda, nunca "L.", "Lps." ni "lempiras" en contextos técnicos.
   - Cargos y roles en **lenguaje neutro** cuando sea posible (ej. "la persona delegada" en lugar de "el delegado").
3. **Branding:** El nombre del sistema es **CoopeNotebook** (una sola palabra, C y N mayúsculas). Nunca "Cooperativa Notebook", "Coope Notebook" ni variantes.

---

## Integridad del contenido

4. **Prohibido inventar información.** Ningún agente puede fabricar artículos de ley, referencias académicas, datos estadísticos, fuentes o citas. Si no se dispone de la fuente, se indica explícitamente.
5. **Texto legal siempre verbatim.** Toda cita de legislación, estatutos o reglamentos se transcribe textualmente de la fuente original. No se parafrasea, no se resume, no se "mejora" la redacción.
6. **No publicar sin autorización del Director.** Ninguna pieza de contenido llega a producción sin aprobación expresa de Oliver.
7. **Cada pieza se audita contra su checklist de tipo** antes de publicar. QA valida, y la pieza no avanza hasta que pase.

---

## HTML y archivos

8. **Archivos HTML autocontenidos.** No se usan CDN externos para íconos, fuentes o librerías. Todos los assets se incrustan en base64 o se incluyen inline. Los archivos deben funcionar sin conexión a internet.
9. **Codificación UTF-8** en todos los archivos.
10. **CSS en `<head>`**, JavaScript al final del `<body>`.
11. **Sin dependencias externas** en tiempo de ejecución. El HTML se abre en cualquier navegador moderno y funciona completo.

---

## Dominio Antigravity Local

Este dominio rige la ubicación estricta, la indexación y la nomenclatura de todos los archivos de contenido en el entorno de desarrollo local.

### 1. Mapeo estricto de rutas de contenido

Cualquier archivo de contenido debe residir estrictamente en su ruta asignada y registrarse en su respectivo archivo de índice JSON:

*   **Cápsulas KB (Teoría)**:
    *   **Ruta**: `public/admin-dashboard/kb/[diplomado-slug]/[tema-slug]/KB-[tema-slug].html` (Present View) y `KB-[tema-slug]-contenido.html` (Teacher View).
    *   **Índice**: Indexado en `kb-index.json`.
*   **Trabajos/LNL (Actividades del participante)**:
    *   **Ruta**: `public/admin-dashboard/lnl/[tema-slug]/[nombre].html`.
    *   **Índice**: Indexado en `lnl-index.json`.
*   **Salas en Vivo**:
    *   **Ruta**: `public/admin-dashboard/gow/en-vivo/sala-[nombre].html`.
    *   **Índice**: Indexado en `gow-index.json`.
*   **Artefactos (Herramientas interactivas)**:
    *   **Ruta**: `public/admin-dashboard/gow/Artefactos/[nombre].html`.
    *   **Índice**: Indexado en `gow-index.json`.
*   **Evaluaciones**:
    *   **Ruta**: `public/admin-dashboard/lnl/[tema-slug]/evaluacion-[nombre].html` (o integrados directamente en el HTML de trabajo correspondiente).
    *   **Índice**: Indexado en `lnl-index.json` o `gow-index.json` según corresponda.
*   **Juegos P2L**:
    *   **Ruta**: `public/admin-dashboard/p2l/p2l-[nombre].html`.
    *   **Índice**: Indexado en `gow-index.json` o su propio archivo de índice.
*   **Recursos Legales**:
    *   **Ruta**: `public/admin-dashboard/gow/Recursos Legales/[nombre].html`.
    *   **Índice**: Indexado en `gow-index.json`.

### 2. Reglas obligatorias de nomenclatura de archivos

*   **Minúsculas y Slugs**: Todos los nombres de archivos y carpetas deben estar completamente en minúsculas, usando caracteres alfanuméricos y separados por guiones medios (slugs). Ejemplo: `calculadora-excedentes-coop.html`.
*   **Nombres explícitos e identificativos**: Evitar nombres genéricos, crípticos o abreviados (ej. nunca usar `calc.html`, usar en su lugar `calculadora-excedentes-coop.html`; nunca usar `t1.html`, usar `toma-decisiones-cooperativas.html`).
*   **Doble HTML para Cápsulas KB**: Toda cápsula de teoría KB requiere obligatoriamente una pareja de archivos HTML estructurados: uno para la vista de presentación (`KB-[tema-slug].html`) y otro para la vista del facilitador con el contenido detallado (`KB-[tema-slug]-contenido.html`).

---

## Sistema de diseño visual

12. **Verde canónico: `#1c6b4a`**. Este es el verde primario del sistema. Nunca usar `#234a35`, `#006633` ni otros verdes no autorizados.
13. **Verde secundario: `#2fa36b`** — para gradientes y acentos.
14. **Ámbar (`#f0a226`) solo en 3 contextos:**
    - Franja degradada superior (gradiente verde-ámbar).
    - Tab activo en navegación de cápsula.
    - Bloque legal (fondo lavanda con borde ámbar).
    - **Excepción:** Los Recursos Legales usan ámbar como color dominante en toda su interfaz.
15. **Tipografía:**
    - Cuerpo: `Inter`, fallback `system-ui, sans-serif`.
    - Títulos: `Space Grotesk`, fallback `sans-serif`.
    - Tamaño mínimo de texto: **15px**. Nunca menor.
16. **Fondo siempre claro.** No hay modo oscuro. Los fondos son `#ffffff`, `#f6f8f7` o `#fbfcfb`.
17. **Sin itálicas en UI.** No se usan cursivas en ningún componente de interfaz.

---

## Autoría y atribución

18. **No incluir autoría** salvo que el Director lo solicite expresamente. Cuando se incluya, será como nota al pie discreta, nunca en header ni de forma prominente.

---

## Jerarquía de prioridades

Cuando exista conflicto, este es el orden de precedencia:

| Prioridad | Regla |
|-----------|-------|
| 1 | **Fidelidad legal** prevalece sobre creatividad |
| 2 | **Rigor académico** prevalece sobre creatividad |
| 3 | **Rapidez operativa** prevalece sobre estética (si no compromete exactitud) |
| 4 | **Autoridad del Director** prevalece sobre criterio de cualquier agente |

---

## Tokens de diseño (referencia rápida)

```css
:root {
  --verde:       #1c6b4a;
  --verde-sec:   #2fa36b;
  --verde-claro: #e8f4ef;
  --verde-borde: #b8dccc;
  --ambar:       #f0a226;
  --ambar-txt:   #9a6a12;
  --lila:        #7d6a9c;
  --tinta:       #1a2421;
  --tinta-2:     #52615b;
  --tinta-3:     #7d7763;
  --blanco:      #ffffff;
  --niebla:      #f6f8f7;
  --niebla-2:    #fbfcfb;
  --linea:       #e7ece9;
  --font-body:   'Inter', system-ui, sans-serif;
  --font-title:  'Space Grotesk', sans-serif;
}
```
