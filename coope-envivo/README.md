# CoopeEnVivo

Esqueleto de una sala interactiva para talleres:

- **Next.js App Router**
- **Vercel** para el frontend
- **Firebase Authentication**
- **Cloud Firestore** con listeners en tiempo real
- acceso anónimo para participantes
- correo y contraseña para facilitadores

## Lo que ya incluye

- página inicial;
- acceso del facilitador;
- creación de sala y código;
- creador básico de actividades;
- actividad activa en tiempo real;
- ingreso de participantes sin cuenta;
- opción única;
- selección múltiple;
- escala;
- palabra breve;
- respuesta abierta;
- vista de proyección;
- mostrar u ocultar resultados;
- reglas iniciales de Firestore;
- índice requerido;
- workflow de GitHub para reglas.

## 1. Crear o usar un proyecto Firebase

En Firebase Console:

1. Crea o abre un proyecto.
2. Añade una aplicación web.
3. Copia la configuración web.
4. Activa **Authentication → Email/Password**.
5. Activa **Authentication → Anonymous**.
6. Crea Cloud Firestore.
7. No dejes Firestore permanentemente en modo de prueba.

## 2. Variables locales

```bash
cp .env.example .env.local
```

Completa todas las variables `NEXT_PUBLIC_FIREBASE_*`.

## 3. Instalar

Requiere Node.js 20.9 o superior.

```bash
npm install
npm run dev
```

## 4. Reglas e índices

Copia `.firebaserc.example` a `.firebaserc` y reemplaza el project ID.

```bash
npx firebase login
npx firebase use TU_PROJECT_ID
npm run firebase:deploy:rules
```

## 5. Vercel

1. Sube el repositorio a GitHub.
2. Importa ese repositorio en Vercel.
3. Añade las mismas variables de `.env.local`.
4. Define `NEXT_PUBLIC_APP_URL` con el dominio final.
5. Despliega.

El frontend queda en Vercel; Authentication y Firestore siguen en Firebase.

## 6. GitHub y Firebase

El workflow incluido puede publicar reglas e índices al hacer push a `main`.

Crea estos secretos en GitHub:

- `FIREBASE_PROJECT_ID`
- `FIREBASE_SERVICE_ACCOUNT`

`FIREBASE_SERVICE_ACCOUNT` debe contener el JSON completo de una cuenta de servicio con permisos mínimos para desplegar reglas e índices.

## Modelo de datos

```text
rooms/{roomId}
  code
  title
  ownerUid
  publicJoin
  activeActivityId
  showResults
  status

rooms/{roomId}/participants/{uid}
  uid
  displayName
  joinedAt
  lastSeenAt

rooms/{roomId}/activities/{activityId}
  title
  prompt
  type
  options
  status
  order

rooms/{roomId}/activities/{activityId}/responses/{uid}
  uid
  activityId
  displayName
  value
```

## Decisiones intencionales

- Una respuesta por persona y actividad; puede modificarse mientras la sala siga abierta.
- Los participantes usan autenticación anónima.
- El facilitador usa correo y contraseña.
- Las respuestas abiertas no se muestran hasta que el facilitador activa resultados.
- No se bloquea una sala por falta de respuestas.
- No se recopilan datos personales obligatorios.

## Antes de producción

Antigravity debe completar y probar:

- moderación individual de respuestas abiertas;
- conteo de participantes activos con heartbeat;
- cierre real de actividades en reglas;
- comprobación de códigos duplicados;
- exportación CSV/PDF;
- QR;
- recuperación de salas anteriores;
- editor y reordenamiento de actividades;
- protección adicional con Firebase App Check;
- pruebas con 30–100 dispositivos;
- manejo de costos y límites;
- auditoría de accesibilidad;
- política de privacidad mínima.
