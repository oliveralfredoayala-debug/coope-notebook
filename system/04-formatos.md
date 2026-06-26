# 04 — Formatos y Convenciones de Archivos

Este documento define las convenciones de nomenclatura, estructura y formato para todos los archivos del sistema.

---

## Formato HTML

Todos los archivos HTML de contenido deben cumplir:

1. **Autocontenidos.** Cada HTML funciona de forma independiente al abrirse en un navegador. Sin dependencias externas.
2. **Sin CDN.** No se enlazan fuentes, íconos ni librerías desde CDN. Todo se incrusta inline o en base64.
3. **UTF-8.** Declarado en `<meta charset="UTF-8">`.
4. **CSS en `<head>`.** Todos los estilos van dentro de `<style>` en el `<head>`.
5. **JS al final del `<body>`.** Todo el JavaScript va dentro de `<script>` justo antes de `</body>`.
6. **Viewport responsive.** Incluir `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.

### Estructura mínima

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Título del contenido]</title>
  <style>
    /* Tokens del sistema + estilos del componente */
  </style>
</head>
<body>
  <!-- Contenido -->
  <script>
    // Lógica del componente
  </script>
</body>
</html>
```

---

## Nomenclatura de archivos

### Cápsulas KB

| Archivo | Patrón | Ejemplo |
|---------|--------|---------|
| Present View | `KB-[tema-slug].html` | `KB-identidad-cooperativa.html` |
| Teacher View | `KB-[tema-slug]-contenido.html` | `KB-identidad-cooperativa-contenido.html` |

El **slug** se forma con el nombre del tema en minúsculas, palabras separadas por guiones, sin tildes, sin caracteres especiales.

### Otros tipos de contenido

| Tipo | Prefijo sugerido | Ejemplo |
|------|-----------------|---------|
| Trabajo / LNL | `LNL-[slug].html` | `LNL-caso-quorum.html` |
| Artefacto | `ART-[slug].html` | `ART-calculadora-quorum.html` |
| Sala en Vivo | `SALA-[slug].html` | `SALA-debate-gobernabilidad.html` |
| Evaluación | `EVAL-[slug].html` | `EVAL-modulo-1.html` |
| P2L Juego | `P2L-[slug].html` | `P2L-trivia-ley-cooperativas.html` |
| Recurso Legal | `LEY-[slug].html` | `LEY-decreto-65-87.html` |

---

## Estructura de directorios

```
coopenotebook-master/
├── public/
│   └── admin-dashboard/
│       ├── kb/                  ← Cápsulas KB (Present View + Teacher View)
│       ├── gow/                 ← Artefactos, Salas en Vivo, Recursos Legales
│       ├── lnl/                 ← Trabajos / LNL
│       └── p2l/                 ← Juegos P2L
├── agents/
│   ├── 01-arquitecto-teoria.md
│   ├── 07-operador-repositorio.md
│   └── 09-gestor-local-gdrive.md
├── system/
│   ├── 00-carta-organizacional.md
│   ├── 01-organigrama.md
│   ├── 01-workflows.md
│   ├── 02-reglas-globales.md
│   ├── 03-vocabulario.md
│   └── 04-formatos.md
└── AGENT-BRAIN/                 ← Documentos de referencia para skills de agentes
```

---

## Estructura del Index JSON

Los índices JSON registran la estructura navegable del dashboard. Cada tipo de contenido tiene su propio índice.

### kb-index.json

```json
{
  "bloques": [
    {
      "id": "bloque-identidad",
      "titulo": "Identidad Cooperativa",
      "descripcion": "Fundamentos de la identidad y los valores cooperativos.",
      "acordeones": [
        {
          "id": "acordeon-valores",
          "titulo": "Valores y Principios",
          "capsulas": [
            {
              "id": "KB-valores-cooperativos",
              "titulo": "Los 7 Valores Cooperativos"
            },
            {
              "id": "KB-principios-aci",
              "titulo": "Principios de la ACI"
            }
          ]
        }
      ]
    }
  ]
}
```

**Jerarquía:** Bloque → Acordeón → Cápsula

### gow-index.json

Estructura similar, agrupa artefactos, salas en vivo y recursos legales.

### lnl-index.json

Estructura similar, agrupa actividades y trabajos.

---

## Archivos de agentes

| Ubicación | Patrón | Contenido |
|-----------|--------|-----------|
| `agents/NN-nombre.md` | `01-arquitecto-teoria.md` | Instrucciones, alcance y reglas específicas del agente |
| `system/NN-nombre.md` | `02-reglas-globales.md` | Documentación del sistema compartida por todos |
| `AGENT-BRAIN/` | Libre | Documentos de referencia, ejemplos, plantillas para skills |

---

## Convenciones generales

- **Nombres de archivo:** minúsculas, palabras separadas por guiones (`-`), sin espacios ni caracteres especiales.
- **Extensiones:** `.html` para contenido, `.md` para documentación, `.json` para índices.
- **Sin archivos temporales** en el repositorio. Todo archivo commiteado debe ser contenido final o documentación del sistema.
- **Un archivo por pieza.** Cada cápsula, actividad o artefacto es un HTML independiente. No se combinan múltiples piezas en un solo archivo.
