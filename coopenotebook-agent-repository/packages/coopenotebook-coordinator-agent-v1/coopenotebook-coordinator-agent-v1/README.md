---
agent_uuid: 1290c937-a642-4d4f-bd47-1cf61ac5c80b
---
# CoopeNotebook · Coordinador de arquitectura y contenido

Este paquete define la autoridad transversal para mapear, nombrar, registrar e integrar el contenido de CoopeNotebook.

## Fuente de verdad

1. `SKILL.md`
2. `reference/content-architecture.md`
3. `reference/naming-and-versioning-contract.md`
4. `reference/uuid-governance.md`
5. `reference/antigravity-integration.md`
6. `templates/content-catalog.json`
7. `templates/uuid-registry.json`

## Reglas bloqueantes

- El Index principal solo muestra contenido existente.
- Nunca crear tarjetas, enlaces ni estados “Coming soon”, “Pronto” o equivalentes.
- KB separa el Diplomado Básico de Cooperativismo Aplicado.
- Cada KB incorpora un tab `Sandbox`, compuesto únicamente por enlaces a talleres disponibles para ese tema.
- LnL refleja la estructura temática de KB y almacena trabajos prácticos.
- Los trabajos prácticos usan `TP — {nombre del taller} — vN`.
- Todo artefacto, registro, tema, cápsula, taller, enlace y paquete recibe un UUID interno que nunca forma parte del nombre visible.
- Toda descarga ZIP incluye `README-ANTIGRAVITY.md`.

## Uso

Leer `SKILL.md`, actualizar el catálogo, generar UUIDs nuevos, validar rutas y entregar el ZIP con instrucciones de anexado.
