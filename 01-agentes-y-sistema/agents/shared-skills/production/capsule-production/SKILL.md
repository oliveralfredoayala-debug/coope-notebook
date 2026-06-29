# Skill · CoopeNotebook KB Capsule Visual System

## Propósito

Construir, modificar y revisar el sistema visual y estructural de cápsulas KB HTML de CoopeNotebook usando como shell visual y funcional congelado la versión v5 de «Conflicto y Negociación Vivencial».

Esta skill estandariza la experiencia contenedora. El contenido pedagógico específico puede ser producido por otro agente o skill y luego insertado sin alterar el shell salvo autorización explícita.

## Cuándo activarla

Actívala cuando se solicite:

- crear una cápsula KB expositiva o vivencial;
- reutilizar la estructura visual de la v5;
- modificar navegación, tabs, modo presentación o componentes visuales de una KB;
- preparar una KB para que otro agente incorpore contenido;
- diseñar o aplicar una biblioteca estandarizada de recursos visuales.

## Fuente de verdad

El archivo `templates/kb-visual-shell-golden-v5.html` es el golden shell operativo.

Debe conservarse:

1. barra superior y navegación;
2. sidebar con nombre del taller y nombre de la cápsula;
3. tabs numeradas `00`, `01`, `02`...;
4. apertura con Jester en su composición original;
5. botón de modo presentación en la esquina inferior derecha;
6. tab final reservada «Banco de preguntas»;
7. comportamiento responsive, teclado, foco visible y `prefers-reduced-motion`;
8. estructura de cápsulas, tabs, renderizado y navegación;
9. identidad visual CoopeNotebook;
10. funcionamiento autónomo sin dependencias externas obligatorias.

## Regla de separación

La skill distingue tres capas:

### A. Shell congelado y Contrato Menu-Free

No modificar sin pedido explícito:
- layout general;
- navegación;
- topbar;
- sidebar;
- numeración;
- modo presentación;
- Jester;
- footer de presentación;
- breakpoints principales;
- contratos de accesibilidad y seguridad.

**Regla obligatoria (Contrato Menu-Free)**:
Las cápsulas deben entregar:
- contenido principal semántico;
- lista estructurada de tabs;
- título;
- nombre corto del área;
- acciones contextuales.

No deben entregar:
- top bar global;
- footer global;
- drawer de artefactos;
- Home, Explorar o Búsqueda;
- implementación visual final del menú lateral.

Los artículos legales, acordeones, esquemas, componentes pedagógicos y estilos internos siguen siendo responsabilidad de la cápsula.


### B. Biblioteca visual extensible

Puede ampliarse con recursos estandarizados:

- acordeones;
- cards;
- timelines;
- matrices;
- diagramas;
- gráficos;
- comparadores;
- mapas conceptuales;
- procesos;
- tablas;
- llamadas clave;
- bloques de evidencia;
- ayudas visuales;
- recursos de repaso.

Toda ampliación debe respetar `reference/visual-resource-contract.md`.

### C. Contenido desacoplado

El contenido temático puede incorporarse después mediante datos estructurados o bloques claramente identificados.

No inventar contenido académico, legal, factual ni preguntas cuando no haya sido proporcionado.

## Banco de preguntas

La tab «Banco de preguntas» debe existir, pero permanecer como placeholder cuando las preguntas serán generadas por un skill especializado.

No crear preguntas por iniciativa propia.

Debe mostrar un estado neutral, por ejemplo:

> Espacio reservado para el banco de preguntas. El contenido será incorporado por el skill especializado correspondiente.

## Flujo de trabajo

1. Copiar el golden shell.
2. Cambiar solo metadatos, nombre del taller, nombre de cápsula y contenido autorizado.
3. Mantener numeración consistente.
4. Incorporar recursos visuales desde contratos conocidos.
5. Revisar presentación, escritorio, móvil y zoom.
6. Revisar teclado y foco.
7. Revisar consola, assets y navegación.
8. Entregar HTML, reporte breve y pendientes.

## Restricciones

- No deformar assets.
- No cambiar proporciones de Jester.
- No mover el botón de presentación a la parte superior.
- No eliminar el Banco de preguntas.
- No usar `innerHTML` con datos no confiables.
- No usar scripts remotos sin autorización.
- No generar contenido temático no solicitado.
- No convertir todo en cards o acordeones.
- No reducir tipografía para forzar contenido.
- No declarar aprobado sin QA básico.

## Definition of Done

Una KB basada en esta skill está lista cuando:

- abre sin errores;
- todas las tabs navegan;
- la numeración es correcta;
- Jester conserva proporción y composición;
- el modo presentación se activa y desactiva;
- el botón no interfiere con la navegación global;
- la tab Banco de preguntas existe;
- no hay assets rotos;
- teclado, foco y móvil son usables;
- el contenido pendiente está marcado como pendiente.


## Biblioteca visual aprobada v2

La selección visual oficial está documentada en:

`reference/approved-visual-library.md`

Reglas:

- usar únicamente componentes aprobados;
- no usar componentes descartados salvo autorización explícita;
- elegir el recurso por necesidad cognitiva;
- mantener estética editorial y evitar apariencia de dashboard;
- respetar límites de densidad y presentación.


## Reglas semánticas obligatorias v3

Aplica `reference/visual-tokens.md`.

- Morado: exclusivamente artículos legales verbatim y siempre en acordeón.
- Amarillo: exclusivamente recordatorio o highlight especial.
- Verde: estructura y jerarquía, con saturación baja.
- Prohibidos los números dentro de círculos.
- Preferir bullets, numeración simple y acentos muy suaves.


## Agentes obligatorios de producción

Esta skill integra los siguientes agentes:

1. `KB Content, Evidence & Pedagogy Auditor`
2. `KB Language & Character Integrity Auditor`
3. `KB Visual Presentation Auditor`
4. `KB Shell, Navigation, Accessibility & Technical Integrity Auditor`
5. `KB Legal Verbatim & Source Auditor`
6. `KB Reusable Question Bank Readiness Agent`

Sus contratos están en `agents/`.

El orden y reglas de retorno están en:

`reference/agent-workflow.md`

## Regla de orquestación

La skill coordina el flujo. Los agentes ejecutan funciones delimitadas.

- El auditor de contenido controla verdad, pedagogía, wording y numeración.
- El auditor lingüístico controla gramática y caracteres.
- El auditor visual decide cómo presentar.
- El auditor técnico controla shell, Jester, responsive, navegación, seguridad y accesibilidad.
- El auditor legal controla artículos verbatim.
- El agente de preguntas deja preguntas listas para rodar.

## Relación con la Orquestación y Límites (Patch: Capsule systems)
- Artifact-only architecture must not be imported into capsules.
- Capsule visual and production agents retain existing rules.
- Deliver menu-free content to Global Navigation.
- Use Operations for sequence and Delivery Manager for final release.

