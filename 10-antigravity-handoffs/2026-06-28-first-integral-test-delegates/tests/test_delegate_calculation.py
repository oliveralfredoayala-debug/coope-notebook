#!/usr/bin/env python3
"""Prueba reproducible del cálculo implementado en el artefacto."""
import json, sys

def implemented(n):
    n=max(0,int(n or 0))
    tr=[(1,100,10),(101,500,20),(501,1000,30),(1001,2000,40),(2001,None,50)]
    total=0
    for fr,to,d in tr:
        cap=n if to is None else to
        people=0 if n<fr else cap-fr+1
        total += max(0,people)//d
    return total

def expected(n):
    n=max(0,int(n or 0))
    tr=[(1,100,10),(101,500,20),(501,1000,30),(1001,2000,40),(2001,None,50)]
    total=0
    for fr,to,d in tr:
        upper=n if to is None else min(n,to)
        people=0 if n<fr else max(0,upper-fr+1)
        total += people//d
    return total

vectors=[0,1,9,10,50,99,100,101,120,350,420,500,501,800,1000,1001,1450,1500,2000,2001,2400,3000]
rows=[{"presentes":n,"implementado":implemented(n),"esperado":expected(n)} for n in vectors]
failed=[r for r in rows if r["implementado"]!=r["esperado"]]
print(json.dumps({"rows":rows,"failed":failed},ensure_ascii=False,indent=2))
sys.exit(1 if failed else 0)
