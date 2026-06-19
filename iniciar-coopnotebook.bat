@echo off
title CoopNotebook local
cd /d C:\chc-notebook
echo.
echo CoopNotebook esta iniciando...
echo.
echo Deja esta ventana abierta mientras uses la pagina.
echo Para cerrar el servidor, cierra esta ventana.
echo.
start "" "http://127.0.0.1:8788/index.html"
python server.py
pause
