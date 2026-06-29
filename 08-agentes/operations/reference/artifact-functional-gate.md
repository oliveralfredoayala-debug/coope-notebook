# Artifact Functional Gate

This gate is mandatory immediately after the Artifact HTML Constructor and before palette, navigation or final visual integration.

## Purpose

Prevent the factory from spending visual and integration work on an artifact whose core behavior is wrong.

## Required checks

1. Boundary vectors at every legal threshold.
2. Values immediately below, at and above each threshold.
3. Empty and minimum inputs.
4. Monotonicity: adding one affiliate cannot reduce delegates.
5. Increment behavior: delegates increase only after a complete group.
6. Forward/inverse round-trip when bidirectional controls exist.
7. Sector totals equal the sum of sector calculations.
8. Displayed explanations agree with actual calculations.
9. No represented affiliate is silently added to present affiliates.
10. Exact test output attached to the operation ledger.

## Gate result

A single critical mismatch blocks palette, navigation and release work and returns the artifact to the HTML Constructor.
