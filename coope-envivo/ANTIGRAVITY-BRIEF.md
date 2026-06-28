# Brief para Antigravity

## Objetivo

Convertir este esqueleto en **CoopeEnVivo**, una sala participativa estable para talleres presenciales.

## No rediseñar desde cero

Conservar:

- identidad sobria de CoopeNotebook;
- verde, ámbar, fondos claros;
- lenguaje sencillo;
- funcionamiento móvil;
- rutas existentes;
- Firebase como backend;
- Vercel como hosting del frontend.

## Prioridad 1: dejar el MVP confiable

1. Ejecutar `npm install`.
2. Corregir cualquier incompatibilidad de versiones.
3. Configurar Firebase.
4. Desplegar reglas e índices.
5. Verificar:
   - facilitador crea cuenta;
   - facilitador crea sala;
   - dos celulares entran con el código;
   - ambos ven la actividad activa;
   - ambos responden;
   - el proyector recibe cambios;
   - mostrar/ocultar resultados funciona.

## Prioridad 2: completar seguridad

- Validar en reglas que una actividad solo recibe respuestas cuando está abierta.
- Limitar tamaño y forma de `value`.
- Evitar que un participante cambie `displayName` dentro de una respuesta de forma engañosa.
- Añadir App Check.
- Añadir rate limiting viable para respuestas.
- Evitar códigos duplicados mediante una colección reservada o transacción.
- Añadir una clave o sesión separada para controlar el panel del facilitador.

## Prioridad 3: experiencia del facilitador

- Lista de salas anteriores.
- Duplicar una sala.
- Biblioteca de actividades por taller.
- Reordenar actividades.
- Cerrar, reabrir y archivar.
- Moderar respuestas abiertas antes de proyectarlas.
- Descargar CSV y PDF.
- Ver cantidad de participantes activos.
- Generar QR.
- Botón de pantalla completa.

## Prioridad 4: experiencia de participantes

- Recuperar nombre y sala al recargar.
- Estado claro: enviado, actualizado, cerrado.
- Nunca perder una respuesta por mala conexión.
- Mostrar modo offline y reintento.
- Accesibilidad con teclado, lectores y zoom.
- Controles táctiles de al menos 44 px.

## Tipos de actividad del MVP

- opción única;
- selección múltiple;
- escala;
- palabra breve;
- respuesta abierta.

No añadir ranking, competición ni puntos en esta fase.

## Pruebas mínimas

- Chrome Android;
- Safari iPhone;
- computadora del facilitador;
- proyector en una segunda pestaña;
- 30 clientes simultáneos;
- conexión móvil irregular;
- recarga de página;
- resultados ocultos;
- intento de un participante de editar la sala;
- intento de leer respuestas antes de que se muestren.

## Criterio de terminado

El MVP está terminado cuando una persona no técnica puede:

1. crear una sala;
2. compartir código o QR;
3. abrir una pregunta;
4. recibir respuestas;
5. mostrar resultados;
6. avanzar;
7. descargar un reporte;

sin tocar Firebase Console durante el taller.
