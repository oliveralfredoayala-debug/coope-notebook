# README-ANTIGRAVITY · Global Navigation Agent

## Resumen

Instalar el agente global de navegación en la ruta canónica del repositorio y actualizar a los agentes estructurales para que entreguen contenido libre de menús globales.

## Decisión de ubicación

| Elemento | Destino | Acción | Razón |
|---|---|---|---|
| Global Navigation Agent | `/08-agentes/global-navigation/` | Nuevo | Los agentes viven en `/08-agentes/` y este agente tiene autoridad transversal |
| Handoff | `/10-antigravity-handoffs/2026-06-28-global-navigation-agent/` | Nuevo | Mantener trazabilidad de la operación |
| Coordinator | Localizar por nombre/UUID | Fusionar patch | Debe hacer cumplir la autoridad del shell |
| Capsule producers | Localizar productores de cápsulas | Fusionar patch | Deben entregar tabs como datos y contenido sin menús |
| Visual system | Localizar skill visual | Fusionar patch | Define componentes, no navegación global |
| LnL / teamwork | Localizar skill correspondiente | Fusionar patch | Conserva interacción interna sin shell propio |
| P2L | Localizar skill correspondiente | Fusionar patch | Debe insertarse en el workspace principal |

## Archivos a crear

Copiar preservando rutas:

```text
/08-agentes/global-navigation/
/10-antigravity-handoffs/2026-06-28-global-navigation-agent/
```

## Reglas de integración

1. Registrar `/08-agentes/global-navigation/manifest.json`.
2. Dar precedencia a Global Navigation para cualquier decisión de:
   - top bar;
   - tabs izquierdos;
   - drawer derecho;
   - footer;
   - carga de artefactos en el área principal.
3. No reemplazar los agentes de dominio.
4. Aplicar los archivos de `/patches/` como bloques de política en los agentes correspondientes.
5. No copiar top bars ni sidebars desde cápsulas existentes al nuevo shell.
6. Extraer `tabs` como datos y conservar el contenido principal.
7. El icono Jester y `CoopeNotebook` deben llevar a Home.
8. Acciones universales actuales: `Explorar` y `Buscar`.
9. El footer solo muestra:
   - CoopeNotebook © año;
   - Todos los derechos reservados;
   - Última actualización.
10. Los artefactos se muestran en drawer derecho y cargan en el área principal.

## Compatibilidad esperada

Entrada:

```json
{
  "title": "Título",
  "area_short_name": "Artefactos",
  "content_type": "artifact",
  "tabs": [],
  "main_html": "<main data-cn-content-root>...</main>",
  "context_actions": [],
  "requires_full_width": false
}
```

## Validación

- [ ] No existe más de una top bar global.
- [ ] No existe más de un footer global.
- [ ] Los tabs internos están a la izquierda.
- [ ] El drawer de artefactos está a la derecha.
- [ ] El drawer carga contenido en el área principal.
- [ ] En móvil, ambos paneles son accesibles sin competir.
- [ ] El contenido de dominio funciona sin shell propio.
- [ ] `Escape`, foco y resize están coordinados.
- [ ] El preview abre sin errores.
- [ ] Los agentes productores conocen el contrato menu-free.

Ejecutar sobre HTML producido por agentes de dominio:

```bash
python 10-antigravity-handoffs/2026-06-28-global-navigation-agent/scripts/check_menu_competition.py ruta/al/archivo.html
```

## Índices a actualizar

Actualizar los índices o catálogos que enumeren:

- agentes disponibles;
- skills registrados;
- autoridades del shell;
- contratos de handoff;
- previews o templates.

Agregar:

```text
Global Navigation Agent
Ruta: /08-agentes/global-navigation/
Estado: activo
Autoridad: shell global y workspace de artefactos
```

## Riesgos

1. Las cápsulas antiguas pueden traer top bar y footer propios.
2. Algunos HTML pueden fijar `body`, `100vh` u offsets laterales.
3. Algunos juegos pueden interceptar `Escape`.
4. Pueden existir IDs globales duplicados.
5. Los productores pueden confundir tabs semánticos con menú visual.

## Commit sugerido

```text
feat(navigation): add global shell agent and menu-free producer contract
```

## Comandos sugeridos

```bash
git checkout -b feat/global-navigation-agent
cp -R 08-agentes/global-navigation /ruta/al/repo/08-agentes/
cp -R 10-antigravity-handoffs/2026-06-28-global-navigation-agent /ruta/al/repo/10-antigravity-handoffs/
git add 08-agentes/global-navigation 10-antigravity-handoffs/2026-06-28-global-navigation-agent
git commit -m "feat(navigation): add global shell agent and menu-free producer contract"
git push -u origin feat/global-navigation-agent
```

Después de fusionar los patches en los agentes existentes:

```bash
git add 08-agentes
git commit -m "refactor(agents): delegate global menus to navigation authority"
git push
```
