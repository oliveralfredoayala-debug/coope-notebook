# 01 — Flujos de Trabajo Simplificados

Este documento define el flujo principal de gestión de contenidos y sincronización en CoopeNotebook.

---

## 1. Ciclo de Gestión de Contenido

```mermaid
sequenceDiagram
    participant Dir as Director (Oliver)
    participant Arq as 01 Arq. Teoría
    participant GL as 09 Gestor GDrive
    participant Repo as 07 Repositorio

    Dir->>Arq: Solicita o actualiza un tema o cápsula
    Arq->>Arq: Diseña estructura pedagógica y verifica artículos legales verbatim
    Arq->>GL: Genera/actualiza los archivos HTML e índices en la carpeta local
    GL->>GL: Sincroniza automáticamente los archivos con Google Drive (nube)
    GL->>Repo: Valida y realiza commit/push al repositorio remoto
```

---

## 2. Descripción de Pasos

1. **Definición y Estructura (Arquitecto de Teoría)**:
   - Se definen las cápsulas y tabs de acuerdo con la pedagogía y la legislación de cooperativas.
   - Todo el contenido legal se escribe verbatim y se asocia a su ID correspondiente en `kb-index.json`.

2. **Sincronización Local y Google Drive (Gestor GDrive)**:
   - Los archivos viven y se editan en el directorio de trabajo local sincronizado con Google Drive (por ejemplo, dentro de `G:\My Drive\CHC\04_Aplicaciones_Desarrollo\coope-notebook`).
   - Los cambios guardados se suben automáticamente a la nube por medio de Google Drive para Escritorio (Google Drive for Desktop).

3. **Control de Versiones y Despliegue (Repositorio)**:
   - Se realiza el control de versiones con Git en el mismo directorio.
   - El push a GitHub dispara el despliegue automático en Vercel para producción.
