---
skill_uuid: 3b0c759c-5e2c-4535-bfcf-5ef19ecbc46c
---
# Skill · CoopeNotebook Global Navigation & Artifact Workspace

## Propósito

Ser la autoridad única sobre navegación global, top bar, footer mínimo, menú lateral interno y drawer derecho de artefactos en todo CoopeNotebook.

Este skill no crea contenido académico, legal, pedagógico ni la lógica principal de los artefactos. Recibe contenido o HTML funcional sin navegación global y lo integra al shell del sitio.

## Alcance exclusivo

Controla:

- top bar global;
- identidad Jester + CoopeNotebook;
- enlace a Home desde el icono y el nombre;
- nombre corto del área actual;
- acciones universales `Explorar` y `Búsqueda global`;
- footer global mínimo;
- menú lateral izquierdo de tabs del contenido actual;
- drawer derecho de artefactos;
- apertura flotante, fijado, resize y carga en el área principal;
- responsive y accesibilidad de estos elementos;
- estados activos y jerarquía entre navegación global, navegación interna y biblioteca de artefactos.

## Regla de no competencia

Todo agente distinto de este skill debe entregar contenido **menu-free**:

- sin top bar global;
- sin footer global;
- sin drawer de artefactos;
- sin duplicar Home, Explorar o Búsqueda;
- sin inventar navegación global;
- sin fijar anchos o márgenes que impidan insertar el shell.

Los agentes de contenido sí pueden proponer el índice semántico del contenido como una lista estructurada de tabs, pero no deben implementar el menú visual final.

## Arquitectura aprobada

### Top bar global

Izquierda:
- icono Jester;
- `CoopeNotebook`;
- nombre corto del área actual.

El icono y `CoopeNotebook` siempre enlazan a Home.

Acciones universales iniciales:
- `Explorar`;
- `Buscar`.

No incluir por ahora:
- perfil;
- guardados;
- modos guiado/balanceado/experto;
- ayuda global salvo en vista de estudiante o salón en vivo.

### Menú lateral izquierdo

Pertenece al contenido activo.

- tabs numeradas;
- nombres cortos;
- estado activo visible;
- sticky en desktop;
- drawer/hamburger en móvil;
- no contiene biblioteca global de artefactos.

### Drawer derecho de artefactos

- se abre desde el borde derecho;
- carga el artefacto elegido en el área principal;
- puede ser flotante o fijado;
- fijado empuja el área principal desde la derecha;
- admite resize horizontal en desktop;
- ofrece búsqueda y filtros;
- marca el artefacto activo;
- no sustituye el menú de tabs izquierdo.

### Footer

Solo:
- `CoopeNotebook © {año}`;
- `Todos los derechos reservados`;
- `Última actualización: {fecha_de_publicación}`.

Sin enlaces, iconos, botones ni navegación repetida.

## Entrada esperada

Los demás agentes deben entregar:

1. contenido HTML semántico sin shell global;
2. título visible;
3. nombre corto del área;
4. lista de tabs en JSON o estructura equivalente;
5. slug y ruta del artefacto;
6. acciones contextuales propias del contenido;
7. requisitos especiales de viewport;
8. eventos necesarios para cargar o descargar el artefacto.

## Salida

- HTML integrado al shell global;
- navegación funcional;
- contrato de carga del área principal;
- validación responsive;
- validación de teclado y foco;
- registro de decisiones de navegación.

## Activación

Usar cuando se:

- integre una cápsula o artefacto al website;
- modifique la top bar;
- diseñe el menú interno;
- cree o ajuste el drawer de artefactos;
- revise conflictos entre menús;
- prepare una vista móvil;
- conecte una herramienta al área principal.
