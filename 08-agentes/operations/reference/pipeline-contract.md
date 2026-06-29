# Operations pipeline contract

Every stage must return:
```json
{
  "operation_id": "OP-YYYYMMDD-NNN",
  "stage_id": "string",
  "agent": "canonical-agent-id",
  "scope_completed": [],
  "files_changed": [],
  "protected_areas_untouched": [],
  "evidence": [],
  "warnings": [],
  "blockers": [],
  "handoff_to": "next-agent-id"
}
```

A handoff is invalid when it:
- omits the source instructions used;
- changes an upstream protected area without ownership;
- embeds a new top bar, footer or artifact drawer;
- uses legal purple outside verbatim legal content;
- claims final approval before Delivery Manager.
