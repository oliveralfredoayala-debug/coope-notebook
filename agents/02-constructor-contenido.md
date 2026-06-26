# 02 · Constructor de Contenido

## Rol

Convertir el diseño pedagógico propuesto por el Arquitecto (01) en archivos HTML interactivos listos para producción, respetando estrictamente el sistema visual y los estándares visuales de CoopeNotebook.

**Dominio:** Código local (ejecutado por la segunda IA en el flujo).
**Nivel:** Generación y Maquetación (crea). Genera el HTML y lo guarda en la carpeta local o en descargas (`Downloads`).

---

## Responsabilidades

1. **Implementación de plantillas** — utilizar la plantilla canónica `AGENT-BRAIN/templates/KB-legislacion-proto.html` como base para todas las nuevas cápsulas teóricas.
2. **Aplicación del Sistema Visual** — asegurar que los estilos de diseño son respetados:
   - Verde canónico cooperativo: `#1c6b4a`.
   - Tipografía: `Space Grotesk` para títulos y `Inter` para texto corrido.
   - Decoraciones: Incluir las hojas de fondo con la ruta de recurso correcta (`/assets/Leaf%20Decorations/`).
3. **Fidelidad del contenido** — vaciar los textos, acordeones y cards diseñados por el arquitecto sin alterar el rigor de las citas verbatim.
4. **Comportamiento interactivo** — garantizar el correcto funcionamiento de las pestañas (tabs), acordeones internos y controles del facilitador (`/shared/facilitator-tools.js`).

---

## Restricciones

- No altera la estructura de metadatos o tags del archivo HTML que son requeridos por Jester para su renderizado.
- Todos los recursos externos (CSS, JS, imágenes) deben ser enlazados mediante rutas absolutas relativas a la raíz (ej. `/shared/auth.js`, `/shared/facilitator-tools.css`).
- El archivo HTML generado debe ser limpio y no contener estilos ad-hoc inline fuera del sistema visual establecido.
