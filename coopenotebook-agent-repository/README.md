# CoopNotebook Agent Repository — Fuente de Verdad

Este repositorio contiene la arquitectura de agentes, perfiles de especialización, políticas de precedencia y taxonomía de contenidos unificada para CoopNotebook.

## Estructura del Proyecto

```txt
/agents/                    - Contratos de agentes canónicos.
  /core/                    - Agentes principales (Coordinator, Local Operator, HR).
  /kb/                      - Perfiles de KB (Basic Diploma y Applied).
  /reviewers/               - Revisores de calidad (Legal, Scientific, Accessibility).
  /production/              - Coordinadores de producción (Librarian, Teamwork, Artifact, Jester, P2L, Release).
/skills/                    - Paquetes de habilidades de los agentes.
  /content/                 - Librarian, Lexcoop.
  /interaction/             - Teamwork (LNL), P2L.
  /production/              - Capsule Production, Visual System, Jester.
/governance/                - Políticas, registro de agentes y logs.
  agent-registry.yaml       - Registro oficial de agentes y estados.
  agent-lifecycle.md        - Ciclo de vida para crear/retirar agentes.
  precedence-policy.md      - Política de precedencia y colores visuales.
  replacements-log.yaml     - Historial de agentes deprecados o fusionados.
  content-inventory.yaml    - Inventario documental clasificado.
/docs/                      - Documentación técnica y de taxonomía.
  content-taxonomy.md       - Clasificación oficial de contenidos.
  operating-model.md        - Roles asignados por plataforma (GPT, Claude, Antigravity).
/changes/                   - Solicitudes de cambio (CRs) activas y plantillas.
README.md                   - Este archivo.
AGENTS.md                   - Punto de entrada para IAs.
START-HERE.md               - Instrucciones universales de arranque.
```

## Modelo Operativo General

- **ChatGPT / OpenAI**: Coordinación conceptual, diseño de arquitectura y empaquetado.
- **Claude / Anthropic**: Lectura profunda, verificación legal (color morado) y auditoría de accesibilidad.
- **Antigravity / Google**: Operación técnica local, validación, ramas de desarrollo, commits y push.
- **Humano (Oliver Ayala)**: Propietario, aprobación final y merges a la rama `main`.
