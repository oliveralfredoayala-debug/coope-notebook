#!/usr/bin/env python3
"""Validate CoopeNotebook capsule guardrails v2.1."""

from __future__ import annotations
import argparse, json, re, shutil, subprocess, sys, tempfile
from pathlib import Path

def has(pattern: str, text: str, flags: int = re.I | re.S) -> bool:
    return re.search(pattern, text, flags) is not None

def add(checks: dict, errors: list, key: str, passed: bool, message: str) -> None:
    checks[key] = "PASS" if passed else "FAIL"
    if not passed:
        errors.append(message)

def extract_json_constant(text: str, name: str):
    marker = re.search(rf"\bconst\s+{re.escape(name)}\s*=\s*", text)
    if not marker:
        return None
    start = marker.end()
    if start >= len(text) or text[start] not in "[{":
        return None
    opening = text[start]
    closing = "]" if opening == "[" else "}"
    depth = 0
    in_string = False
    escaped = False
    for index in range(start, len(text)):
        char = text[index]
        if in_string:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == '"':
                in_string = False
            continue
        if char == '"':
            in_string = True
        elif char == opening:
            depth += 1
        elif char == closing:
            depth -= 1
            if depth == 0:
                try:
                    return json.loads(text[start:index + 1])
                except json.JSONDecodeError:
                    return None
    return None

def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("html", type=Path)
    parser.add_argument("--package-dir", type=Path)
    parser.add_argument("--report", type=Path)
    args = parser.parse_args()

    if not args.html.is_file():
        print(f"Missing HTML: {args.html}", file=sys.stderr)
        return 2

    text = args.html.read_text(encoding="utf-8", errors="replace")
    checks, errors, warnings = {}, [], []

    # Shell and navigation
    add(checks, errors, "flat_navigation",
        not has(r"\b(inner[_-]?tabs?|subtabs?|nested[_-]?navigation|carousel[_-]?navigation)\b", text),
        "Nested navigation marker detected.")
    add(checks, errors, "presentation_toggle_exists",
        has(r'id=["\']modeButton["\']|class=["\'][^"\']*presentation-toggle', text),
        "Presentation toggle missing.")
    add(checks, errors, "toggle_bottom_right",
        has(r"\.presentation-toggle\s*\{[^}]*position\s*:\s*fixed[^}]*right\s*:[^;}]+[^}]*bottom\s*:", text),
        "Presentation toggle is not fixed at bottom-right.")
    header = re.search(r"<header\b.*?</header>", text, re.I | re.S)
    add(checks, errors, "toggle_not_in_header",
        not (header and re.search(r"modeButton|presentation-toggle", header.group(0), re.I)),
        "Presentation toggle found inside header.")
    add(checks, errors, "canonical_presentation_controls",
        has(r"presentation-bar", text) and has(r"data-step=[\"']-1", text) and has(r"data-step=[\"']1", text),
        "Canonical presentation footer controls missing.")

    # Opening
    add(checks, errors, "opening_white",
        has(r"(opening|intro-hero)[^{]*\{[^}]*background\s*:\s*(#fff|white|rgba\(255,\s*255,\s*255)", text),
        "Opening does not declare a white background.")
    add(checks, errors, "jester_large_right",
        has(r"(opening-jester|intro-hero-jester)[^{]*\{[^}]*right\s*:", text),
        "Jester is not positioned on the right.")
    add(checks, errors, "jester_ground",
        has(r"(opening-ground|intro-hero-ground)", text),
        "Jester ground/base missing.")
    add(checks, errors, "thought_bubble",
        has(r"(thought|intro-hero-bubble)", text),
        "Thought bubble missing.")

    # Legal base rules
    legal_present = has(r"\blegal\b", text)
    capsule = extract_json_constant(text, "CAPSULE")
    story = extract_json_constant(text, "PRESENTATION_STORY")

    if legal_present:
        add(checks, errors, "legal_context_meta",
            has(r'coopenotebook-legal-flow["\']?\s+content=["\']contextual-pairs', text)
            or has(r"legal-contextual-flow|renderContentSegment|renderContextualFlow", text),
            "Contextual legal-flow marker missing.")
        add(checks, errors, "legal_closed_default",
            has(r"aria-expanded=[\"']false[\"']", text)
            and not has(r"class=[\"'][^\"']*legal\s+open", text),
            "Legal accordion is not closed by default.")
        add(checks, errors, "legal_lilac",
            has(r"(lilac|lila|--lila|--lilac|#72549a|#7b5aa6|#f8f3fc|#f7f2fb)", text),
            "Lilac legal token missing.")
        add(checks, errors, "legal_verbatim",
            has(r"(verbatim|Texto legal literal|Texto literal)", text),
            "Legal verbatim marker missing.")
        add(checks, errors, "legal_source_visible",
            has(r"(Ley de Cooperativas|Reglamento de la Ley|legal-source|legal-src)", text),
            "Legal source identification missing.")

        # New blocking contextual-flow checks
        add(checks, errors, "no_tab_global_legal_renderer",
            not has(r"(legalBlocks|renderLegal)\s*\(\s*tab\.legalRefs|renderLegal\s*\(\s*tab\s*\)", text),
            "Tab-global legal stack renderer detected.")

        contextual_model_ok = True
        contextual_findings = []
        if isinstance(capsule, dict):
            for tab_index, tab in enumerate(capsule.get("tabs", [])):
                tab_level_refs = tab.get("legalRefs") or tab.get("legal_refs") or []
                segments = tab.get("segments") or tab.get("contentFlow") or []
                has_segment_legal = any(
                    (segment.get("legalRefs") or segment.get("legal_refs"))
                    for segment in segments if isinstance(segment, dict)
                )
                if tab_level_refs:
                    contextual_model_ok = False
                    contextual_findings.append(
                        f"tab {tab_index} uses tab-level legalRefs instead of contextual segments"
                    )
                if has_segment_legal:
                    for segment in segments:
                        refs = segment.get("legalRefs") or segment.get("legal_refs") or []
                        if refs and not segment.get("theory"):
                            contextual_model_ok = False
                            contextual_findings.append(
                                f"tab {tab_index} segment {segment.get('id')} has law without immediate theory"
                            )
        else:
            contextual_model_ok = False
            contextual_findings.append("CAPSULE JSON constant could not be parsed")

        add(checks, errors, "legal_contextual_segments",
            contextual_model_ok,
            "Contextual legal segment model failed: " + "; ".join(contextual_findings))

        adjacency_ok = True
        adjacency_findings = []
        if isinstance(story, list):
            for index, scene in enumerate(story):
                if scene.get("kind") != "legal":
                    continue
                segment = scene.get("segment")
                if segment is None:
                    adjacency_ok = False
                    adjacency_findings.append(f"legal scene {index} has no segment")
                    continue
                if index + 1 >= len(story):
                    adjacency_ok = False
                    adjacency_findings.append(f"legal scene {index} has no following theory scene")
                    continue
                next_scene = story[index + 1]
                if not (
                    next_scene.get("kind") == "theory"
                    and next_scene.get("tab") == scene.get("tab")
                    and next_scene.get("segment") == segment
                ):
                    adjacency_ok = False
                    adjacency_findings.append(
                        f"legal scene {index} is not followed by theory for tab={scene.get('tab')} segment={segment}"
                    )
        else:
            adjacency_ok = False
            adjacency_findings.append("PRESENTATION_STORY JSON constant could not be parsed")

        add(checks, errors, "legal_theory_scene_adjacency",
            adjacency_ok,
            "Presentation legal/theory adjacency failed: " + "; ".join(adjacency_findings))
    else:
        checks["legal_rules"] = "N/A"

    # Theory
    add(checks, errors, "theory_accordion_reading",
        has(r"(accordion|acc-item|acc-q)", text),
        "Reading theory accordion missing.")
    add(checks, errors, "theory_accordion_presentation",
        has(r"(present-theory-accordion|present-theory-item|presentationAccordion)", text),
        "Presentation theory accordion missing.")
    for name, pattern in {
        "phrase-chip": r"\bphrase-chip\b",
        "indexed-editorial-list": r"\bindexed-editorial-list\b",
        "theory-card": r"\b(theory-card|present-theory-card)\b",
    }.items():
        add(checks, errors, f"forbidden_{name}", not has(pattern, text),
            f"Forbidden theoretical pattern detected: {name}.")

    # Presentation
    add(checks, errors, "independent_presentation_renderer",
        has(r"(PRESENTATION_STORY|renderPresentation\(|presentationSceneCount)", text),
        "Independent presentation story renderer missing.")
    support_patterns = [
        r"timeline", r"process", r"comparison|transform", r"ladder",
        r"orbit", r"layers?", r"scenario", r"annotat", r"relation"
    ]
    support_count = sum(1 for pattern in support_patterns if has(pattern, text))
    add(checks, errors, "visual_support_arsenal",
        support_count >= 2,
        "Fewer than two visual-support families detected.")
    add(checks, errors, "light_presentation_palette",
        has(r"body\.present[^}]*background\s*:\s*(#fff|#fb|#fc|white|rgba\(255)", text)
        or has(r"#edf5f0|#fbfcfa", text),
        "Light presentation palette not detected.")
    add(checks, errors, "reduced_motion",
        has(r"prefers-reduced-motion", text),
        "prefers-reduced-motion rule missing.")
    add(checks, errors, "scroll_allowed",
        has(r"overflow\s*:\s*(auto|scroll)", text),
        "No scroll-enabled region detected.")

    # JavaScript syntax
    node = shutil.which("node")
    if node:
        scripts = re.findall(r"<script[^>]*>(.*?)</script>", text, re.I | re.S)
        with tempfile.NamedTemporaryFile("w", suffix=".js", encoding="utf-8", delete=False) as tmp:
            tmp.write("\n".join(scripts))
            temp_name = tmp.name
        proc = subprocess.run([node, "--check", temp_name], capture_output=True, text=True)
        Path(temp_name).unlink(missing_ok=True)
        add(checks, errors, "javascript_syntax", proc.returncode == 0,
            "JavaScript syntax failed: " + proc.stderr.strip())
    else:
        checks["javascript_syntax"] = "SKIP"
        warnings.append("node not available.")

    # Package artifacts
    if args.package_dir:
        required = [
            ("preview", ["*preview*.png"]),
            ("qa", ["QA*.md", "*qa*.md"]),
            ("readme", ["README-ANTIGRAVITY.md"]),
            ("scene-map", ["presentation-scene-map.json", "PRESENTATION-SCENE-MAP.md"]),
            ("guardrail-report", ["guardrail-report.json", "GUARDRAIL-REPORT.json"]),
        ]
        for key, globs in required:
            found = any(any(args.package_dir.glob(pattern)) for pattern in globs)
            add(checks, errors, f"package_{key}", found, f"Package artifact missing: {key}.")

    report = {
        "html": str(args.html),
        "status": "PASS" if not errors else "FAIL",
        "checks": checks,
        "blocking_findings": errors,
        "warnings": warnings,
    }
    out = args.report or args.html.with_name("guardrail-report.json")
    out.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(report, ensure_ascii=False, indent=2))
    return 0 if not errors else 1

if __name__ == "__main__":
    raise SystemExit(main())
