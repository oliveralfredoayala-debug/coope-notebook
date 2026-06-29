---
agent_uuid: 50202621-491e-434a-b7c4-e1ab7b2846de
---
# Skill · CoopeNotebook Coordinator

## Propósito

Coordinar el mapa completo del ecosistema CoopeNotebook y actuar como autoridad de integración entre Index, KB, LnL, P2L, Jester Maker, Artifacts y Sala en vivo.

## Activación

Usar esta skill cada vez que se:

- agregue, mueva, renombre, versione o elimine contenido;
- cree una cápsula KB;
- cree un trabajo práctico;
- conecte un taller con Sandbox o Sala en vivo;
- publique una nueva descarga ZIP;
- actualice el Index principal o sus estadísticas;
- detecte riesgo de duplicación.

## Flujo obligatorio

1. Clasificar el artefacto dentro del mapa de contenido.
2. Confirmar que el contenido existe físicamente.
3. Asignar UUID v4 al artefacto y a sus registros relacionados.
4. Aplicar convención de nombre visible, slug, ruta y versión.
5. Registrar el artefacto en `content-catalog.json`.
6. Registrar el UUID en `uuid-registry.json`.
7. Actualizar enlaces descendentes y ascendentes.
8. Incluir `README-ANTIGRAVITY.md` en la raíz del ZIP.
9. Validar con `scripts/validate_catalog.py`.
10. Publicar solo entradas reales; nunca placeholders.

## Precedencia

Este paquete reemplaza cualquier regla anterior que:

- prohíba el prefijo `TP`;
- prohíba versiones en trabajos prácticos;
- permita `Coming soon`, `Pronto` o placeholders;
- duplique instrucciones de Sala en vivo dentro de la KB;
- use nombres visibles como identificador único.

## Delegación

- KB: producción y auditoría de cápsulas.
- LnL: trabajos prácticos y colaboración.
- P2L: juegos basados en bancos aprobados.
- Jester Maker: construcción de talleres.
- Sala en vivo: ejecución.
- Artifacts: entregables generados.
- Coordinador: taxonomía, registro, rutas, UUID, Index e integración.
