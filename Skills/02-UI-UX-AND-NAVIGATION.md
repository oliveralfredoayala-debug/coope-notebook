# 02 · UI/UX y navegación

## Ensamblado del tema — índice vertical a la izquierda
Varias cápsulas de un tema se montan en un archivo con:

- **Columna izquierda (≈200–210px):** nombre del tema arriba (con ícono verde); debajo, un ítem por cápsula. El ítem activo lleva fondo verde tenue + **barrita ámbar** a la izquierda. La columna crece hacia abajo y scrollea si hace falta.
- **Escenario derecho:** la cápsula activa, con el esqueleto único.
- **Portada:** primera siempre, la diseña el facilitador.

## Móvil (<820px)
- La columna colapsa a una **barra superior scrollable**.
- Sin hover obligatorio.
- Touch ≥ **44px**.

## Present view — el mismo contenido, más grande
Un **toggle** "present view" (no una pantalla aparte) que toma la cápsula tal cual y la agranda para proyectar.

**Regla absoluta:** una sola fuente de verdad. El modo presente NO es contenido duplicado, es la misma cápsula re-escalada. Editar la cápsula actualiza ambos modos.

Al activar present view:
- Se **esconde el índice lateral** y se **agranda** título, cuerpo, sub-bloques y fuente legal (escala ~1.5–1.8×).
- Aparece una **barra inferior** con `anterior` / `siguiente` + puntitos de progreso, para avanzar cápsulas como diapositivas.
- Soporta avance con **flechas del teclado** (←/→).
- En producción: **fullscreen real** (Fullscreen API) para proyectar sin cromo del navegador.
- Al salir, vuelve a la vista de edición con el índice, sin perder la cápsula activa.

## Accesibilidad / interacción
- Sin `onclick` inline en el HTML final; usar listeners.
- Íconos con `aria-hidden="true"`.
- `Escape` sale del present view.
