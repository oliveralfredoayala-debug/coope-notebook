# 09 · Decisiones y Changelog
# Registro de arquitectura del sistema visual

---

## Decisiones de diseño

### D-001 · Verde canónico: #1c6b4a
El verde oficial del sistema es `#1c6b4a / #2fa36b`.
La plantilla vieja `capsula-tema-simple.html` usaba `#234a35 / #2f7d52`.
**Decisión:** Migrar todo al `#1c6b4a`. Confirmado por el usuario.
Las plantillas en `AGENT-BRAIN/templates/` ya usan el valor correcto.

### D-002 · El ámbar puntúa, el verde manda
Restricción del ámbar a 3 lugares: franja, barrita tab activo, bloque legal.
**Excepción documentada:** Recursos Legales (tipo 07) pueden usar ámbar más ampliamente.

### D-003 · Una sola fuente de verdad en KB
El present view es la misma cápsula re-escalada (`renderCap` con flag),
nunca contenido duplicado. Aplica solo a KB Cápsulas.

### D-004 · Una fuente legal por cápsula KB
Artículos distintos → cápsulas distintas. Mantiene la prueba del present view.

### D-005 · Texto legal verbatim
El bloque legal es literal, verificado contra el material del proyecto.

### D-006 · P2L = Juegos en tiempo real en sala
Confirmado: P2L son juegos sincrónicos gamificados (puntos, ranking, timer).
Diferente a Sala en Vivo que solo recolecta respuestas.
La carpeta `admin-dashboard/p2l/` está vacía — primer juego pendiente.

### D-007 · Evaluación = Quiz estándar individual
Evaluación es quiz asíncrono individual. No es sincrónico ni requiere sala.
Puede existir como sección final de un Trabajo/LNL o como HTML independiente.

### D-008 · Skills del agente en AGENT-BRAIN/
Los archivos de memoria/skills del agente se mueven de `Skills/` a `AGENT-BRAIN/`.
La carpeta `Skills/` (antigua) puede eliminarse o se mantiene como referencia
hasta que el usuario confirme que todo está correcto en `AGENT-BRAIN/`.

### D-009 · KB-legislacion-proto.html = THE template canónica para KB
Confirmado por el usuario. Este archivo es la plantilla de referencia
para cápsulas KB con árbol de contenido complejo.
Copiada a `AGENT-BRAIN/templates/KB-legislacion-proto.html`.

### D-010 · Arquitectura multi-agente: 8 roles definidos
Creadas las definiciones completas de los 8 agentes en `agents/`:
- **Arquitectos (proponen):** 01-Teoría, 02-Experiencias, 03-Sala
- **Constructores (producen):** 04-Cápsulas HTML, 05-Artefactos
- **Integrador (ensambla):** 06-Integrador Web
- **Operador (ejecuta):** 07-Operador Repositorio
- **Revisor (valida):** 08-QA
Cada definición incluye: rol, responsabilidades, entradas/salidas, flujo, restricciones, referencias.
Documentación del sistema llenada en `system/` (organigrama, workflows, reglas, vocabulario, formatos).

### D-011 · División de trabajo por modelos y frontera local
Frontera de responsabilidades acordada con el Director:
- **GPT / Claude:** Dueños de los agentes de diseño conceptual y contenido (01, 02, 03).
- **Antigravity:** Dueño del Dominio Local y Formato (04, 05, 06, 08, 09), encargado de producir y validar HTML listo e indexado localmente.
- **Sibling (modelo hermano):** Dueño de la Infraestructura Remota (07), encargado de Git push, GitHub y deploy en Vercel.
La entrega de Antigravity al Sibling ocurre formalmente cuando se declara el estado local **`Ready to Push`**.

### D-012 · Agente Gestor Local (09) y GDrive Sync
Creación del agente `09-gestor-local-gdrive` para la limpieza local, verificación física de consistencia (cero huérfanos/fantasmas) y sincronización local periódica con Google Drive. El Operador de Repositorio (Sibling) mantiene la sincronización GitHub/Git local.

---

## Changelog

| Fecha | Cambio |
|---|---|
| 2026-06-25 | Creación de `AGENT-BRAIN/` — sistema completo de tipos de contenido |
| 2026-06-25 | Adoptado verde #1c6b4a como canónico (vs. viejo #234a35) |
| 2026-06-25 | Documentados 7 tipos: KB, Trabajo, Sala en Vivo, Artefacto, Evaluación, P2L, Recurso Legal |
| 2026-06-25 | Copiado `KB-legislacion-proto.html` como plantilla canónica KB |
| 2026-06-25 | Copiado `DESIGN_SYSTEM.md` de Downloads como referencia |
| 2026-06-25 | Definidos 8 agentes en `agents/` con roles, flujos y checklists |
| 2026-06-25 | Llenada documentación del sistema en `system/` (5 archivos) |
| 2026-06-25 | Creado agente `09-gestor-local-gdrive` para Dominio Local y GDrive sync |
| 2026-06-25 | Redefinidas las fronteras de agentes (GPT/Claude = Contenido, Antigravity = Local/Formato, Sibling = Push/Vercel) |
| (fecha inicial) | Skills originales en `Skills/` — solo cubrían KB Cápsulas |

---

## Pendientes

- [ ] Construir `p2l-template.html` — primer juego P2L
- [ ] Construir `evaluacion-template.html` — plantilla de quiz
- [ ] Construir `artefacto-template.html` — plantilla base de herramienta
- [ ] Unificar `sala.html` con los tokens CSS canónicos (#1c6b4a)
- [ ] Verificar que `KB-nuevo-formato.html` en legislacion-cooperativa es correcto
- [ ] Llenar la carpeta `p2l/` con el primer juego
- [ ] Crear `.agents/` (Gemini workspace customization root) con skills que apunten a `AGENT-BRAIN/`

