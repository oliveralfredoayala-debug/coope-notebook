# 08 · Decisiones y changelog

## Decisiones de diseño (registro)

### D-001 · Tabs verticales, sin niveles
Este sistema **rompe** deliberadamente con el skill `cooperativa-notebook` (que prohíbe tabs y usa modos Guided/Balanced/Expert). Aquí sí hay índice vertical de tabs y no hay niveles de dificultad. Razón: la cápsula es material de proyección del facilitador, no material auto-guiado del alumno.

### D-002 · El ámbar puntúa, el verde manda
Restricción del ámbar a tres lugares (franja, barrita del tab activo, bloque legal) para preservar la identidad CoopeNotebook (verde) y reservar el ámbar como señal de "esto toca la ley / esto es Jester".

### D-003 · Una sola fuente de verdad
Present view es la misma cápsula re-escalada (`renderCap` con flag de tamaño), nunca contenido duplicado. Evita divergencia edición↔proyección.

### D-004 · Una fuente legal por cápsula
Regla de granularidad fuerte: artículos distintos → cápsulas distintas. Mantiene la prueba del present view (una idea por pantalla).

### D-005 · Texto legal verbatim
El bloque legal es literal, verificado contra el material del proyecto. Interpretaciones siempre fuera del bloque y etiquetadas.

### Discrepancia abierta · valores de verde
El skill define `--verde:#1c6b4a; --verde-sec:#2fa36b`. La plantilla `capsula-tema.html` usa `--verde:#234a35; --verde-sec:#2f7d52`. **Pendiente:** unificar. Por ahora la plantilla en uso prevalece; documentar al cerrar.

## Changelog
- **(fecha inicial)** — Creación de los project files a partir del skill `kb-capsula` y la plantilla `capsula-tema.html`. Se separó el conocimiento en 9 archivos (00–08).
