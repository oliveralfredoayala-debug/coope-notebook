---
agent_uuid: d2ffeb4c-b0aa-44a6-b840-d51cc8b611b3
---
# Arquitectura canónica de contenido

## 1. Index / Main page

Orden funcional:

1. KB
2. LnL
3. P2L
4. Jester Maker
5. Artifacts
6. Sala en vivo
7. Área reservada para estadísticas

El área de estadísticas existe como contenedor vacío o reservado técnicamente, sin métricas inventadas ni mensajes promocionales.

## 2. KB

### 2.1 Diplomado Básico · contenido exclusivo

Orden inicial:

1. Identidad cooperativa
2. Legislación cooperativa
3. Gobernabilidad cooperativa
4. Funciones de los cuerpos directivos
5. Administración de asambleas
6. Liderazgo cooperativista
7. Incidencia política

No colocar estos temas en Cooperativismo Aplicado.

### 2.2 Cooperativismo Aplicado

Contiene todos los demás temas KB que no pertenecen al Diplomado Básico.

### 2.3 Cápsulas

Cada tema puede contener múltiples subcápsulas. El nombre visible básico de una cápsula es exactamente el título pedagógico decidido por la autoría. No anteponer códigos, números internos ni UUID.

Cada cápsula debe conservar internamente:

- `uuid`;
- `topicUuid`;
- `title`;
- `slug`;
- `path`;
- `version`;
- `status: published`;
- relaciones con talleres, TPs y bancos de preguntas.

## 3. Tab Sandbox dentro de cada KB

Cada KB incluye un tab visible llamado `Sandbox`.

Su contenido es exclusivamente una lista de enlaces a talleres disponibles para el tema. No incluye copias del taller, instrucciones extensas, configuración embebida ni placeholders.

Cada enlace lleva a una ficha/configuración de Sandbox que explica lo que se encontrará en Sala en vivo.

Cuando no existan talleres para un tema, el tab puede estar vacío o no renderizarse según el shell aprobado; nunca debe mostrar “próximamente”.

## 4. LnL

LnL almacena trabajos en equipo y puede replicar exactamente la estructura temática de KB:

- Diplomado Básico / tema / trabajos prácticos
- Cooperativismo Aplicado / tema / trabajos prácticos

La réplica es taxonómica, no una duplicación del contenido KB.

## 5. P2L, Jester Maker, Artifacts y Sala en vivo

Son módulos de primer nivel conectados mediante UUIDs y rutas registradas.

- P2L consume bancos aprobados.
- Jester Maker construye talleres.
- Sandbox describe y enlaza la experiencia.
- Sala en vivo ejecuta el taller.
- Artifacts agrupa entregables reales generados.

## 6. Regla de publicación

El Index es una proyección del catálogo real. Si un archivo, taller o recurso no existe y no pasa validación de ruta, no aparece.
