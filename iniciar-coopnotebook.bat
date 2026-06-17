@echo off
title CoopNotebook local
cd /d C:\chc-notebook\public
echo.
echo CoopNotebook esta iniciando en:
echo http://127.0.0.1:8788/tools/en-vivo/sala.html
echo.
echo Deja esta ventana abierta mientras uses la pagina.
echo Para cerrar el servidor, cierra esta ventana.
echo.
start "" "http://127.0.0.1:8788/tools/en-vivo/sala.html"
python -m http.server 8788 --bind 127.0.0.1
pause
