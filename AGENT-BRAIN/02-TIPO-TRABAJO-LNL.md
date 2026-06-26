# 02 · Tipo: Trabajo / LNL
# Actividad que hace el participante (Learn & Lead)

---

## Qué es

Un **Trabajo** es una actividad estructurada donde el participante produce algo:
un análisis, una selección de caso, un perfil, una reflexión. El facilitador
lo administra y puede haber exportación del resultado.

**Diferencia clave con KB:** El participante HACE algo; no solo observa.

**Ruta:** `admin-dashboard/lnl/[tema]/[nombre].html`
**Índice:** `admin-dashboard/lnl/lnl-index.json`

---

## Señales visuales distintivas

| Elemento | Trabajo/LNL |
|---|---|
| Franja superior 5px | ✅ siempre |
| Topbar sticky | ✅ con logo + "volver" |
| Sidebar izquierdo | ✅ ~260px, lista de secciones |
| Fuente legal ámbar | Opcional (si aplica) |
| Input del participante | ✅ textarea, selects, cards clicables |
| Exportar (PPT/PDF) | Posible (si aplica) |
| Present view fullscreen | ❌ |
| Código de acceso | ❌ |

---

## Estructura de la página

```
Topbar (sticky, 72px)
└── Logo + "volver" + indicador de actividad
Shell (flex row)
├── Sidebar (260px, sticky top:72px)
│   ├── Título del trabajo (verde)
│   └── Lista de secciones (nav con border-left verde al activo)
└── Main (flex:1)
    └── .wrap (max-width:820px, blanco, borde gris)
        ├── Portada / intro
        ├── Secciones con pasos numerados
        ├── Casos / opciones seleccionables
        ├── Referencias legales (accordion opcional)
        └── Footer del trabajo
```

---

## Tokens CSS base (heredados de sistema visual)

```css
/* Además de :root global, el Trabajo usa: */
.topbar { height: 72px; backdrop-filter: blur(8px); }
.sidebar { width: 260px; position: sticky; top: 72px; }
.nb-nav a.activo {
  background: var(--verde-claro);
  color: var(--verde);
  font-weight: 600;
  border-left: 3px solid var(--verde);
}
.paso-num { background: var(--verde); color: #fff; border-radius: 50%; }
.callout { background: var(--verde-claro); border: 1px solid var(--verde-borde); }
```

---

## Componentes típicos

### Caso seleccionable
```css
.caso-card { border: 1.5px solid var(--gris-borde); border-radius: 10px; }
.caso-card:hover { background: var(--verde-claro); border-color: var(--verde-borde); }
```

### Referencia legal (accordion)
```css
.art-card-header { min-height: 44px; }
.art-card.abierto .art-chev { transform: rotate(180deg); }
```

### Callout de instrucción
```css
.callout { background: var(--verde-claro); border: 1px solid var(--verde-borde); }
```

---

## Mobile (<820px)

- Sidebar colapsa con toggle (hamburger button)
- Overlay oscuro al abrir sidebar
- Botón toggle: ≥44px

---

## Notas

- Referir al `perfil-lider.html` en `lnl/Trabajo-equipo/` como ejemplo vivo.
- Si tiene exportación PPT → usar pptxgenjs@3.12.0 via CDN.
- Las secciones del sidebar se scrollean juntas con `overflow-y: auto`.
