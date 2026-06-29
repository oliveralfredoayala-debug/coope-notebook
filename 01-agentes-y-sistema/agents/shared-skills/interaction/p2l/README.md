# P2L · Play to Learn

P2L es la sombrilla de juegos académicos de CoopeNotebook.

## Principio rector

KB crea y aprueba el contenido.
P2L selecciona, configura, ejecuta y reporta el aprendizaje.
La sala live coordina la experiencia y elimina los datos temporales al cerrar.

## Modos

- PvE / Individual
- 1v1 / Duelo directo
- PvP / Competencia por equipos
- Cooperativo
- Live Session como capa común

## Componentes

- `core/`: contratos compartidos.
- `skills/`: responsabilidades delegadas.
- `contracts/`: esquemas de bancos, modos, juegos y resultados.
- `renderers/`: prototipos de referencia.
- `examples/`: bancos y sesiones de ejemplo.
- `qa/`: criterios de calidad y pendientes.

## Prototipos incluidos

- Crucigrama
- Duelo de respuestas rápidas
- X–0 académico

## Estado

Arquitectura inicial consolidada. No todos los juegos están implementados todavía.

## Integración con el Shell (Contrato Menu-Free)

Los juegos y experiencias P2L deben poder cargarse dentro del área principal.

No deben asumir viewport completo ni incluir navegación global propia. Deben exponer:
- root container;
- lifecycle de carga/descarga;
- tabs internos como datos cuando existan;
- acciones contextuales del juego.

`Escape` global y foco deben coordinarse con Global Navigation.

