#!/usr/bin/env python3
from pathlib import Path
import sys, re

root = Path(sys.argv[1] if len(sys.argv) > 1 else ".")
checks = {
    "operations agent": list(root.glob("08-agentes/operations/**/operations.md")),
    "delivery manager": list(root.glob("08-agentes/delivery-manager/**/delivery-manager.md")),
    "artifact boundary": list(root.glob("08-agentes/artifact-factory-boundary/**/COORDINATION-CONTRACT.md")),
    "global navigation": list(root.glob("08-agentes/global-navigation/**")),
    "palette architect": list(root.glob("08-agentes/color-palette-architect/**")),
}
missing=[name for name,paths in checks.items() if not paths]
if missing:
    print("FAIL: missing required authorities:", ", ".join(missing))
    sys.exit(1)

texts=[]
for p in root.glob("08-agentes/**/*"):
    if p.is_file() and p.suffix.lower() in {".md",".json",".txt"}:
        try: texts.append((p,p.read_text(encoding="utf-8")))
        except Exception: pass

problems=[]
for p,t in texts:
    low=t.lower()
    # flag only strong problematic universal claims outside artifact boundary
    if "three-agent" in low and "artifact" not in low:
        problems.append(f"{p}: three-agent flow lacks artifact scope")
    if re.search(r'purple|morado|lila', low) and re.search(r'button|botón|navigation|navegación', low):
        if "must not" not in low and "no puede" not in low and "exclus" not in low:
            problems.append(f"{p}: inspect possible non-legal purple use")

if problems:
    print("WARN: manual review required")
    for x in problems: print(" -",x)
else:
    print("PASS: required authorities and contracts found.")
