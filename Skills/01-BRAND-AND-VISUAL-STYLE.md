# 01 · Marca y estilo visual

## Esqueleto único e inviolable
Toda cápsula, sin importar el tema, tiene **exactamente** estos elementos en este orden:

1. **Franja superior** degradada verde→ámbar (`linear-gradient(90deg,#1c6b4a,#2fa36b 55%,#f0a226)`), 5px. La firma visual común.
2. **Ícono** del tema (Tabler u otro), en cuadro verde tenue `rgba(28,107,74,.08)`.
3. **Eyebrow** — el tema padre, mayúsculas, verde secundario `#2fa36b`, 12px.
4. **Título** de la cápsula — `#1a2421`, ~25px, peso 600.
5. **Cuerpo** — prosa libre, ~16px, máx 4–5 líneas.
6. **Sub-bloques opcionales** (`cards`) — grid de 1–4 tarjetas `#f6f8f7`, título verde + glosa corta.
7. **Bloque de fuente legal** — SIEMPRE al pie. Borde izquierdo ámbar `#f0a226`, fondo `rgba(240,162,38,.07)`, etiqueta "Fuente legal", número de artículo + ley, y texto literal verbatim.

**NO se agrega:** tags visibles, niveles (básico/inter/avanzado), número de lámina, metadata de origen.

## Paleta (CoopeNotebook + acento ámbar Jester)
```css
--verde:#1c6b4a;      /* primario: títulos, íconos, sub-bloques, tab activo */
--verde-sec:#2fa36b;  /* eyebrow, acentos */
--ambar:#f0a226;      /* acento Jester: franja, barrita del tab activo, fuente legal */
--ambar-txt:#9a6a12;  /* texto sobre fondo ámbar tenue */
--tinta:#1a2421; --tinta-2:#52615b; --tinta-3:#7d7763;
--blanco:#ffffff; --niebla:#f6f8f7; --niebla-2:#fbfcfb; --linea:#e7ece9;
```
> Nota: la plantilla actual usa una variante de verde más oscura (`--verde:#234a35; --verde-sec:#2f7d52`). El esquema canónico del skill es `#1c6b4a / #2fa36b`. Mantener coherencia con la plantilla en uso.

## Regla de acento (DURA)
El **verde manda** (identidad CoopeNotebook). El **ámbar puntúa** en tres lugares exactos y ningún otro:
1. La franja superior.
2. La barrita del tab activo.
3. El bloque de fuente legal.

El ámbar marca "esto toca la ley / esto es Jester". **No** usar ámbar para texto de cuerpo, botones generales ni fondos dominantes.

## Tipografía y fondo
- Inter para cuerpo/UI; opcionalmente Space Grotesk para títulos.
- Mínimo **15px**.
- Fondo siempre claro.
- Sin itálicas en la UI.

## Portada
La diseña el facilitador (no es cápsula estándar). Fondo con degradé ambiente verde→ámbar suave, logo, título grande. Marca "Cooperativa Notebook".
