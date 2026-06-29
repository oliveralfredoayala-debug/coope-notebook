# Contrato del shell global CoopeNotebook

## Capas

1. Top bar global.
2. Menú lateral izquierdo del contenido.
3. Área principal.
4. Drawer derecho de artefactos.
5. Footer mínimo.

## Precedencia

El agente global de navegación decide la implementación de estas capas.

Los agentes de dominio deciden:
- contenido;
- pedagogía;
- legalidad;
- cálculos;
- controles internos;
- visualizaciones internas.

## Regla de resolución de conflictos

Cuando un HTML ya trae menús:
1. conservar la semántica de sus secciones;
2. extraer labels e IDs;
3. eliminar el shell duplicado;
4. entregar los datos al menú global;
5. no mantener dos top bars o dos footers.
