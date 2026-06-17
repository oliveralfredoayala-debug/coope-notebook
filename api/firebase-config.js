const requiredKeys = [
  "FIREBASE_API_KEY",
  "FIREBASE_AUTH_DOMAIN",
  "FIREBASE_PROJECT_ID",
  "FIREBASE_STORAGE_BUCKET",
  "FIREBASE_MESSAGING_SENDER_ID",
  "FIREBASE_APP_ID",
];

const fallbackConfig = {
  apiKey: "AIzaSyDruiHzUcbd_qgcsxY0RRd-JVeKUCl6jck",
  authDomain: "cooperativismo-app.firebaseapp.com",
  projectId: "cooperativismo-app",
  storageBucket: "cooperativismo-app.firebasestorage.app",
  messagingSenderId: "569282139428",
  appId: "1:569282139428:web:82393ac3774e2761140fb1",
  measurementId: "G-WP9B0WTCLP",
};

module.exports = function handler(request, response) {
  response.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
  response.setHeader("Content-Type", "application/json; charset=utf-8");

  const missing = requiredKeys.filter((key) => !process.env[key]);
  if (missing.length) {
    response.end(JSON.stringify({ ok: true, config: fallbackConfig, source: "fallback" }));
    return;
  }

  response.end(JSON.stringify({
    ok: true,
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
    },
  }));
};
