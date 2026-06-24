# 07 · Entrega y handoff

## Qué se entrega
- **Solo el HTML**, sin explicación extensa del contenido.
- Un archivo autocontenido por tema, nombrado `KB-[tema-slug].html`.

## Antes de entregar
1. Autoauditar contra el checklist completo de `05-GUARDRAILS.md`.
2. Verificar artículos legales contra el material del proyecto (verbatim).
3. `grep` para confirmar que el HTML cierra correctamente (`</html>`, tags balanceados).
4. Confirmar UTF-8.

## Flujo con el usuario / facilitador
1. **Fase 1** — entregar plan de granularidad en texto (lista de cápsulas + artículos + justificación). Terminar con "→ Esperando visto bueno para construir."
2. Esperar visto bueno explícito.
3. **Fase 2** — construir el HTML desde la plantilla y entregar.

## Dónde encaja en Course-inator / Jester
- El facilitador importa el HTML del tema.
- El **orden** de las cápsulas y de los temas lo controla el facilitador en Jester, no el archivo.
- El present view se usa para proyectar en el taller (fullscreen real en producción).

## Plantilla de referencia
`capsula-tema.html` es el armazón canónico. Cualquier tema nuevo parte de él, llenando `TEMA` y `CAPS`.
