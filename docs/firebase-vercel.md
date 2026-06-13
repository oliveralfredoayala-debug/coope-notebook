# Base Vercel + Firebase para actividades en vivo

Esta base usa Vercel para servir CoopNotebook y Firebase para las salas en tiempo real.

## 1. Crear el proyecto en Firebase

1. Crea un proyecto en Firebase.
2. Activa **Authentication** con el proveedor **Anonymous**.
3. Activa **Cloud Firestore**.
4. Publica las reglas de `firebase.rules`.

## 2. Configurar variables en Vercel

En el proyecto de Vercel, agrega estas variables de entorno:

```text
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
```

La ruta `/api/firebase-config` lee esas variables y entrega al navegador solo la configuracion publica de Firebase.

## 3. Probar la herramienta

La herramienta queda en:

```text
/tools/en-vivo/sala.html
```

Si la pruebas con un servidor local sencillo, la ruta `/api/firebase-config` de Vercel no existe. Para probar en tu computadora:

1. Copia `public/firebase-config.local.example.js`.
2. Renombra la copia como `public/firebase-config.local.js`.
3. Pega ahi la configuracion web de Firebase.

Ese archivo esta ignorado por git para evitar publicar configuracion local por accidente.

Flujo recomendado:

1. El facilitador crea una sala con pregunta y opciones.
2. Comparte el codigo o el enlace generado.
3. Cada participante entra, elige una respuesta y la envia.
4. El panel del facilitador muestra el conteo en tiempo real.

## 4. Siguiente capa recomendada

Para sesiones reales con datos sensibles conviene agregar:

- Firebase App Check para reducir uso indebido desde otros dominios.
- Un panel privado de facilitadores con cuentas verificadas.
- Exportacion CSV/XLSX de respuestas.
- Tipos adicionales de actividad: nube de palabras, escala, ranking y pregunta abierta.
