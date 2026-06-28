# Contrato visual y semántico · Lectura legal morada

## Regla central

El morado identifica material jurídico que el estudiantado debe leer o consultar para la discusión. Replica la semántica visual de KB: **morado = legal**. No es un acento decorativo.

Tokens mínimos:

```css
--morado:#7d6a9c;
--morado-suave:rgba(125,106,156,.07);
--morado-borde:rgba(125,106,156,.18);
--morado-texto:#57456f;
```

## Anatomía obligatoria

Cada bloque debe contener:

1. `Artículo`: número exacto y, cuando aplique, inciso o literal.
2. `Norma`: nombre identificable de la ley o reglamento.
3. `Clase`: `Texto literal`, `Extracto literal`, `Paráfrasis verificada` o `Referencia para consulta`.
4. `Lectura`: contenido presentado al equipo.
5. `Fuente`: documento de origen y control de versión disponible.
6. `Consigna`: fuera del cuerpo literal y visualmente separada.

## Reglas de fidelidad

- No marcar una paráfrasis como texto literal.
- No usar comillas para texto reconstruido.
- No suprimir condiciones, excepciones, remisiones o sujetos competentes cuando sean materiales.
- Un extracto debe indicar que es extracto.
- Si el artículo remite a otra disposición necesaria para comprenderlo, mostrar la remisión o advertirla.
- Si la vigencia externa no fue verificada, declararlo.
- La consigna del equipo nunca forma parte del artículo.
- El bloque debe ser revisado por `Cooperative Law Core Authority` en perfil `ADVANCED / CORE-HEAVY`.

## Interacción recomendada

El artículo puede estar abierto por defecto cuando su lectura sea indispensable. Si se usa acordeón:

- el control dice `Leer artículo`;
- conserva estado y foco accesible;
- no oculta la fuente;
- en impresión, el contenido aparece desplegado;
- en Sandbox, se informa cuántos bloques legales existen y su clase.

## Prohibiciones

- Morado en tarjetas no jurídicas.
- Resúmenes jurídicos sin etiqueta.
- “Según la ley” sin artículo verificable.
- Artículos generados desde memoria.
- Mezclar texto normativo y explicación pedagógica en el mismo párrafo.
