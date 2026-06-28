---
agent_uuid: 3b8c8042-77bd-49fd-99c7-c756eac215da
---
# Integración para Antigravity

Cada ZIP entregado debe incluir en su raíz `README-ANTIGRAVITY.md`.

## Secuencia de anexado

1. Leer el manifiesto del paquete.
2. Verificar `packageUuid`.
3. Ejecutar validación de UUIDs contra el registro global.
4. Copiar archivos a las rutas declaradas, no inferidas.
5. Fusionar el catálogo por UUID.
6. Actualizar el Index únicamente con entradas `published` cuya ruta exista.
7. Actualizar las relaciones Sandbox, LnL, P2L y Sala en vivo.
8. Preservar diseño y estructura visual del Index.
9. Ejecutar smoke test de enlaces.
10. Registrar fecha, paquete y resultado de integración.

## Conflictos

- Mismo UUID y mismo hash: tratar como idempotente.
- Mismo UUID y hash diferente: bloquear y reportar conflicto.
- Distinto UUID con misma clave lógica: bloquear posible duplicado.
- Ruta ya ocupada: bloquear salvo migración declarada.
- Entrada “coming soon” o equivalente: eliminar/rechazar.
