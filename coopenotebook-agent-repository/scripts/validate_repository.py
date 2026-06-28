from pathlib import Path
import sys, yaml

root = Path(__file__).resolve().parents[1]
required = [
    "START-HERE.md",
    "AGENTS.md",
    "governance/AI-ROLES.md",
    "governance/PERMISSIONS.md",
    "governance/WORKFLOW.md",
    "governance/agent-registry.yaml",
    "governance/agent-lifecycle.md",
    "governance/precedence-policy.md",
    "governance/content-inventory.yaml",
    "governance/replacements-log.yaml",
    "docs/content-taxonomy.md",
    "docs/operating-model.md",
    "platforms/openai/READ-ME-FIRST.md",
    "platforms/claude/READ-ME-FIRST.md",
    "platforms/antigravity/READ-ME-FIRST.md",
]
errors = [f"Falta {p}" for p in required if not (root / p).exists()]

try:
    data = yaml.safe_load((root / "governance/agent-registry.yaml").read_text(encoding="utf-8"))
    ids = set()
    for agent in data.get("agents", []):
        aid = agent.get("id")
        if not aid:
            errors.append("Agente sin id")
            continue
        if aid in ids:
            errors.append(f"ID duplicado: {aid}")
        ids.add(aid)
        path = agent.get("path")
        if path and not (root / path).exists():
            errors.append(f"Ruta inexistente para {aid}: {path}")
except Exception as exc:
    errors.append(f"No se pudo leer governance/agent-registry.yaml: {exc}")

if errors:
    print("\n".join(errors))
    sys.exit(1)

print("Repositorio valido.")
