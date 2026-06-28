# Permisos

| Actor | Leer | Proponer | Editar archivos | Push a rama | Merge main |
|---|---:|---:|---:|---:|---:|
| ChatGPT/OpenAI | Sí | Sí | En entorno disponible | No garantizado | No |
| Claude | Sí | Sí | No por defecto | No | No |
| Antigravity | Sí | Ejecuta solicitudes | Sí, local | Sí | No |
| GitHub Actions | Sí | No | Solo artefactos CI | No | No |
| Propietario | Sí | Sí | Sí | Sí | Sí |

Reglas:
1. Nunca exponer secretos.
2. Nunca forzar push.
3. Nunca borrar historial compartido.
4. Todo cambio funcional va en rama.
5. Todo merge requiere revisión humana, salvo política futura explícita.
