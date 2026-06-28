from pathlib import Path
import sys, yaml

# Root is two levels up from scripts/ inside 01-agentes-y-sistema
root = Path(__file__).resolve().parents[2]
required = [
    "01-agentes-y-sistema/START-HERE.md",
    "01-agentes-y-sistema/AGENTS.md",
    "01-agentes-y-sistema/governance/precedence-policy.md",
    "01-agentes-y-sistema/governance/agent-lifecycle.md",
    "01-agentes-y-sistema/governance/replacements-log.yaml",
    "01-agentes-y-sistema/governance/content-inventory.yaml",
    "01-agentes-y-sistema/agents/README.md",
    "01-agentes-y-sistema/agents/registry.yaml",
    "02-base-de-conocimiento/knowledge/theory-pool/README.md",
    "02-base-de-conocimiento/knowledge/theory-pool/index.yaml",
    "02-base-de-conocimiento/knowledge/legal-library/README.md",
    "02-base-de-conocimiento/knowledge/legal-library/index.yaml",
    "01-agentes-y-sistema/docs/content-taxonomy.md",
    "01-agentes-y-sistema/docs/operating-model.md",
    "01-agentes-y-sistema/docs/repository-map.md",
    "01-agentes-y-sistema/platforms/openai/READ-ME-FIRST.md",
    "01-agentes-y-sistema/platforms/claude/READ-ME-FIRST.md",
    "01-agentes-y-sistema/platforms/antigravity/READ-ME-FIRST.md",
]
errors = [f"Falta {p}" for p in required if not (root / p).exists()]

try:
    registry_path = root / "01-agentes-y-sistema/agents/registry.yaml"
    data = yaml.safe_load(registry_path.read_text(encoding="utf-8"))
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
        # Prepend the high level directory prefix
        if path:
            full_path = root / "01-agentes-y-sistema" / path
            if not full_path.exists():
                errors.append(f"Ruta inexistente para {aid}: {path} (buscado en {full_path})")
except Exception as exc:
    errors.append(f"No se pudo leer registry.yaml: {exc}")

if errors:
    print("\n".join(errors))
    sys.exit(1)

print("Repositorio valido.")
