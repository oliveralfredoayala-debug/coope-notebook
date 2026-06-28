# Arquitectura

## Frontend

Next.js con App Router:

- `/` — portada;
- `/facilitador` — autenticación, sala y actividades;
- `/sala` — ingreso con código;
- `/sala/[code]` — participante;
- `/proyector/[code]` — pantalla pública de resultados.

## Tiempo real

Cloud Firestore usa listeners `onSnapshot` para:

- cambios del estado de la sala;
- actividad activa;
- actividades creadas;
- respuestas recibidas.

## Identidad

### Facilitador

Firebase Authentication con correo y contraseña.

El UID queda guardado como `ownerUid` en el documento de sala.

### Participantes

Firebase Anonymous Authentication.

Cada UID anónimo puede escribir un documento de respuesta por actividad.

## Seguridad

Las reglas buscan que:

- solo el dueño edite sala y actividades;
- participantes autenticados anónimamente lean salas públicas;
- cada participante escriba su propia respuesta;
- las respuestas sean visibles al dueño o cuando `showResults` sea verdadero.

## Limitaciones del esqueleto

Es una base funcional, no una aplicación terminada:

- el código de sala debe comprobar unicidad antes de producción;
- el estado `closed` aún debe reforzarse en reglas;
- la presencia es básica;
- la moderación todavía no tiene interfaz;
- falta persistencia del panel de salas del facilitador.
