# Contrato · Sandbox de sala en vivo

## Propósito

Permitir que facilitación, autoría y QA vean exactamente cómo está configurado el trabajo en equipo mientras el recurso vive en una sala en vivo.

Sandbox es un inspector de solo lectura. No es una copia del contenido, un editor ni un modo estudiante.

## Botón

- Etiqueta visible: `Sandbox`.
- Ubicación: barra superior, junto a controles de salida.
- Estado accesible mediante `aria-pressed`.
- Abre panel lateral o modal con cierre explícito, Escape y retorno de foco.

## Configuración canónica

```js
window.COOPE_TEAM_CONFIG = {
  schema: "coopenotebook.team-work/1.2",
  activityId: "...",
  activityType: "team-work",
  liveRoom: true,
  content: {
    root: "lnl",
    key: "...",
    strategy: "invoke",
    duplicate: false
  },
  legal: {
    enabled: false,
    profile: "balanced",
    visualSystem: "kb-purple"
  },
  agents: [],
  capabilities: {
    localSave: true,
    pdf: true,
    powerpoint: true,
    checklist: true
  }
};
```

## Evocación desde `lnl`

- `root: "lnl"` identifica la carpeta lógica de recursos de sala.
- `key` identifica el recurso o cápsula solicitado.
- `strategy: "invoke"` obliga a resolver el contenido en tiempo de ejecución.
- `duplicate: false` prohíbe mantener una segunda copia del contenido en el trabajo práctico.
- El resolver pertenece al shell o a la sala en vivo.
- Un fallback puede explicar que el recurso no está disponible, pero no debe incluir una copia silenciosa del contenido.

## Información visible

Sandbox muestra:

- schema, activityId y activityType;
- estado de sala en vivo;
- root, key, strategy y duplicate;
- perfil y sistema visual jurídico;
- agents activos;
- capacidades habilitadas;
- número de etapas, campos persistibles y bloques legales detectados;
- errores o contradicciones de configuración.

## Diagnósticos bloqueantes

- `duplicate !== false`;
- `strategy !== "invoke"`;
- root distinto de `lnl` sin excepción documentada;
- contenido legal con sistema visual distinto de `kb-purple`;
- modo jurídico desactivado cuando existen bloques legales;
- agent jurídico ausente cuando existen bloques legales;
- identificador o key vacío en producción.

## Privacidad y alcance

Sandbox no muestra respuestas personales completas ni secretos de infraestructura. Puede mostrar conteos, claves lógicas y estados técnicos.
