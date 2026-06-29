# Artifact Factory Coordination Contract

## Scope
This contract applies **only to CoopeNotebook artifacts** produced by the Claude three-agent flow.

It does not redefine capsules, P2L activities, team-work resources, legal-reference documents or the global site shell.

## Protected authority of the artifact factory
The artifact factory keeps ownership of:
- artifact purpose and pedagogical plan;
- text and legal-pedagogical content;
- tab names, count, order and numbering;
- calculations, formulas, thresholds and numeric behavior;
- bars, charts, indicators and comparison logic;
- input/output behavior and internal interactions;
- the standalone artifact implementation before site-shell integration.

No external agent may rewrite, simplify, reorder or “improve” those areas.

## Canonical cross-cutting authorities
After the artifact factory has produced its output:
- Language Integrity audits spelling, grammar and character integrity while preserving meaning and verbatim law.
- Legal Verbatim authority audits source fidelity.
- Palette Architect controls semantic color.
- Global Navigation controls the site shell: top bar, left-tabs rendering contract, right artifact drawer and footer.
- Accessibility/Technical QA audits implementation without changing approved behavior.
- Delivery Manager audits the complete instruction set.

## Tabs boundary
Artifact Agent 1 decides tab labels, order and numbering.
Artifact Agent 3 may implement a standalone preview of those tabs.
When integrated into the CoopeNotebook site, Global Navigation renders the canonical left-side tab interface using the exact tab data supplied by the artifact factory.

This is not permission to rename, reorder, merge or delete tabs.

## Design precedence
Existing canonical CoopeNotebook agents prevail for:
- visual system;
- semantic colors;
- typography and spacing;
- orthography and language integrity;
- accessibility;
- global navigation.

They may change presentation but not artifact meaning or behavior.

## Legal purple
Purple/lilac is reserved exclusively for 100% verbatim legal content.
Article identifiers and enumeration markers may be bolded visually, without changing the source text.
No artifact-specific style may use purple for buttons, tabs, metrics, charts, branding or decoration.

## Handoff required from artifact factory
```json
{
  "content_type": "artifact",
  "title": "string",
  "area_short_name": "Artefactos",
  "tabs": [
    {"id":"stable-id","number":"00","label":"exact approved label"}
  ],
  "main_html": "<main>artifact content only</main>",
  "standalone_html": "optional original artifact file",
  "protected_scope": [
    "text",
    "tab labels/order/numbering",
    "calculations",
    "bars/charts",
    "interaction behavior"
  ],
  "context_actions": [],
  "requires_full_width": false
}
```

## Non-competition rule
The artifact factory may provide a standalone shell for preview/export, but that shell is not the canonical site shell. During publication, it yields global top bar, artifact drawer and footer to Global Navigation.
