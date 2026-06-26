# Reglas del Proyecto / Project Rules

## Verificación de Enlaces e Índices antes de subir (Push)
- **Siempre** se deben revisar los enlaces de navegación, el logo 'home' y los botones 'volver' de las páginas `index.html` en las carpetas públicas (`public/`, `public/capsulas teoricas/`, `public/lnl/`, `public/artefactos/`, `public/p2l/`) antes de realizar un `git push` a producción.
- Asegurar que los botones/enlaces no queden con `href="#"` o sin controlador `onclick`, y que apunten a `/index.html` o `/` para no romper los despliegues de Vercel.
