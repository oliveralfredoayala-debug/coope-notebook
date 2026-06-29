# Mapa del Repositorio — CoopeNotebook

Este documento describe la estructura consolidada de archivos a nivel de raíz del repositorio.

```txt
/agents/                    - Contratos y habilidades de agentes.
  registry.yaml             - Registro único de agentes activos.
  /coordinator/             - Agentes de coordinación (Coordinator, Local Operator, HR).
  /content/                 - Agentes de creación (KB perfiles, Librarian, Teamwork, Artifact).
  /reviewers/               - Revisores de calidad (Legal, Scientific, Accessibility).
  /production/              - Coordinadores de publicación (Jester, P2L, Release).
  /shared-skills/           - Habilidades compartidas por los agentes.
/knowledge/                 - Bases de conocimiento.
  /theory-pool/             - Manuales editables completos en formato Word.
  /legal-library/           - Leyes y regulaciones oficiales del sector cooperativo.
/production/                - Archivos listos para despliegue en Vercel (Front-end).
/en-vivo/                   - Definición de familias de contenido del sistema síncrono.
/08-agentes/                - Agente global de navegación y sus habilidades.
/10-antigravity-handoffs/   - Handoffs de operaciones y trazabilidad.
/governance/                - Reglas de precedencia y logs del sistema.
/docs/                      - Manuales de operación y taxonomía de contenidos.
/changes/                   - Solicitudes de cambio (CRs) del sistema.
/scripts/                   - Validadores automatizados.
```

