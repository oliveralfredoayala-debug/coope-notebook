# 06 · Tipo: Juego en Tiempo Real / P2L
# Play-to-Learn — juego sincrónico en sala

---

## Qué es

**P2L (Play-to-Learn)** es una experiencia de juego sincrónico en sala donde los
participantes compiten o colaboran en tiempo real. Es similar a Kahoot / Mentimeter
pero integrado al ecosistema CoopeNotebook.

**Diferencia clave con Sala en Vivo:** P2L tiene mecánica de juego (puntos, ranking,
tiempo límite por pregunta, competencia entre participantes).
**Diferencia con Evaluación:** Es sincrónico, grupal y con element de gamificación.

**Ruta:** `admin-dashboard/p2l/[nombre].html`
**Estado actual:** Carpeta vacía — tipo a construir.

---

## Señales visuales distintivas

| Elemento | P2L |
|---|---|
| Franja superior 5px | ✅ siempre |
| Código de sala | ✅ prominente (igual que Sala en Vivo) |
| Timer por pregunta | ✅ cuenta regresiva visible |
| Ranking en tiempo real | ✅ leaderboard |
| Animaciones de resultado | ✅ (correcto/incorrecto con feedback visual) |
| Modo facilitador / modo jugador | ✅ dos vistas distintas |
| Badge "EN JUEGO" | ✅ |
| Present view | ❌ |

---

## Mecánicas de juego a soportar

| Mecánica | Descripción |
|---|---|
| Quiz competitivo | Opción múltiple + velocidad = puntos |
| Verdadero/Falso | Respuesta binaria rápida |
| Ordenar | Arrastrar para ordenar secuencia |
| Palabra clave | Primer participante en responder gana |

---

## Estructura de la página (vista Facilitador)

```
Topbar
Header del juego
├── Nombre del juego + descripción
└── Estado: "Esperando jugadores (N unidos)"
Vista de sala
├── Código grande + QR
├── Lista de jugadores unidos
├── Botón "Iniciar juego"
Pantalla de pregunta (durante el juego)
├── Número de pregunta + timer (cuenta regresiva)
├── Texto de la pregunta (grande, proyectable)
└── Opciones con letras A/B/C/D (colores distintos)
Pantalla de resultado por pregunta
├── Gráfica de distribución de respuestas
└── Ranking actualizado
Pantalla final
└── Podio top-3 + ranking completo
```

---

## Modelo de datos

```js
const JUEGO = {
  titulo: "¿Cuánto sabes de tu cooperativa?",
  tema: "Cooperativismo Básico",
  tiempo_por_pregunta: 20,  // segundos
  preguntas: [
    {
      id: "q1",
      texto: "¿Cuántos miembros mínimos se necesitan para constituir una cooperativa?",
      opciones: ["5", "10", "15", "20"],
      correcta: 1,
      puntos_max: 1000  // decrece con tiempo transcurrido
    }
  ]
};
```

---

## Tokens CSS específicos

```css
/* Timer circular */
.timer-circle {
  width: 64px; height: 64px;
  border-radius: 50%;
  border: 4px solid var(--verde);
  display: flex; align-items: center; justify-content: center;
  font-size: 24px; font-weight: 700; color: var(--verde);
  transition: border-color .5s;
}
.timer-circle.urgente { border-color: #ef4444; color: #ef4444; }

/* Opciones de juego (colores tipo Kahoot pero con paleta propia) */
.opcion-juego-A { background: #1c6b4a; }  /* verde */
.opcion-juego-B { background: #f0a226; }  /* ámbar */
.opcion-juego-C { background: #7d6a9c; }  /* lila */
.opcion-juego-D { background: #2fa36b; }  /* verde-sec */

/* Ranking */
.podio-1 { background: #fbd418; }  /* oro */
.podio-2 { background: #d1d5db; }  /* plata */
.podio-3 { background: #cd7c3a; }  /* bronce */
```

---

## Notas técnicas

- Requiere sincronización en tiempo real → Firebase Realtime DB o WebSockets.
- En modo demo/local → simular con participantes ficticios.
- El facilitador controla el avance de preguntas (no automático).
- Referir a `gow/en-vivo/sala.html` como base arquitectónica del código de sala.
- **Pendiente:** construir primera plantilla `p2l-template.html`.
