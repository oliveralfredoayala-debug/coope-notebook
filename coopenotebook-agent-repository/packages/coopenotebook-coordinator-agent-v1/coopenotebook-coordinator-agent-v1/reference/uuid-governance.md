---
agent_uuid: 97caec04-64b2-4698-9ae0-3a1bdb54bc40
---
# Gobierno de UUIDs

## Estándar

Usar UUID v4 en minúsculas con guiones.

## Alcance obligatorio

Asignar UUID a:

- paquetes ZIP;
- archivos producidos;
- módulos;
- temas;
- cápsulas;
- talleres;
- trabajos prácticos y cada versión;
- enlaces Sandbox;
- bancos de preguntas;
- juegos/configuraciones P2L;
- artifacts;
- salas/configuraciones live;
- registros de catálogo;
- bloques futuros de estadísticas cuando se implementen.

## Ubicación

El UUID nunca aparece en el nombre visible ni es requisito del filename. Debe residir en uno o más de estos lugares:

- front matter de Markdown;
- campo JSON `uuid` o `agentUuid`;
- `<meta name="coopenotebook:uuid" content="...">` en HTML;
- registro maestro `uuid-registry.json`.

## Inmutabilidad

- No reutilizar UUIDs.
- No cambiar el UUID por renombrar o mover un artefacto.
- Una nueva versión material recibe UUID nuevo.
- Conservar relaciones `supersedesUuid`, `parentUuid`, `topicUuid`, `sourceUuid`.

## Registro maestro

`uuid-registry.json` es append-only en operación normal. Los elementos retirados pasan a `deprecated` o `deleted`; no se borran silenciosamente.
