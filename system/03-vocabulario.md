# 03 — Vocabulario del Sistema

Glosario de referencia para todos los agentes. Cuando un término aparezca en documentación, instrucciones o código, su significado es el que se define aquí.

---

## Tipos de contenido

| Término | Definición |
|---------|-----------|
| **Cápsula KB** | Pieza indivisible de conocimiento teórico proyectable. Contiene un tema central con varios tabs internos (subtemas) en secuencia fija. Es el formato nativo de Course-inator para el facilitador. |
| **Trabajo / LNL** | Actividad estructurada para el participante (individual o grupal). Contiene pasos secuenciales, campos de entrada y opcionalmente una evaluación al final. LNL = Learning by Not Lecturing. |
| **Sala en Vivo** | Sesión interactiva con código de acceso. Recolecta respuestas de participantes en tiempo real. El facilitador controla el flujo desde su vista. |
| **Artefacto** | Herramienta interactiva autocontenida: calculadoras, simuladores, exploradores de datos, visualizadores. No es contenido teórico; es una herramienta utilitaria. |
| **Evaluación** | Quiz estándar individual y asíncrono. Preguntas con opciones, retroalimentación inmediata, sin componente de tiempo real. |
| **P2L (Play to Learn)** | Juego en tiempo real dentro de una sala (tipo Kahoot). Incluye puntos, ranking en vivo, timer por pregunta. Requiere código de acceso. |
| **Recurso Legal** | Documento de consulta de legislación, estatutos o reglamentos. Usa ámbar como color dominante. Contenido siempre verbatim de la fuente oficial. |

---

## Componentes de interfaz

| Término | Definición |
|---------|-----------|
| **Present View** | Vista de proyección de una cápsula KB. Lo que el facilitador muestra en pantalla al auditorio. Tipografía grande, diseño limpio, sin notas internas. |
| **Teacher View** | Vista privada del facilitador para la misma cápsula. Incluye notas, guías didácticas, fundamento legal expandido y sugerencias de actividad. No se proyecta. |
| **Jester** | Componente de animación y transición dentro de Present View. Controla la revelación progresiva del contenido en una cápsula. |
| **Course-inator** | Motor de presentación de cápsulas KB. Renderiza las cápsulas, gestiona la navegación entre tabs y controla Jester. |
| **Dashboard** | Panel principal del facilitador en CoopeNotebook. Desde aquí accede a todas las cápsulas, actividades, artefactos y herramientas. |
| **Franja degradada** | Barra superior con gradiente de verde (`#1c6b4a`) a ámbar (`#f0a226`). Identidad visual de las cápsulas KB. |
| **Árbol de navegación** | Panel lateral izquierdo en Course-inator que muestra la estructura de bloques, acordeones y cápsulas del KB. |
| **Tab** | Subdivisión interna de una cápsula. Cada tab contiene un subtema y se navega secuencialmente. El tab activo se marca con ámbar. |
| **Sub-bloque** | Sección visual dentro de un tab. Puede ser de texto, lista, tabla, bloque legal, bloque destacado u otro tipo. |
| **Eyebrow** | Texto pequeño sobre un título que indica contexto o categoría (ej. "Módulo 2 · Gobernabilidad"). |
| **Highlight (Para recordar)** | Bloque destacado dentro de un tab, con fondo verde claro, que resalta información clave que el participante debe retener. |
| **Bloque legal** | Sección con fondo lavanda (`#7d6a9c` atenuado) y borde ámbar que contiene texto literal de legislación. Nunca se parafrasea. |
| **Fundamento legal** | Referencia precisa a la ley, artículo y numeral que sustenta una afirmación teórica. Se vincula al bloque legal correspondiente. |

---

## Personas y roles

| Término | Definición |
|---------|-----------|
| **Afiliado/a** | Persona miembro de una cooperativa. Término obligatorio; nunca usar "socio". |
| **Delegado/a** | Representante electo/a de los afiliados ante la Asamblea General de Delegados. |
| **Cuerpo directivo** | Órgano de gobierno de la cooperativa (Junta Directiva, Junta de Vigilancia, etc.). |
| **Comité** | Grupo de trabajo especializado dentro de la cooperativa (ej. Comité de Educación, Comité de Crédito). |
| **Facilitador/a** | Usuario principal de CoopeNotebook. Persona que diseña y conduce las experiencias de aprendizaje. |

---

## Términos técnicos

| Término | Definición |
|---------|-----------|
| **CAPS** | Array JavaScript dentro de una cápsula que contiene la definición de todos los tabs y su contenido. Es la estructura de datos que Course-inator consume. |
| **renderCap()** | Función JavaScript que toma el array CAPS y genera el HTML del contenido de la cápsula en Present View. |
| **ARTICULOS** | Objeto JavaScript que almacena los textos literales de artículos de ley referenciados en la cápsula. |
| **LEY** | Constante o variable que identifica la ley fuente (ej. "Ley de Cooperativas de Honduras, Decreto 65-87"). |
| **Index JSON** | Archivo JSON que registra la estructura navegable del dashboard para un tipo de contenido. |
| **kb-index.json** | Índice de cápsulas KB. Estructura: bloques → acordeones → cápsulas. |
| **gow-index.json** | Índice de contenido GOW (artefactos, salas, recursos legales). |
| **lnl-index.json** | Índice de actividades Trabajo/LNL. |

---

## Moneda

| Término | Uso |
|---------|-----|
| **HNL** | Código ISO de la moneda hondureña (lempira). Uso obligatorio en interfaces y datos. |
| ~~L.~~ | **Prohibido.** No usar esta abreviatura. |
| ~~Lps.~~ | **Prohibido.** No usar esta abreviatura. |
