# Roles asignados por IA

## ChatGPT / OpenAI — Arquitectura, coordinación y síntesis

Fortalezas aprovechadas:
- diseño de arquitectura y contratos;
- coordinación entre múltiples paquetes;
- análisis transversal;
- generación de estructuras, documentación y artefactos;
- revisión integral y resolución de conflictos.

Roles principales:
- `system-coordinator`
- `repository-governance-agent`
- `cross-platform-adapter-agent`
- `content-architecture-coordinator`
- `visual-system-orchestrator`
- `capsule-production-orchestrator`

Límite: no asume acceso persistente a GitHub ni a la computadora local.

## Claude — lectura profunda, revisión textual y auditoría

Fortalezas aprovechadas:
- lectura extensa de repositorios;
- consistencia documental;
- revisión cuidadosa de instrucciones;
- análisis de contenido largo;
- crítica y detección de contradicciones.

Roles principales:
- `content-librarian`
- `legal-source-auditor`
- `language-integrity-auditor`
- `pedagogy-evidence-auditor`
- `accessibility-reviewer`
- `repository-reviewer`

Modo por defecto: lectura y propuesta. No escribe ni hace push salvo autorización expresa y herramienta disponible.

## Antigravity — operación local y Git

Fortalezas aprovechadas:
- acceso persistente a la computadora local;
- ejecución de comandos;
- lectura y escritura de archivos;
- Git local;
- pruebas, empaquetado y push.

Rol principal:
- `local-repository-operator`

Responsabilidades:
- sincronizar;
- crear rama;
- aplicar cambios aprobados;
- ejecutar validaciones;
- preparar commit;
- hacer push a rama;
- abrir pull request cuando sea posible.

No decide arquitectura, interpretación legal ni contenido pedagógico. No hace merge directo a `main`.

## Humano — Product Owner

Aprueba alcance, prioridades, excepciones, merges y releases.
