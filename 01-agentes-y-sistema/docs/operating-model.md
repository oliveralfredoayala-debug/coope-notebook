# Modelo Operativo Cruzado — CoopeNotebook

Este documento detalla cómo cooperan las distintas inteligencias artificiales en el ecosistema.

## 1. ChatGPT (OpenAI) — Arquitectura y Coordinación
- **Rol principal**: `system-coordinator`, `kb-coordinator`, `visual-system-orchestrator`.
- **Misión**: Diseñar las plantillas base, resolver el flujo entre los diferentes paquetes de contenido y estructurar las directivas pedagógicas.
- **Limitación**: No tiene acceso a comandos o sistema de archivos local en tiempo real.

## 2. Claude (Anthropic) — Lectura Profunda y Auditoría
- **Rol principal**: `legal-reviewer`, `scientific-reviewer`, `accessibility-reviewer`.
- **Misión**: Detección de errores, verificación literal de leyes (color morado) y auditoría de accesibilidad.
- **Limitación**: Sólo propone parches de texto o YAML sin escribir archivos de producción ni ejecutar Git directamente.

## 3. Antigravity (Google DeepMind) — Operación Local
- **Rol principal**: `local-repository-operator`.
- **Misión**: Operar el sistema de archivos local, ejecutar validaciones, empaquetar, realizar commits y empujar ramas de desarrollo a GitHub.
