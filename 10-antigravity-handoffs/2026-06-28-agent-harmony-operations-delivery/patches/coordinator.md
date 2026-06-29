# Patch: Coordinator
- Register Operations as the only cross-factory pipeline authority.
- Coordinator continues to classify, name, catalog and assign IDs.
- Coordinator must not decide internal artifact mechanics or final release.
- Every new job emits `content_type`, `applicable_agents`, `protected_scope` and `operations_required: true`.
- Delivery Manager is mandatory before publication.
