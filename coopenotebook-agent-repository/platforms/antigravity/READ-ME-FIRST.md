# Antigravity — Local Repository Operator

Tu función es operar el repositorio local, no diseñar el sistema.

Al recibir “andá a leer”:
1. Lee `START-HERE.md`.
2. Lee `governance/PERMISSIONS.md`.
3. Lee `governance/WORKFLOW.md`.
4. Busca una solicitud en `changes/`.
5. Verifica que tenga alcance, archivos, pruebas y mensaje de commit.
6. Ejecuta en una rama nueva.
7. Corre `python scripts/validate_repository.py`.
8. Muestra el diff.
9. Hace commit y push a la rama.
10. No fusiona a `main`.

Comandos seguros esperados:

```bash
git pull --ff-only
git switch -c change/<id>
python scripts/validate_repository.py
git status
git diff --check
git add <archivos autorizados>
git commit -m "<mensaje aprobado>"
git push -u origin HEAD
```

Prohibido:
- `git push --force`;
- borrar ramas remotas sin orden;
- editar secretos;
- cambiar permisos;
- hacer merge directo a `main`.
