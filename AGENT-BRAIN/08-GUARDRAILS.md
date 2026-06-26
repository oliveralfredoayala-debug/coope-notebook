# 08 · Guardrails del Agente de Arquitectura Visual
# Reglas que aplican a TODOS los tipos de contenido

---

## Lo que NUNCA se hace

- Usar `#234a35` (verde viejo) — el canónico es `#1c6b4a`. SIEMPRE migrar.
- `onclick` inline en el HTML final → siempre `addEventListener`.
- Mezclar tipos: una KB no captura respuestas; un Trabajo no tiene present view.
- Duplicar contenido entre vistas (present view = mismo contenido re-escalado).
- Usar marca institucional ajena (solo "Cooperativa Notebook").
- Usar ámbar fuera de los 3 lugares permitidos (salvo Recurso Legal, ver 07).
- Parafrasear texto legal → siempre literal verbatim.
- Agregar tags visibles, niveles, número de lámina, metadata de origen en KB.
- Usar `alert()` para feedback → siempre inline.
- Fuente < 15px en mobile.
- Botones táctiles < 44px de altura.

---

## Proceso de identificación de tipo

Antes de construir CUALQUIER pieza, identificar el tipo:

```
¿Se proyecta sin interacción del participante?     → KB Cápsula (01)
¿El participante produce algo / completa algo?     → Trabajo/LNL (02)
¿Requiere código de sala y es sincrónico?
  └─ ¿Tiene gamificación / ranking?                → P2L Juego (06)
  └─ Solo recolecta respuestas                     → Sala en Vivo (03)
¿Es una herramienta de cálculo / simulación?       → Artefacto (04)
¿Mide conocimiento individualmente?                → Evaluación (05)
¿Es la fuente legal primaria?                      → Recurso Legal (07)
```

---

## Proceso al construir

1. **Leer el Skill del tipo** (01–07) antes de escribir una línea de código.
2. **Leer el Skill 00** para los tokens CSS canónicos.
3. Partir de la **plantilla correspondiente** en `AGENT-BRAIN/templates/`.
4. Verificar con el **checklist del tipo**.
5. Al terminar, **actualizar el índice JSON** correspondiente:
   - KB → `kb-index.json`
   - LNL → `lnl-index.json`
   - GOW → `gow-index.json`
6. Registrar la decisión en **09-DECISIONS-CHANGELOG.md**.

---

## Fuentes legales autorizadas

- LCH Decreto 65-87 + reformas (174-2013, 146-2019)
- Reglamento Acuerdo 041-2014 (ref. 015-2021)
- Constitución Art. 338
- Ley de Cooperativas de Ahorro y Crédito
- Acuerdo J.D. 001-17-07-2025

---

## Terminología obligatoria

| ❌ Prohibido | ✅ Correcto |
|---|---|
| socio / miembro | afiliado/a |
| L. 15,000 | HNL 15,000.00 |
| presidente | la presidencia / el/la presidente/a |
| módulos | dominios / secciones |
| aprendizaje | exploración |
| inicio / home | Notebook |

---

## Tecnologías permitidas (CDN)

| Librería | Uso | URL |
|---|---|---|
| Inter + Space Grotesk | Tipografía KB | Google Fonts |
| Tabler Icons Webfont 3.7.0 | Íconos KB | jsdelivr |
| pptxgenjs 3.12.0 | Exportar PPT | jsdelivr |
| jsPDF | Exportar PDF | cdnjs |
| Firebase | Sincronización real | firebase CDN |

---

## Entrega

- **Solo el HTML**, sin explicación extensa del contenido.
- Un archivo autocontenido (CSS/JS internos).
- Verificar UTF-8.
- Verificar que el HTML cierra bien (`</html>`, tags balanceados).
