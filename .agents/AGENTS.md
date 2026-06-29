# Reglas del Proyecto / Project Rules

## Verificación de Enlaces e Índices antes de subir (Push)
- **Siempre** se deben revisar los enlaces de navegación, el logo 'home' y los botones 'volver' de las páginas `index.html` en las carpetas públicas (`public/`, `public/capsulas teoricas/`, `public/lnl/`, `public/artefactos/`, `public/p2l/`) antes de realizar un `git push` a producción.
- Asegurar que los botones/enlaces no queden con `href="#"` o sin controlador `onclick`, y que apunten a `/index.html` o `/` para no romper los despliegues de Vercel.

## Arquitectura v2 - Antigravity (Ecosistema) y Coordinador (HTML)

- **Ecosistema de Tres Agentes**:
  1. **Claude**: Autor de contenido pedagógico (conocimiento). Produce paquetes fuente aprobados. Nunca publica, ni gestiona GitHub o navegación.
  2. **HTML Coordinator**: Producción. Aplica la plantilla visual oficial, valida metadatos de entrega, genera el Present View, conserva el contenido canónico y empaqueta. No reorganiza el repositorio, no gestiona la navegación externa ni publica.
  3. **Antigravity**: Ecosystem Manager. Responsable de todo lo que ocurre tras la generación de un paquete de producción aprobado.

- **Vocabulario Universal / Universal Vocabulary**:
  - **Content Family**: Colección a la que pertenece el contenido (`KB`, `LNL`, `GoW`).
  - **Program**: Programa académico (`Diplomado Básico`, `Cooperativismo Aplicado`).
  - **Parent**: Título paraguas que agrupa contenidos relacionados (ej. *Administración de Asambleas*).
  - **Child**: Una sola cápsula, actividad o artefacto bajo un Parent.
  - **Sibling**: Dos o más Children compartiendo el mismo Parent.
  - **Production Package**: Paquete generado por el HTML Coordinator, listo para producción.
  - **Canonical Content**: Conocimiento reutilizable preservado independientemente de la presentación.
  - **Present View**: Experiencia HTML renderizada producida por el HTML Coordinator.

- **Contrato de Paquete de Producción**:
  - Todo paquete recibido por Antigravity se considera listo para producción.
  - La fuente autoritativa de metadatos es siempre `metadata.yaml` (los campos esperados son `content_family`, `program`, `parent_title`, `title`, `version`, `content_key`). **Nunca** se deben inferir o reinterpretar estos valores desde el HTML.

- **Resolución de Destino y Organización**:
  - Antigravity debe leer `metadata.yaml` y mapear el destino según: Content Family, Program, Parent y Child.
  - Si el **Parent** ya existe, se adjunta el Child en la ruta correspondiente.
  - Si el **Parent** no existe, **nunca** se debe asumir: se debe preguntar al usuario si se crea un nuevo Parent o si el Child se asocia a uno existente.

- **Límites de Propiedad (Ownership Boundaries)**:
  - **HTML Coordinator**: Es dueño de la navegación *dentro* de la cápsula (navegación por pestañas, menú izquierdo interno, renderizado y visualización de componentes). Antigravity **no** debe modificar el layout, plantilla, colores, tipografía ni contenido educativo de la cápsula.
  - **Antigravity**: Es dueño de la organización y navegación *fuera* de la cápsula (el índice global interactivo `index.html`, menú de navegación derecho del ecosistema, recursos de GoW relacionados y la publicación/ruteo).

- **Identidad Visual (Visual Identity)**:
  - Al crear o actualizar páginas del ecosistema, Antigravity debe preservar siempre la tipografía oficial, paleta de colores, logos, arte de menú y tokens de diseño existentes en CoopeNotebook.
  - Nunca inventar branding, reemplazar fuentes, cambiar colores o improvisar íconos. Si faltan recursos, preguntar al usuario.

- **Reglas de Decisión (Decision Rules)**:
  - Cuando la información esté completa, actuar.
  - Cuando falte información requerida (como metadatos obligatorios), preguntar al usuario. Nunca inferir metadatos obligatorios.
