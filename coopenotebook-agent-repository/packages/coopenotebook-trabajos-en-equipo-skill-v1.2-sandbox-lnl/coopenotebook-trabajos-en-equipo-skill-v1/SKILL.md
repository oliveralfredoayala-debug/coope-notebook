# Skill · CoopeNotebook Trabajos en Equipo

## Propósito

Diseñar, construir, modificar y auditar trabajos prácticos HTML para resolución grupal dentro de CoopeNotebook.

El artefacto debe ayudar al equipo a observar, conversar, distinguir, decidir, producir una respuesta propia y revisar pendientes. No debe sentirse como examen, formulario administrativo ni presentación expositiva.

## Cuándo activarla

Actívala cuando se solicite:

- crear un trabajo práctico para equipos;
- transformar una actividad individual en dinámica grupal;
- adaptar un taller a un recorrido interactivo;
- incorporar casos, decisiones, negociación, roles o producción conjunta;
- revisar un HTML de trabajo en equipo;
- corregir exportación, guardado, navegación, móvil o checklist;
- integrar el trabajo al Index.

## Fuente de verdad

El archivo `templates/trabajo-equipo-golden.html` es el caso patrón inicial.

El contrato normativo está en `reference/team-work-contract.md`.

## Capas

### A. Contrato pedagógico

Obligatorio:
- una acción principal por etapa;
- selección cerrada solo para categorías ya definidas;
- respuesta abierta para interpretación, decisión y creación;
- lenguaje directo;
- progresión grupal visible;
- ninguna interfaz piensa por el equipo.

### B. Shell funcional

Debe conservar:
- navegación por etapas;
- avance no bloqueante;
- checklist móvil;
- autoguardado local;
- limpieza con confirmación;
- exportación PDF;
- exportación PowerPoint cuando esté disponible en el patrón;
- responsive y foco visible;
- funcionamiento autónomo.

### C. Contenido variable

Puede cambiar:
- tema;
- casos;
- consignas;
- categorías;
- número de etapas;
- ayudas de Jester;
- evidencia y fuentes verificadas.

No inventar contenido legal, institucional, académico o factual.

## Convención de entrega

`trabajo-equipo-[tema-del-taller].html`

No usar versión, número interno ni prefijo TP en la entrega final.

## Agentes

1. Team Work Orchestrator
2. Collaborative Pedagogy Architect
3. Case, Content & Evidence Auditor
4. Group Dynamics & Facilitation Agent
5. Interaction & Experience Builder
6. Cooperative Law Core Authority
7. Accessibility, Mobile & Inclusive Participation Reviewer
8. Functional, Export & Integration QA
9. Live Room Sandbox & Configuration Inspector

Los contratos están en `agents/`. Su secuencia y retornos están en `reference/agent-workflow.md`.

## Regla de orquestación

La skill coordina; cada agente emite hallazgos dentro de su dominio.

- Pedagogía decide qué pensamiento se busca.
- Contenido verifica verdad, coherencia y trazabilidad.
- Dinámica grupal revisa participación y conversación.
- Experiencia traduce la actividad a interfaz.
- Cooperative Law Core Authority controla fuente, jerarquía, competencia, verbo jurídico, condiciones, excepciones y trazabilidad.
- Accesibilidad protege participación real en móvil, teclado y lectura.
- QA comprueba que todo funcione y se integre.

Ningún agente puede declarar aprobado un dominio ajeno.

## Rigor jurídico por defecto

Toda actividad con gobierno cooperativo, órganos, responsabilidades, procedimientos, sanciones, elecciones, fondos, control o supervisión activa el modo `ADVANCED / CORE-HEAVY` del agente jurídico. Para menciones institucionales simples puede usarse `BALANCED`.

El protocolo obligatorio está en `reference/legal-core-heavy-protocol.md`. Una afirmación jurídica sin fuente suficiente se bloquea; no se completa por inferencia.


## Lecturas legales en morado

Cuando una actividad solicite que el estudiantado lea uno o más artículos para discutirlos:

- aplicar el sistema morado de KB exclusivamente al bloque jurídico;
- mostrar número de artículo, norma de origen, texto de lectura y fuente;
- diferenciar visualmente texto literal, paráfrasis y consigna;
- no usar morado como decoración fuera del contenido jurídico;
- no recortar una disposición de forma que altere sujeto, competencia, condición, excepción o efecto;
- activar `Cooperative Law Core Authority` antes de publicar;
- aplicar `reference/legal-purple-reading-contract.md`.

El bloque morado no convierte una paráfrasis en cita literal. Cada clase de contenido debe declararse explícitamente.

## Sandbox de sala en vivo

Todo trabajo en equipo incluye un botón superior `Sandbox`, equivalente funcional al control de modo presentación de KB, pero orientado a inspección.

Sandbox debe mostrar, sin editar el recurso:

- identificador y tipo de actividad;
- configuración efectiva;
- perfil jurídico activo;
- agents evocados;
- fuente y ruta lógica del contenido;
- estrategia de resolución;
- estado de guardado, exportación y accesibilidad;
- advertencias por contenido embebido o duplicado.

El contenido vivo no se duplica dentro del HTML. Se evoca desde la carpeta lógica `lnl` mediante un contrato de referencia. La configuración base es:

```js
content: {
  root: "lnl",
  strategy: "invoke",
  duplicate: false
}
```

La ruta física puede ser resuelta por el shell o la sala en vivo. El HTML no debe fingir que una ruta no verificada fue cargada correctamente. Ver `reference/sandbox-live-room-contract.md`.

## Definition of Done

Un trabajo está listo cuando:
- el equipo entiende qué hacer en cada etapa;
- las interacciones no sustituyen pensamiento propio;
- los casos y consignas son coherentes;
- no hay atribuciones legales no verificadas;
- móvil, teclado y foco son utilizables;
- guardado, limpieza, navegación y exportación funcionan;
- el checklist es orientativo, no bloqueante;
- no hay errores de consola ni assets rotos;
- los artículos de lectura usan el sistema morado jurídico y conservan su trazabilidad;
- Sandbox refleja la configuración efectiva y confirma que el contenido se evoca desde `lnl` sin duplicación;
- el nombre final y el enlace del Index coinciden;
- los agentes no reportan bloqueos.
