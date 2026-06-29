# Antigravity handoff — First integral factory test

## Decision

`FAIL — QUARANTINE`

Do not publish or merge the supplied artifact as production-ready.

## What this package does

- preserves the submitted HTML unchanged;
- records its SHA-256;
- runs reproducible calculation vectors;
- audits legal verbatim, palette, navigation, accessibility and delivery gates;
- adds an early functional gate to Operations;
- strengthens the artifact release gate for Delivery Manager.

## Repository review

This handoff follows the current local repository convention available to the coordinator:

- `/08-agentes/`
- `/10-antigravity-handoffs/`

Before applying, Antigravity must compare these paths with the latest remote default branch and resolve newer upstream changes instead of overwriting them.

## Apply

```bash
git fetch origin
git checkout main
git pull --ff-only origin main
git checkout -b test/first-integral-delegates

unzip antigravity-first-integral-test-delegates.zip -d /tmp/coopenotebook-test
rsync -av /tmp/coopenotebook-test/08-agentes/ 08-agentes/
rsync -av /tmp/coopenotebook-test/10-antigravity-handoffs/ 10-antigravity-handoffs/

python 10-antigravity-handoffs/2026-06-28-first-integral-test-delegates/tests/test_delegate_calculation.py
```

The test is expected to exit non-zero until the Artifact HTML Constructor fixes the formula.

## Commit suggested

```bash
git add 08-agentes/operations/reference/artifact-functional-gate.md \
        08-agentes/delivery-manager/reference/artifact-release-gate-v2.md \
        10-antigravity-handoffs/2026-06-28-first-integral-test-delegates

git commit -m "test(artifacts): run first integral delegate artifact gate"
git push -u origin test/first-integral-delegates
```

## Required follow-up branch

After the failed test is committed as evidence, create a separate fix branch owned by the artifact agents. Do not edit the quarantined source file in this handoff.
