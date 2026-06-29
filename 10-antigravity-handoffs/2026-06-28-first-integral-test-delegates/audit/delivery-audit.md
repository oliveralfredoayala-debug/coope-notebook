# Auditoría integral — Artefacto de selección de delegados

## Decisión ejecutiva

**FAIL — no publicar.**

La pieza abre y su JavaScript es legible, pero falla el núcleo del cálculo progresivo, contiene texto no verbatim dentro de bloques lila legales y aún no está integrada al shell global del sitio.

Fuente auditada: `delegados-source-untouched.html`  
SHA-256: `20fe5696419e7273d3032981b5cb79500d9ccdb943be89a5439a23124fbae9ed`

## Alcance protegido

Durante esta prueba no se modificaron:

- texto pedagógico;
- texto legal;
- nombres, orden o numeración de tabs;
- barras, números, fórmulas o interacciones;
- HTML fuente.

Los defectos se documentan y se enrutan al agente propietario.

## Hallazgos bloqueantes

### B01 · Cálculo progresivo activa tramos completos

Propietario: **Artifact HTML Constructor**  
Severidad: **crítica**

La función usa el límite superior completo del tramo en vez de limitarlo al número real de afiliados presentes.

Comportamiento observado:

| Presentes | Implementado | Esperado |
|---:|---:|---:|
| 1 | 10 | 0 |
| 9 | 10 | 0 |
| 10 | 10 | 1 |
| 350 | 30 | 22 |
| 420 | 30 | 26 |
| 800 | 46 | 40 |
| 1,450 | 71 | 57 |

La fórmula debe contar únicamente las personas que realmente alcanzaron cada tramo.

### B02 · Conversión bidireccional no conserva el valor

Propietario: **Artifact HTML Constructor**  
Severidad: **crítica**

`calcInverse()` modela un crecimiento progresivo, pero el cálculo directo activa tramos completos. Por eso solicitar un número de delegados, convertirlo a afiliados y recalcular no devuelve siempre el número original.

Ejemplo:

- delegados solicitados: 22;
- afiliados calculados: 340;
- delegados recalculados por la implementación: 30.

### B03 · Lila con contenido no verbatim

Propietarios: **Legal-Pedagogical Writer + Legal Verbatim Auditor**  
Severidad: **crítica**

El bloque `Arts. 100–102 RLCH` resume los artículos y lo coloca dentro del componente reservado a norma textual. El lila solo puede contener texto legal 100% verbatim.

El bloque del Artículo 100 también modifica la redacción de los literales y omite partes del artículo. El bloque del Artículo 99 omite el título legal después del número de artículo.

### B04 · Marcadores legales sin negrita semántica

Propietario: **Color Palette Architect / renderer legal**  
Severidad: **alta**

Dentro del texto legal no están marcados con `<strong>`:

- el número y encabezado inicial del artículo;
- `a)`, `b)`, `c)`, `d)` y `e)`.

La corrección debe envolver los marcadores sin reescribir el texto.

### B05 · Temas sin apertura legal

Propietario: **Artifact Architect / Legal-Pedagogical Writer**  
Severidad: **alta**

Los tabs `03 · Sectores` y `04 · Brecha representativa` comienzan directamente con contenido operativo y no con su fundamento legal, contrario al estándar vigente del proyecto para este artefacto.

### B06 · Shell global ausente

Propietario: **Global Navigation Agent**  
Severidad: **alta**

Faltan:

- top bar global;
- identidad Jester + CoopeNotebook enlazada a Home;
- nombre corto del área;
- Explorar y Búsqueda;
- drawer derecho de artefactos;
- footer mínimo.

Los tabs izquierdos deben conservar exactamente nombres, orden y numeración, pero ser integrados por el agente global.

## Hallazgos de contenido que requieren devolución, no corrección silenciosa

### C01 · Mensaje en el umbral exacto

Con 3,000 afiliados el código muestra “no alcanza los 3,000”. El valor sí alcanza 3,000, pero no lo supera. Debe regresar al redactor para una formulación precisa.

### C02 · Afirmación de invalidez

La frase “un paso omitido puede invalidar la elección” requiere respaldo jurídico específico o una formulación más cauta. Debe revisarla LexCoop.

### C03 · Interpretación sobre objeción por género

La afirmación “la omisión puede ser objetada en asamblea” y la recomendación asociada deben estar respaldadas o identificadas explícitamente como práctica/recomendación, no como texto normativo.

### C04 · Personas faltantes para activar el potencial

La interfaz afirma que hacen falta todos los afiliados ausentes para activar el máximo. Debido a redondeos por grupos completos, el máximo calculado para el padrón puede alcanzarse antes de asistencia total. Debe verificarse la afirmación contra la fórmula corregida.

## Accesibilidad y técnica

- Los encabezados de acordeón son `div` clickeables, no botones.
- No tienen `aria-expanded`, `aria-controls` ni operación por teclado.
- Los tabs no declaran `role=tab`, `aria-selected` ni asociación con paneles.
- Varios labels dinámicos no están asociados mediante `for`/`id`.
- `input:focus { outline:none }` puede eliminar el indicador visible de teclado.
- El layout standalone ocupa `100vh`; debe integrarse sin competir con top bar y footer globales.

## Pruebas aprobadas

- Documento UTF-8.
- Tabs presentes y en orden `00–04`.
- Uso principal del verde coherente con Jester.
- Amarillo usado para notas/highlights.
- No se detectó uso evidente del lila en botones, métricas o gráficos.
- Eliminación de sectores impide dejar la lista vacía.
- Escape básico de nombres de sectores antes de insertarlos en HTML.

## Ruta de retrabajo obligatoria

1. Artifact HTML Constructor corrige cálculo directo e inverso.
2. Functional QA ejecuta vectores de frontera y round-trip.
3. Legal-Pedagogical Writer reemplaza resúmenes lilas por verbatim exacto o los mueve fuera del componente legal.
4. LexCoop verifica Arts. 99–102 y 119-E.
5. Language Integrity revisa mensajes sin alterar norma.
6. Palette Architect aplica marcadores `<strong>` y valida exclusividad del lila.
7. Global Navigation integra shell, tabs izquierdos exactos y drawer derecho.
8. Accessibility QA corrige semántica y teclado sin alterar funcionamiento aprobado.
9. Delivery Manager repite matriz completa y decide release.

## Criterio de salida

No puede emitirse `PASS` hasta que:

- todos los vectores funcionales pasen;
- el round-trip afiliados ⇄ delegados sea consistente;
- ningún bloque lila contenga paráfrasis;
- el shell global esté integrado;
- acordeones y tabs sean operables por teclado;
- LexCoop cierre las afirmaciones jurídicas señaladas.
