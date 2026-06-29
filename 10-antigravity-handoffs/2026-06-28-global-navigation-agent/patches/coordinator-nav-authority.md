# Patch · Coordinator

## Localizar
El agente coordinador principal o el archivo que contiene la autoridad de arquitectura y routing.

## Agregar

### Autoridad de navegación global

El agente `Global Navigation` ubicado en `/08-agentes/global-navigation/` es la autoridad exclusiva sobre:

- top bar global;
- tabs izquierdos del contenido;
- drawer derecho de artefactos;
- carga de herramientas en el área principal;
- footer global mínimo.

El Coordinador debe exigir el contrato `menu-free-content-handoff` a cualquier agente productor antes de integrar una cápsula, artefacto, actividad o juego.

Si un productor entrega top bar, footer, drawer o menú visual global, el Coordinador debe:
1. preservar el contenido y la semántica de secciones;
2. extraer tabs como datos;
3. eliminar la navegación duplicada;
4. transferir el ensamblaje a Global Navigation.
