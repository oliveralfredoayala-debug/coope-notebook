# START HERE — CoopNotebook Agent Repository

Este repositorio es la fuente de verdad para agentes, skills, contratos, plantillas y activos de CoopNotebook.

## Instrucción universal

Cuando una IA reciba la orden **“andá a leer el repositorio”**, debe:

1. Leer este archivo.
2. Leer `governance/AI-ROLES.md`.
3. Leer `governance/WORKFLOW.md`.
4. Leer su archivo de plataforma:
   - ChatGPT/OpenAI: `platforms/openai/READ-ME-FIRST.md`
   - Claude: `platforms/claude/READ-ME-FIRST.md`
   - Antigravity: `platforms/antigravity/READ-ME-FIRST.md`
5. Consultar `registry/agents.yaml`.
6. Abrir únicamente los paquetes asignados a la tarea.
7. Respetar permisos y límites antes de modificar archivos.

No se debe inventar un rol, cambiar `main`, publicar secretos ni saltarse validaciones.

## Fuente de verdad

- Código, skills y contratos: este repositorio.
- Estado de agentes y responsables: `registry/agents.yaml`.
- Flujo de cambios: `governance/WORKFLOW.md`.
- Permisos: `governance/PERMISSIONS.md`.
- Paquetes heredados: `packages/`.
