# 04 · Tipo: Artefacto
# Herramienta interactiva (calculadoras, simuladores, exploradores)

---

## Qué es

Un **Artefacto** es una herramienta interactiva autocontenida.
El usuario introduce datos y obtiene resultados calculados, visualizaciones
o documentos generados. No es contenido que se "lee" — es una herramienta que se "usa".

**Ejemplos existentes:**
- `calculadora-delegados.html` — calcula representación proporcional
- `explorador-excedentes.html` — visualiza distribución de excedentes
- `ano-social-fiscal.html` — línea de tiempo del año cooperativo
- `plan-incidencia-politica.html` — generador de plan estructurado
- `cuerpos-directivos-corrimiento.html` — simulador de corrimiento de cargos
- `Artefacto de diagnóstico de conflicto guíado.html` — diagnóstico guiado

**Ruta:** `admin-dashboard/gow/Artefactos/[nombre].html`
**Índice:** `admin-dashboard/gow/gow-index.json`

---

## Señales visuales distintivas

| Elemento | Artefacto |
|---|---|
| Franja superior 5px | ✅ siempre |
| Topbar sticky | ✅ con logo + "volver" |
| Sidebar de pasos | Opcional (si tiene flujo) |
| Inputs / controles | ✅ núcleo de la pieza |
| Visualización de resultado | ✅ (tabla, gráfico, documento) |
| Exportar (PDF/Excel) | Posible |
| Código de acceso | ❌ |
| Present view | ❌ |
| Fuente legal | ❌ (salvo excepción documentada) |

---

## Estructura de la página

```
Topbar
├── Logo + eyebrow del tema + "volver"
Header
├── Ícono del artefacto + título + descripción breve
└── Barra de progreso / pasos (si aplica)
Zona principal (max-width: 900–1080px)
├── Panel de inputs / controles
├── Área de resultado (actualizada en tiempo real o al "calcular")
└── Acciones (Calcular / Exportar / Reiniciar)
Footnote
```

---

## Tokens CSS específicos

```css
/* Inputs */
input, select, textarea {
  border: 1px solid var(--gris-borde);
  border-radius: 6px;
  min-height: 42px;
}
input:focus { border-color: var(--verde); box-shadow: 0 0 0 3px rgba(28,107,74,.1); }

/* Resultado */
.resultado-box {
  background: var(--verde-claro);
  border: 1px solid var(--verde-borde);
  border-radius: 10px;
}

/* Botón primario */
.btn.primary { background: var(--verde); color: #fff; min-height: 44px; }
.btn.primary:hover { background: #155539; }

/* Botón secundario */
.btn.secondary { color: var(--verde); border: 1px solid var(--verde-borde); }
```

---

## Subtipos conocidos

| Subtipo | Descripción |
|---|---|
| Calculadora | Inputs numéricos → resultado numérico |
| Explorador | Slider/selects → visualización dinámica |
| Generador | Formulario → documento/PDF descargable |
| Simulador | Estado inicial → secuencia de pasos |
| Diagnóstico guiado | Preguntas en árbol → informe de resultado |

---

## Notas

- Cada artefacto es **autocontenido** (CSS/JS interno).
- Si genera PDF → usar `jsPDF` o `html2canvas` via CDN.
- Si genera PPT → usar `pptxgenjs`.
- Validar inputs antes de calcular; mostrar errores inline (no alerts).
- Mobile: inputs apilados verticalmente, botones full-width.
