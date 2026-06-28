---
agent_uuid: d11c1df1-6121-47a7-bb6b-1d9bed308531
---
# README para Antigravity

## Paquete

- Tipo: skill coordinadora
- Package UUID: `790c6dd4-c8e4-41d8-9c25-b412829b35a2`
- Versión: `1.0.0`
- Fecha: `2026-06-26`

## Destino recomendado

`/skills/coopenotebook-coordinator/`

## Instalación

1. Descomprimir preservando la carpeta raíz.
2. Registrar `manifest.json`.
3. Incorporar `templates/content-catalog.json` como base o migración controlada.
4. Fusionar `templates/uuid-registry.json` sin reemplazar UUIDs existentes.
5. Ejecutar:

```bash
python scripts/validate_catalog.py templates/content-catalog.json templates/uuid-registry.json
```

6. Dar precedencia a esta skill para taxonomía, naming, publicación, Sandbox y UUIDs.
7. No publicar elementos que no existan físicamente.
8. No crear estados “Coming soon”, “Pronto” ni equivalentes.

## Punto de integración

El coordinador se ejecuta antes del agente de Index y después de que el artefacto material haya sido generado y validado.
