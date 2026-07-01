# Presentation scroll reset contract

Every change of presentation slide must return the presentation viewport to the top.

The reset applies to:

- next and previous controls;
- presentation dots;
- keyboard navigation;
- direct scene changes;
- entering presentation mode.

Implementation:

1. reset `.stage` before render;
2. replace scene markup;
3. reset `.stage` immediately after render;
4. repeat in two animation frames to defeat layout restoration or delayed reflow.

The window scroll position is also reset as a fallback, but `.stage` is the authoritative container.
