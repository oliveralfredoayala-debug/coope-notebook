# Ciclo de Vida de los Agentes

Regula cómo se crean, modifican y retiran los agentes en el repositorio.

## 1. Creación de Agentes
- Un agente nuevo sólo puede crearse si tiene una misión recurrente definida, entradas y salidas claras, y un dueño de plataforma (`openai`, `claude` o `antigravity`).
- Todo agente debe contar con un archivo de contrato en `agents/` detallando su misión y límites.

## 2. Retiro de Agentes (Jubilación)
- Al retirar un agente, no se elimina su historial. Se le marca como `deprecated` en el registro y se apunta a su sucesor en `governance/replacements-log.yaml`.
