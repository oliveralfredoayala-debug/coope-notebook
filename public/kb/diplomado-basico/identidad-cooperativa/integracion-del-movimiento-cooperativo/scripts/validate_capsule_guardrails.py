#!/usr/bin/env python3
from __future__ import annotations
import argparse, json, re, shutil, subprocess, sys, tempfile
from pathlib import Path

def has(p,t,f=re.I|re.S): return re.search(p,t,f) is not None
def add(c,e,k,ok,msg):
    c[k]="PASS" if ok else "FAIL"
    if not ok:e.append(msg)

def extract(text,name):
    m=re.search(rf"\bconst\s+{re.escape(name)}\s*=\s*",text)
    if not m:return None
    s=m.end()
    if s>=len(text) or text[s] not in "[{":return None
    op=text[s]; cl="]" if op=="[" else "}"
    d=0; ins=False; esc=False
    for i in range(s,len(text)):
        ch=text[i]
        if ins:
            if esc:esc=False
            elif ch=="\\":esc=True
            elif ch=='"':ins=False
            continue
        if ch=='"':ins=True
        elif ch==op:d+=1
        elif ch==cl:
            d-=1
            if d==0:
                try:return json.loads(text[s:i+1])
                except:return None
    return None

def main():
    ap=argparse.ArgumentParser()
    ap.add_argument("html",type=Path)
    ap.add_argument("--package-dir",type=Path)
    ap.add_argument("--report",type=Path)
    a=ap.parse_args()
    if not a.html.is_file():return 2
    text=a.html.read_text(encoding="utf-8",errors="replace")
    c,e,w={},[],[]
    cap=extract(text,"CAPSULE"); story=extract(text,"PRESENTATION_STORY")

    add(c,e,"flat_navigation",not has(r"\b(subtabs?|nested[_-]?tabs?|carousel[_-]?navigation)\b",text),"Nested navigation.")
    add(c,e,"toggle_bottom_right",has(r"\.presentation-toggle\s*\{[^}]*position\s*:\s*fixed[^}]*right\s*:[^;}]+[^}]*bottom\s*:",text),"Toggle not bottom-right.")
    h=re.search(r"<header\b.*?</header>",text,re.I|re.S)
    add(c,e,"toggle_not_header",not(h and re.search(r"modeButton|presentation-toggle",h.group(0),re.I)),"Toggle in header.")
    add(c,e,"presentation_footer",has(r"presentation-bar",text) and has(r"data-step=[\"']-1",text) and has(r"data-step=[\"']1",text),"Footer missing.")
    add(c,e,"presentation_flow_marker",has(r"one-tab-one-slide|presentationModel",text),"Flow marker missing.")
    add(c,e,"single_tab_renderer",has(r"renderSingleTabSlide\s*\(",text),"Renderer missing.")
    add(c,e,"presentation_scroll",has(r"body\.present\s+\.stage\s*\{[^}]*overflow\s*:\s*(auto|scroll)",text),"Presentation scroll missing.")
    add(c,e,"presentation_scroll_reset_helper",
        has(r"function\s+resetPresentationScroll\s*\(",text),
        "Presentation scroll reset helper missing.")
    add(c,e,"presentation_stage_scrolltop_reset",
        has(r"stage\.scrollTop\s*=\s*0",text),
        "Presentation stage scrollTop reset missing.")
    add(c,e,"presentation_scroll_reset_after_render",
        has(r"requestAnimationFrame\s*\([^)]*resetPresentationScroll|requestAnimationFrame\s*\(\(\)\s*=>\s*\{[^}]*resetPresentationScroll",text),
        "Deferred presentation scroll reset missing.")

    ok=isinstance(cap,dict) and isinstance(story,list)
    add(c,e,"json_contracts",ok,"JSON contracts unreadable.")
    if ok:
        tabs=cap.get("tabs",[])
        add(c,e,"slides_tabs_plus_opening",len(story)==len(tabs)+1,f"Expected {len(tabs)+1} slides, found {len(story)}.")
        add(c,e,"one_opening",len([s for s in story if s.get("kind")=="opening" and s.get("tab")==-1])==1 and story[0].get("kind")=="opening","Opening slide invalid.")
        content=story[1:]
        add(c,e,"all_tab_slides",all(s.get("kind")=="tab-slide" for s in content),"Separate presentation scene kinds forbidden.")
        indices=[s.get("tab") for s in content]
        add(c,e,"unique_tab_slides",len(indices)==len(set(indices)),"Tab repeated.")
        add(c,e,"all_tabs_covered",sorted(indices)==list(range(len(tabs))),"Tabs missing or out of order.")
        context=True; findings=[]
        for ti,tab in enumerate(tabs):
            if tab.get("legalRefs") or tab.get("legal_refs"):
                context=False;findings.append(f"tab {ti} global legalRefs")
            for seg in tab.get("segments") or tab.get("contentFlow") or []:
                refs=seg.get("legalRefs") or seg.get("legal_refs") or []
                if refs and not seg.get("theory"):
                    context=False;findings.append(f"tab {ti} segment {seg.get('id')} lacks theory")
        add(c,e,"legal_contextual_segments",context,"; ".join(findings) or "Context model failed.")

    sf=re.search(r"function\s+renderSlideSegment\s*\([^)]*\)\s*\{(.*?)\n\}",text,re.S)
    if sf:
        b=sf.group(1); lp=b.find("slideLegalBlocks"); tp=b.find("slideTheory")
        add(c,e,"law_before_theory_same_slide",lp>=0 and tp>lp,"Law/theory order wrong.")
    else:add(c,e,"law_before_theory_same_slide",False,"renderSlideSegment missing.")

    rf=re.search(r"function\s+renderSingleTabSlide\s*\([^)]*\)\s*\{(.*?)\n\}",text,re.S)
    if rf:
        b=rf.group(1); sp=b.find("renderSlideSegment"); vp=b.find("renderTabSlideVisual")
        add(c,e,"visual_after_reading",sp>=0 and vp>sp,"Visual before reading.")
    else:add(c,e,"visual_after_reading",False,"renderSingleTabSlide missing.")

    add(c,e,"legal_closed",not has(r"<details[^>]*class=[\"'][^\"']*slide-legal[^\"']*[\"'][^>]*\sopen\b",text) and not has(r"class=[\"'][^\"']*legal\s+open",text),"Legal open by default.")
    add(c,e,"legal_lilac",has(r"--lilac|#72549a|#f8f3fc|#eee4f7",text),"Lilac missing.")
    add(c,e,"legal_verbatim",has(r"verbatim|Texto legal literal",text),"Verbatim missing.")
    add(c,e,"no_global_legal_stack",not has(r"(legalBlocks|renderLegal)\s*\(\s*tab\.legalRefs",text),"Global legal stack.")
    add(c,e,"theory_accordions",has(r"slideTheory\s*\(|slide-theory|accordion",text),"Theory accordions missing.")
    add(c,e,"no_theory_cards",not has(r"\b(theory-card|present-theory-card|phrase-chip)\b",text),"Forbidden theory cards.")
    add(c,e,"opening_white",has(r"(opening|intro-hero)[^{]*\{[^}]*background\s*:\s*(#fff|white|rgba\(255)",text),"Opening not white.")
    add(c,e,"jester_right",has(r"(opening-jester|intro-hero-jester)[^{]*\{[^}]*right\s*:",text),"Jester not right.")
    add(c,e,"jester_ground",has(r"opening-ground|intro-hero-ground",text),"Ground missing.")
    add(c,e,"thought_bubble",has(r"thought|intro-hero-bubble",text),"Bubble missing.")
    add(c,e,"reduced_motion",has(r"prefers-reduced-motion",text),"Reduced motion missing.")

    node=shutil.which("node")
    if node:
        scripts=re.findall(r"<script[^>]*>(.*?)</script>",text,re.I|re.S)
        with tempfile.NamedTemporaryFile("w",suffix=".js",encoding="utf-8",delete=False) as f:
            f.write("\n".join(scripts)); name=f.name
        p=subprocess.run([node,"--check",name],capture_output=True,text=True)
        Path(name).unlink(missing_ok=True)
        add(c,e,"javascript_syntax",p.returncode==0,p.stderr.strip())
    else:w.append("node unavailable")

    if a.package_dir:
        req={"preview":["*preview*.png"],"qa":["QA*.md","*qa*.md"],"readme":["README-ANTIGRAVITY.md"],"scene_map":["presentation-scene-map.json"],"report":["guardrail-report.json"]}
        for k,patterns in req.items():
            found=any(any(a.package_dir.glob(p)) for p in patterns)
            add(c,e,f"package_{k}",found,f"Missing {k}.")

    report={"html":str(a.html),"validatorVersion":"2.2","status":"PASS" if not e else "FAIL","checks":c,"blocking_findings":e,"warnings":w}
    out=a.report or a.html.with_name("guardrail-report.json")
    out.write_text(json.dumps(report,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print(json.dumps(report,ensure_ascii=False,indent=2))
    return 0 if not e else 1

if __name__=="__main__":raise SystemExit(main())
