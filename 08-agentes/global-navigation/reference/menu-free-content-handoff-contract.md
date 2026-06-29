# Contrato de entrega de contenido sin menús

## Propósito

Evitar que agentes de cápsulas, actividades, juegos o artefactos compitan con el agente global de navegación.

## El productor de contenido entrega

```json
{
  "title": "Título visible",
  "area_short_name": "Cápsulas | Artefactos | P2L | LnL",
  "content_type": "capsule | artifact | activity | game",
  "tabs": [
    {"id": "intro", "number": "00", "label": "Introducción"},
    {"id": "process", "number": "01", "label": "Proceso"}
  ],
  "main_html": "<main>...</main>",
  "context_actions": [],
  "requires_full_width": false,
  "artifact_registry": []
}
```

## Debe omitir

- top bar global;
- logo global;
- Home;
- Explorar;
- Búsqueda global;
- footer global;
- drawer derecho de artefactos;
- estilos globales de `body` que impidan integración;
- offsets fijos para menús no existentes;
- navegación duplicada.

## Puede incluir

- encabezados internos;
- artículos legales;
- controles;
- gráficos;
- tabs como datos semánticos;
- acciones contextuales;
- contenido principal;
- scripts de la lógica propia.

## Compatibilidad

El contenido debe:

- usar un contenedor raíz identificable;
- evitar IDs globales genéricos;
- emitir eventos propios con prefijo;
- no asumir que ocupa todo el viewport;
- soportar inserción en un área principal;
- no interceptar `Escape` global sin coordinación.
