#!/usr/bin/env python3
"""Detecta posibles shells globales duplicados en HTML producido por agentes de dominio."""
from pathlib import Path
import re, sys

PATTERNS = {
    "topbar": r'class=["\'][^"\']*(topbar|global-header|site-header)[^"\']*["\']',
    "global footer": r'class=["\'][^"\']*(global-footer|site-footer)[^"\']*["\']',
    "artifact drawer": r'class=["\'][^"\']*(artifact-drawer|drawer-artefactos)[^"\']*["\']',
    "global search": r'(Buscar en CoopeNotebook|global-search)',
}
bad = 0
for arg in sys.argv[1:]:
    p=Path(arg)
    text=p.read_text(encoding="utf-8",errors="replace")
    found=[name for name,pat in PATTERNS.items() if re.search(pat,text,re.I)]
    if found:
        bad += 1
        print(f"{p}: posible competencia con Global Navigation -> {', '.join(found)}")
sys.exit(1 if bad else 0)
