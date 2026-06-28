#!/usr/bin/env python3
"""Validate UUID uniqueness, publication states and logical duplicates."""
# agent_uuid: 0b69fb87-c8c6-467b-9d6b-5828028253db
import json, sys, uuid
from pathlib import Path

FORBIDDEN = {"coming soon", "pronto", "proximamente", "próximamente"}

def walk(obj, path="$"):
    if isinstance(obj, dict):
        yield obj, path
        for k, v in obj.items():
            yield from walk(v, f"{path}.{k}")
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            yield from walk(v, f"{path}[{i}]")

def main():
    if len(sys.argv) != 3:
        raise SystemExit("Uso: validate_catalog.py content-catalog.json uuid-registry.json")
    catalog = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
    registry = json.loads(Path(sys.argv[2]).read_text(encoding="utf-8"))
    errors, seen = [], {}
    for node, path in walk(catalog):
        for key in ("uuid","catalogUuid","agentUuid","packageUuid"):
            value=node.get(key)
            if value:
                try: uuid.UUID(value)
                except ValueError: errors.append(f"UUID inválido {value} en {path}")
                if value in seen: errors.append(f"UUID duplicado {value}: {seen[value]} y {path}")
                else: seen[value]=path
        status=str(node.get("status","")).casefold()
        title=str(node.get("title",node.get("label",""))).casefold()
        if status in FORBIDDEN or any(x in title for x in FORBIDDEN):
            errors.append(f"Placeholder prohibido en {path}")
    reg_ids=[e.get("uuid") for e in registry.get("entries",[])]
    if len(reg_ids) != len(set(reg_ids)): errors.append("UUID duplicado en registry")
    if errors:
        print("\n".join("ERROR: "+e for e in errors))
        return 1
    print(f"OK: {len(seen)} UUIDs de catálogo y {len(reg_ids)} entradas de registro.")
    return 0
if __name__ == "__main__":
    raise SystemExit(main())
