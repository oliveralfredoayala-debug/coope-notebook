# Artifact Release Gate v2

The Delivery Manager must independently verify the artifact using evidence, not visual inspection alone.

## Mandatory evidence

- source hash before and after each protected-scope stage;
- functional boundary vectors;
- round-trip tests for bidirectional controls;
- legal verbatim comparison;
- palette semantic scan;
- navigation ownership scan;
- keyboard and accessibility checklist;
- requirement-to-evidence matrix.

## Automatic FAIL conditions

- calculation differs from the approved rule;
- inverse and direct controls disagree;
- purple/lilac contains paraphrase or interpretation;
- protected text, numbers, bars or behavior changed without owner approval;
- global shell is duplicated or missing at publication;
- legal claims lack traceable authority;
- a required test is claimed but no output is attached.

The Delivery Manager never repairs these defects. It routes them through Operations to the owning agent.
