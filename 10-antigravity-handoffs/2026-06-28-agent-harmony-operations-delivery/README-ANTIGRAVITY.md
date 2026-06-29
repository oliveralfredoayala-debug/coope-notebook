# Antigravity handoff — Agent harmony, Operations and Delivery Manager

## Objective
Install the all-content Operations Orchestrator, strengthen Delivery Manager, and apply non-competition boundaries across the CoopeNotebook agent factory.

## Critical preservation rule
Do not rewrite the Claude artifact source HTML files.

This operation must not change:
- artifact text;
- tab names, count, order or numbering;
- bars, charts, values, formulas or thresholds;
- artifact calculations or interaction behavior.

## Install
Copy:
- `08-agentes/operations/`
- `08-agentes/delivery-manager/`
- `08-agentes/artifact-factory-boundary/`

Apply the scoped patch documents in:
- `10-antigravity-handoffs/2026-06-28-agent-harmony-operations-delivery/patches/`

Do not mechanically append every patch to every agent. Integrate each patch into the closest authority, README, manifest or contract in the repository.

## Required updates
1. Register Operations in the agent catalog.
2. Register Delivery Manager v2 as the final release authority.
3. Add the artifact coordination contract alongside the Claude artifact agents.
4. Mark the Claude three-agent flow as `artifacts-only`.
5. Update Global Navigation to distinguish standalone artifact shell from published shell.
6. Ensure Palette Architect remains canonical.
7. Make Language Integrity and Delivery audit mandatory stages.
8. Preserve domain orchestrators as internal owners.
9. Run the harmony checker.
10. Generate a change report and commit.

## Validation
```bash
python 10-antigravity-handoffs/2026-06-28-agent-harmony-operations-delivery/scripts/check_agent_harmony.py .
```

Expected result:
```text
PASS: required authorities and contracts found.
```

## Suggested branch and commit
```bash
git checkout -b feat/operations-delivery-agent-harmony
git add 08-agentes \
  10-antigravity-handoffs/2026-06-28-agent-harmony-operations-delivery
python 10-antigravity-handoffs/2026-06-28-agent-harmony-operations-delivery/scripts/check_agent_harmony.py .
git commit -m "feat(agents): add operations orchestration and strengthen delivery governance"
git push -u origin feat/operations-delivery-agent-harmony
```

## Delivery evidence Antigravity must produce
- changed-file list;
- applied-patch map;
- harmony-check output;
- confirmation that Claude artifact source files are byte-identical unless explicitly authorized;
- final commit hash.
