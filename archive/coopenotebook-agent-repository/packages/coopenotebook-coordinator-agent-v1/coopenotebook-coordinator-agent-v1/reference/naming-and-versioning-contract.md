---
agent_uuid: 917d9227-b792-4593-96a2-83ad6f450c26
---
# Contrato de nombres y versiones

## Principios

El nombre visible sirve a las personas. El UUID sirve al sistema. Nunca mezclar ambos.

## KB

- Tema: título editorial exacto.
- Cápsula: título pedagógico exacto decidido al crearla.
- Archivo recomendado: slug estable y legible, por ejemplo `identidad-cooperativa.html`.
- La versión se guarda en metadatos; solo se muestra cuando sea operacionalmente necesaria.

## LnL / trabajos prácticos

Nombre visible obligatorio:

`TP — {Nombre exacto del taller} — v{entero}`

Slug/archivo recomendado:

`tp-{slug-del-taller}-v{entero}.html`

Ejemplos:

- `TP — Asamblea eficaz — v1`
- `tp-asamblea-eficaz-v1.html`
- `TP — Asamblea eficaz — v2`
- `tp-asamblea-eficaz-v2.html`

Cada versión es un artefacto distinto con UUID propio. La relación entre versiones se registra mediante `seriesUuid` y `supersedesUuid`.

## Talleres

Nombre visible: título exacto del taller.  
Archivo recomendado: `taller-{slug}.json` o formato operativo equivalente.

## Prohibiciones

- UUID en nombres visibles o filenames.
- sufijos ambiguos como `final`, `final2`, `nuevo`, `último`;
- dos artefactos con la misma combinación `type + normalizedTitle + version`;
- TP sin versión;
- placeholders visibles.
