# Flujo operativo

## Solicitud normal

1. El propietario pide un cambio.
2. ChatGPT o Claude leen `START-HERE.md` y el paquete relevante.
3. El coordinador redacta una solicitud en `changes/`.
4. Claude puede revisar contenido, legalidad, pedagogía o consistencia.
5. Antigravity:
   - hace `git pull`;
   - crea rama;
   - aplica el cambio;
   - ejecuta validaciones;
   - hace commit y push;
   - abre PR.
6. GitHub Actions valida.
7. El propietario aprueba y fusiona.

## Orden corta para Claude

> Andá a leer el repositorio y revisá [tema].

Claude debe leer `platforms/claude/READ-ME-FIRST.md`, identificar paquetes pertinentes y devolver hallazgos o un parche propuesto sin tocar Git.

## Orden corta para Antigravity

> Andá a leer el repositorio y ejecutá el cambio aprobado [ID].

Antigravity debe leer `platforms/antigravity/READ-ME-FIRST.md`, abrir la solicitud en `changes/`, operar en una rama y hacer push sin fusionar.

## Orden corta para ChatGPT

> Andá a leer el repositorio y coordiná [tarea].

ChatGPT debe leer `platforms/openai/READ-ME-FIRST.md`, seleccionar agentes del registro y producir la especificación o los cambios.
