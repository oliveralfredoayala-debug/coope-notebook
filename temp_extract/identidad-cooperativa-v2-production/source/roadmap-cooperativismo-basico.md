# Roadmap · Serie Cooperativismo Básico (Diplomado Básico)

> Documento vivo. Subir a project knowledge y actualizar después de cada sesión de trabajo.
> Última actualización: 2026-06-30

## SKILL v2 — Content Author (vigente desde 2026-06-30, supersede las reglas de tabs anteriores)

Ver archivo completo: SKILL-content-author-v2.md (subir a project knowledge junto con este roadmap).

Cambios clave respecto a lo que se había documentado antes en esta sesión:
- Tab 00 se llama **"Introducción"**, no "Jester piensa" (pendiente aclarar si Jester vive dentro del tab 00 como contenido o es una capa visual que agrega el HTML Coordinator).
- Tab final se llama **"Para llevarte"** (sin puntos suspensivos).
- Toda cápsula requiere: `content_family` (KB/LNL/GoW), `program`, `parent_title`. **Antes de producir cualquier cápsula, preguntar estos campos si no están definidos** — no asumir nunca.
- Esta serie completa (Cooperativismo Básico) es `content_family: KB`, `program: Diplomado Básico`, `parent_title: Identidad cooperativa` (umbrella para todas las cápsulas de esta serie). `version` arranca en `1.0` para cada cápsula nueva.
- "Jester piensa" SÍ es contenido de Claude: thought bubble con la idea o pregunta clave que abre el análisis de la cápsula. Va dentro del tab `00 Introducción` como su contenido de apertura.
- Entrega final en YAML con: content_family, program, parent_title, title, version, status, tabs (id, title, order, html). Opcional: assets, related, notes_for_coordinator.
- Claude no decide navegación, no aplica plantillas visuales, no reorganiza contenido aprobado sin pedido explícito.

## Principios de esta serie (decididos con Oliver, los de tabs/Jester quedan supeditados a SKILL v2 arriba)

- **Atomización total.** Cada subtema es su propia cápsula autocontenible. No agrupar temas distintos dentro de una sola cápsula aunque parezcan relacionados. Oliver decide después en Jester cómo secuenciarlas.
- **Sin componentes prácticos.** Nada de Escenarios, ejercicios, ensayos, casos o tareas. Eso es trabajo de sala de trabajo (trabajo práctico de equipo), fuera del alcance de esta serie por ahora.
- **Tabs por cápsula: tantos como el tema necesite para quedar claro y completo como standalone.** No hay número fijo ni mínimo artificial. Una cápsula simple puede ser 1 tab; una densa puede necesitar varios. Lo que sí se mantiene: máximo un componente de cada tipo por tab, Artículo siempre abre el tema dentro de un tab, y cada cápsula debe poder funcionar sola O combinarse con otras en Jester sin depender de tabs externos.
- **Convención fija de apertura y cierre:** tab `00` siempre es "Jester piensa" (idea marco/reflexión). El último tab siempre es "Para llevarte..." (cierre/síntesis, no evaluación). Los tabs intermedios son los que el tema necesite.
- **Sin evaluaciones, trabajo en grupo ni análisis crítico dentro de las cápsulas teóricas.** Eso vive en su propio espacio (sala de trabajo / trabajo práctico de equipo), nunca mezclado dentro de una cápsula de contenido.
- **Cluster:** esta serie vive en identidad/marco-legal según corresponda cápsula por cápsula, no en liderazgo.
- Verificar siempre texto legal literal contra LCH/RLCH vía project_knowledge_search antes de redactar cualquier Relaciones legales.
- **Enfoque exclusivo: contenido y división de tabs.** No gastar tokens en UI/UX (paleta, shell, componentes visuales, mobile, etc.), eso es territorio de Antigravity/Coordinator. Mi trabajo aquí es decidir qué tabs tiene cada cápsula y redactar el contenido de cada uno con fidelidad a las fuentes.

## Línea de tiempo · El cooperativismo en Honduras (confirmada vía web, múltiples fuentes coinciden: CONSUCOOP, CHC histórico, fuentes académicas)

- 1876 — Sociedad de Ladinos y el Fondo Indígena, Marcala, La Paz (antecedente más antiguo)
- 1923-24 — Constitución de la República incorpora el precepto de promover la asociación cooperativa
- 1930 — "El Obrero" en Santa Rosa de Copán (Sociedad Copaneca de Obreros); Sociedad de Tipo Gerencial en Ocotepeque
- 1936 — Ley de Sociedades Cooperativas para venta de mercaderías a plazo
- 1940-49 — Código de Comercio incorpora y mejora regulación de sociedades cooperativistas
- 1951 — Dr. Jorge St. Siegens (economista rumano, recomendado por UNESCO) organiza la Facultad de Ciencias Económicas de la UNAH, la dirige y dicta cátedra; introduce el cooperativismo como materia optativa. Es la misma persona y el mismo hito: St. Siegens = UNAH 1951, no son dos eventos separados.
- 1952 — por iniciativa del propio St. Siegens, el Banco Nacional de Fomento (BANAFOM, hoy BANADESA) crea la Sección de Cooperativas
- 1954 — primera Ley de Asociaciones Cooperativas de Honduras
- 1971 — se crea la CHC
- 1987 — Decreto 65-87, Ley de Cooperativas de Honduras vigente

Nota: St. Siegens es "la persona", y UNAH 1951 / BANAFOM 1952 son sus dos hitos de acción concreta, no eventos separados de él. Robert Owen y Rochdale quedan en el tab "Historia y evolución" (origen internacional), separado de esta línea de tiempo institucional hondureña.

- **Enfoque exclusivo: contenido y división de tabs.** No gastar tokens en UI/UX (paleta, shell, componentes visuales, mobile, etc.), eso es territorio de Antigravity/Coordinator. Mi trabajo aquí es decidir qué tabs tiene cada cápsula y redactar el contenido de cada uno con fidelidad a las fuentes.

- "Jester piensa": ¿el contenido siempre es el mismo tipo de idea marco/reflexión, o varía (a veces pregunta, a veces dato curioso) cápsula por cápsula? — sin responder aún

## Pendiente de confirmar con Oliver

## Fuentes nuevas incorporadas (sesión 2026-06-30)

- `que_es_cooperación.pptx` (9 slides) → C1
- `CURSO_BASICO_2020.pptx` (31 slides) → C2, C3, C4, C5, C6, C8
- `Qué_Principio_es.pptx` → reservado para sala de trabajo, NO se usa en C6
- `tipos_de_coopes.pptx` (12 tipos: Agrícola, Pecuaria, Acuícola, Artesanal, Agroforestal, Ahorro y Crédito, Transporte, Consumo, Educación, Vivienda, Comercialización, Escolares) → C12a
- `Situación_Actual_del_Cooperativismo_en_Honduras.pptx` (20 slides) → C15a-C15d

## Base legal confirmada (LCH/RLCH)

- Clasificación por tipo de actividad: Arts. 47-51 LCH (producción, servicio, consumo, mixtas)
- Clasificación por grado de integración: Art. 88 LCH, Art. 149 RLCH (primer/segundo/tercer grado)
- Afiliación abierta/cerrada: Art. 51 LCH párrafo 2 (umbral USD 1,000,000 en activos)
- Distribución de excedentes: Arts. 44-46 LCH
- Principios cooperativos: Art. 7 lit. b LCH + Art. 8 RLCH (los 7 principios, texto literal)
- CHC: Art. 90 LCH ("organismo privado, superior o representativo del Movimiento Cooperativo Hondureño")
- CONSUCOOP: Art. 93 LCH (institución descentralizada, autónoma, control de entes cooperativos)
- Reconocimiento constitucional: Arts. 334 y 338 Constitución

## Lista completa de cápsulas (reagrupadas, sesión 2026-06-30)

**Criterio de fusión:** se agrupan en una cápsula con varios tabs cuando los temas forman narrativa secuencial dependiente entre sí. Se mantienen separadas cuando cada una se sostiene sola y se puede mezclar independientemente en Jester.

| # | Cápsula | Tabs internos | Bloque | Estado | Fuentes |
|---|---------|---------------|--------|--------|---------|
| 1 | Orígenes del cooperativismo | Introducción · Cooperar antes del cooperativismo · Historia y evolución (Owen, Rochdale) · El cooperativismo en Honduras (Ladinos/Marcala, Copán, St. Siegens/UNAH) · Para llevarte | Identidad cooperativa (parent) | **package_ready (v1.0)** | que_es_cooperación.pptx, CURSO_BASICO_2020.pptx slides 4-9, Manual 2020, web (CONSUCOOP, CHC histórico) |
| 2 | Identidad cooperativa (v2) | Tab: Aprendizaje → 5 inner tabs (Lo que somos / Lo que nos mueve / Lo que nos representa / Valores y principios / De la identidad a la práctica) | Identidad cooperativa (parent) | **package_ready (v2.0)** | Manual 2020, Invocación (verificada), Art. 1/338, Art. 4 LCH, Art. 8 RLCH |
| 3 | El modelo cooperativo | 00 Jester piensa · Cooperativa vs. empresa mercantil · El conflicto de la cooperativa · Excedentes y su distribución · Para llevarte... | El modelo | plan aprobado | El contraste..., CURSO_BASICO_2020.pptx slide 22, Arts. 44-46 LCH |
| 4 | Derechos y deberes del afiliado/a | standalone | Membresía | plan aprobado | Manual 2020 |
| 5 | Estructura orgánica de la cooperativa | standalone | Estructura y diversidad | plan aprobado | Manual 2020 |
| 6 | Clasificación de las cooperativas | 00 Jester piensa · Por tipo de actividad · Por grado de integración · Por afiliación abierta o cerrada · Por tipo de excedentes · Para llevarte... | Estructura y diversidad | plan aprobado | Arts. 47-51, 88, 149 RLCH, 44-46 LCH, tipos_de_coopes.pptx |
| 7 | Integración del movimiento cooperativo | standalone | Estructura y diversidad | plan aprobado | Manual 2020, Art. 90 LCH |
| 8 | Símbolos cooperativos | standalone | Estructura y diversidad | plan aprobado | Manual 2020, CURSO_BASICO_2020.pptx slide 30 |
| 9 | Contexto actual del cooperativismo en Honduras | 00 Jester piensa · Estructura institucional · El cooperativismo en cifras · Gobernanza y género · Retos y oportunidades · Para llevarte... | Contexto actual | plan aprobado | Situación_Actual.pptx, Art. 90/93 LCH, MDP Informe Final |

## Próximos pasos

- Confirmar pendiente de C12a-C12d (Relaciones legales sí/no)
- Empezar a producir cápsulas una por una (orden sugerido: por bloque, empezando en Orígenes)
- Actualizar columna "Estado" conforme cada cápsula avance: plan aprobado → en producción → package_ready → published

## Contenido aprobado · Cápsula 1: Orígenes del cooperativismo

### 00 · Jester piensa
¿Cuándo empezamos a cooperar? Mucho antes de que existiera la palabra "cooperativa", ya resolvíamos juntos lo que no podíamos resolver solos.

### Cooperar antes del cooperativismo
Cooperar es un acto humano básico, no una invención moderna. Desde las primeras formas de organización social, las personas se unieron para cazar, recolectar y repartir lo obtenido, porque el trabajo conjunto rendía más que el esfuerzo individual. Esa necesidad de unirse frente a un reto común es el origen de toda forma de cooperación, mucho antes de que existiera una ley, un estatuto o una asamblea.

El cooperativismo, como movimiento organizado, es solo una de las formas que tomó esa necesidad. Pero la cooperación en sí (apoyarse mutuamente para lograr algo que en soledad sería más difícil o imposible) es anterior, más amplia y más universal que cualquier estructura formal.

### Historia y evolución
La cooperación empezó a tomar forma de movimiento organizado en Inglaterra, durante la Revolución Industrial.

Robert Owen, considerado el padre del cooperativismo, fue de los primeros en proponer que los trabajadores podían organizarse en comunidades de propiedad y beneficio compartido, como alternativa a las condiciones de explotación de las fábricas de su época.

Esa idea se materializó el 21 de diciembre de 1844, cuando un grupo de 27 hombres y una mujer, tejedores en su mayoría, fundaron en Rochdale, Inglaterra, la Sociedad Equitativa de los Pioneros de Rochdale. Establecieron reglas claras de funcionamiento (compra conjunta, reparto de excedentes según el consumo, control democrático) que se convirtieron en la base de los principios cooperativos que conocemos hoy.

### El cooperativismo en Honduras
El cooperativismo llegó a Honduras de forma gradual, con hitos que fueron construyendo el camino hacia la ley que rige hoy al sector:

- 1876 — En Marcala, La Paz, surge la Sociedad de Ladinos y el Fondo Indígena, el antecedente más antiguo de cooperativismo organizado en el país.
- 1923-24 — La Constitución de la República incorpora por primera vez el precepto de que es función del Estado promover la asociación cooperativa.
- 1930 — En Santa Rosa de Copán surge la Sociedad Copaneca de Obreros ("El Obrero"), una de las primeras manifestaciones cooperativas formales del país.
- 1936 — Se aprueba la Ley de Sociedades Cooperativas para venta de mercaderías a plazo.
- 1940-1949 — El Código de Comercio incorpora y luego mejora la regulación de las sociedades cooperativistas.
- 1951 — El Dr. Jorge St. Siegens, economista rumano recomendado por UNESCO, llega a Honduras para organizar la Facultad de Ciencias Económicas de la UNAH. La dirige, la dicta como catedrático, e introduce el cooperativismo como materia. Es la figura a la que se le atribuye el mayor impulso individual al nacimiento del cooperativismo hondureño.
- 1952 — Por iniciativa del propio St. Siegens, el Banco Nacional de Fomento (hoy BANADESA) crea su Sección de Cooperativas.
- 1954 — El Congreso Nacional aprueba la primera Ley de Asociaciones Cooperativas de Honduras.
- 1971 — Nace la Confederación Hondureña de Cooperativas (CHC).
- 1987 — Se aprueba el Decreto 65-87, la Ley de Cooperativas de Honduras que rige al sector hasta hoy.

### Para llevarte...
La cooperación es anterior al cooperativismo: la practicamos antes de tener un nombre para ella. Lo que cambió con el tiempo fue la forma, de un acto espontáneo a un movimiento con principios, reglas y, eventualmente, una ley. En Honduras, ese camino tomó más de un siglo, desde Marcala en 1876 hasta el marco legal vigente desde 1987.

## Criterio de división de tabs aplicado (repetir en próximas cápsulas)
Separar idea/concepto puro (sin fechas) de historia internacional (sin Honduras) de historia local (línea de tiempo completa del país). Mezclar lo local con lo internacional en un solo tab sobrecarga el tab y confunde origen universal con desarrollo local.

## Estándar de profundidad editorial (vigente desde 2026-06-30)

Ver SKILL-content-author-v2.md sección "Editorial Depth Standard". Resumen: no
minimizar contenido por estar destinado a pantallas/tabs. Cada sección sustantiva
lleva: propósito pedagógico, idea central, contenido principal en varios párrafos,
datos clave, contexto ampliado, ejemplo/aplicación, conexión con Honduras, error
común, cierre de sección, propuesta visual (solo sugerencia, no implementación).

Banco de preguntas: SÍ lo produce Claude, pero como artefacto SEPARADO (no
embebido en los tabs de la cápsula). No es student-facing directo; lo consume un
constructor en vivo para dinámicas (trivia, duelo, ruleta, etc.). 4-8 preguntas
por sección sustantiva, niveles 1-4 (reconocimiento/comprensión/aplicación/análisis),
con id, section_id, learning_objective, difficulty, question_type, prompt,
correct_answer, distractors, explanation, source_reference,
misconception_addressed, p2l_uses.

Entregables por cápsula ahora son 3 archivos: (1) fuente maestra editorial
(profunda, sin HTML aún), (2) Source Package YAML con HTML semántico limpio para
el HTML Coordinator, (3) banco de preguntas separado.

## Cápsula 1 — reproducida bajo el nuevo estándar (2026-06-30)
Archivos: capsula-01-fuente-maestra.yaml, capsula-01-banco-preguntas.yaml
(12 preguntas), capsula-01-origenes-del-cooperativismo.yaml (Source Package,
HTML aún basado en la versión anterior — pendiente regenerar HTML con el
contenido expandido de la fuente maestra si Oliver lo pide).

## Cápsula 2 — producida (2026-06-30)
Título: Identidad cooperativa. Tabs: Introducción · Qué es una cooperativa ·
Valores cooperativos (Art. 4 LCH, 10 valores literales) · Principios cooperativos
(Art. 8 RLCH, 7 principios literales) · Para llevarte.
Archivos: capsula-02-fuente-maestra.yaml, capsula-02-identidad-cooperativa.yaml
(Source Package), capsula-02-banco-preguntas.yaml (10 preguntas).
Estado: package_ready (v1.0)

## Cápsula 2 — REEMPLAZADA con nueva estructura (2026-06-30)

Nueva estructura, reemplaza la versión anterior de "Identidad cooperativa":

- Tab 1 · Aprendizaje (con 4 inner tabs: Lo que somos / Lo que nos mueve / Lo
  que nos representa / De la identidad a la práctica)
- Tab 2 · Análisis crítico (caso + preguntas — EXCEPCIÓN explícita a la regla
  "sin análisis crítico en cápsulas teóricas", solo para esta cápsula por
  pedido directo de Oliver, no cambia la regla general)

Novedad estructural: primer uso de INNER TABS (tabs anidados dentro de un tab).
Fuente nueva incorporada: Invocación del Movimiento Cooperativista Hondureño
(texto literal verificado en múltiples documentos del proyecto, coincide
exacto). Símbolo cooperativo (los dos pinos, raíces en círculo, verde,
amarillo) según sección de simbología del Manual 2020.

## Cápsula 2 — ajustes finales (2026-06-30)
- Inner tab 3 (Lo que nos representa): simplificado, solo explica el símbolo
  cooperativo (pinos, raíces, verde, amarillo). Se retira la distinción
  Marca/CHC/Símbolo y las instrucciones de uso del logotipo institucional.
- NUEVO inner tab 4 (Valores y principios cooperativos): enumeración simple de
  los 10 valores y 7 principios, solo nombres, sin desarrollo (otros artefactos
  ya los exploran a profundidad: cápsulas propias + banco de preguntas).
- El anterior inner tab 4 (De la identidad a la práctica) pasa a ser inner tab 5.
- Tab 2 "Análisis crítico" RETIRADO por completo. Ver regla reforzada en SKILL.

## Cápsula 2 v2 — FINAL, package_ready (2026-06-30)
Estructura: 1 tab (Aprendizaje) con 5 inner tabs (Lo que somos / Lo que nos
mueve / Lo que nos representa / Valores y principios cooperativos / De la
identidad a la práctica). Sin tab de análisis crítico (regla dura).
Archivos: capsula-02-fuente-maestra.yaml (v2.0), capsula-02-identidad-cooperativa.yaml
(Source Package v2.0 con inner_tabs), capsula-02-banco-preguntas.yaml (9 preguntas).
