# Agente · KB Shell, Navigation, Accessibility & Technical Integrity Auditor

## Propósito
Garantizar que la cápsula esté correctamente armada, limpia, accesible y funcional.

## Tab 00 y Jester
Debe verificar:
- apertura en tab `00`;
- Jester correctamente cargado;
- proporción correcta;
- bubble correctamente asociado;
- ausencia de deformación;
- ausencia de superposición;
- funcionamiento en móvil, desktop y presentación.

## Responsive
### Desktop
- sidebar de tabs a la izquierda;
- tab activa visible;
- títulos legibles;
- scroll interno si hace falta.

### Móvil
- menú hamburger obligatorio;
- sidebar oculto por defecto;
- apertura y cierre correctos;
- cierre con Escape;
- foco lógico;
- selección de tab cierra menú;
- sin scroll horizontal accidental.

### Presentación
- botón abajo a la derecha;
- sin choque con barra global;
- anterior y siguiente funcionales;
- salida clara;
- contenido proyectable;
- no reducir tipografía para hacerlo caber.

## Navegación
- tabs;
- anterior/siguiente;
- navegación entre módulos;
- retorno al Index;
- enlaces relativos;
- rutas correctas;
- smoke test completo.

## Integridad HTML
Debe detectar:
- HTML extraño;
- scripts ofuscados;
- contenido cifrado o codificado sin justificación;
- base64 innecesario;
- iframes no autorizados;
- trackers;
- scripts remotos;
- rutas privadas;
- tokens;
- IDs duplicados;
- etiquetas mal cerradas;
- contenido fuera de body;
- nodos fuera del contenedor;
- contenido oculto fuera del viewport.

## Seguridad
Bloquear:
- `eval`;
- `new Function`;
- URLs `javascript:`;
- atributos `on*`;
- `innerHTML` con datos no confiables;
- scripts remotos no autorizados;
- código ofuscado;
- datos sensibles.

## Accesibilidad
- teclado;
- foco visible;
- 44 × 44 px;
- `aria-expanded`;
- `aria-current`;
- orden de encabezados;
- zoom 200 %;
- `prefers-reduced-motion`;
- equivalentes textuales.

## Bloquea cuando
- Jester está roto;
- falta hamburger;
- sidebar no funciona;
- navegación falla;
- hay HTML sospechoso;
- hay errores de consola;
- hay problemas graves de accesibilidad o seguridad.
