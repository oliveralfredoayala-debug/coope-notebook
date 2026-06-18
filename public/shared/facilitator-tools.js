(function(){
  // Determine relative paths for tools dynamically depending on the folder depth of the current page
  var pathPrefix = ".";
  var path = window.location.pathname;
  var contentsIdx = path.indexOf('/contents/');
  var toolsIdx = path.indexOf('/tools/');
  var startIdx = contentsIdx !== -1 ? contentsIdx : (toolsIdx !== -1 ? toolsIdx : -1);
  
  if (startIdx !== -1) {
    var subPath = path.substring(startIdx + 1);
    var slashes = (subPath.match(/\//g) || []).length;
    var steps = [];
    for (var i = 0; i < slashes; i++) {
      steps.push('..');
    }
    pathPrefix = steps.length > 0 ? steps.join('/') : '.';
  }

  var tools = [
    { id:'ley', label:'Ley de Coop.', url: pathPrefix + '/tools/ley.html?panel=1', iconName: 'ley' },
    { id:'delegados', label:'Delegados', url: pathPrefix + '/tools/temas-artefacto/calculadora-delegados.html?panel=1', iconName: 'delegados' },
    { id:'excedentes', label:'Excedentes', url: pathPrefix + '/tools/temas-artefacto/explorador-excedentes.html?panel=1', iconName: 'excedentes' },
    { id:'anio', label:'Año social', url: pathPrefix + '/tools/temas-artefacto/ano-social-fiscal.html?panel=1', iconName: 'anio' },
    { id:'incidencia', label:'Incidencia', url: pathPrefix + '/tools/temas-artefacto/plan-incidencia-politica.html?panel=1', iconName: 'incidencia' },
    { id:'perfil', label:'Perfil líder', url: pathPrefix + '/tools/trabajo-equipo/perfil-lider.html?panel=1', iconName: 'perfil' }
  ];

  function icon(name){
    var icons = {
      tools:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.1-3.1a6 6 0 0 1-7.9 7.9l-5.6 5.6a2.1 2.1 0 0 1-3-3l5.6-5.6a6 6 0 0 1 7.9-7.9l-3.1 3.1Z"/></svg>',
      x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>',
      external:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
      ley:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10M6 14h10"/></svg>',
      delegados:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      excedentes:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
      anio:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
      incidencia:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
      perfil:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
    };
    return icons[name] || icons['tools'];
  }

  function create(){
    if(document.querySelector('.ft-shell')) return;

    var dock = document.createElement('div');
    dock.className = 'ft-dock';

    var backdrop = document.createElement('div');
    backdrop.className = 'ft-backdrop';

    var shell = document.createElement('aside');
    shell.className = 'ft-shell';
    shell.setAttribute('aria-label','Herramientas de facilitador');
    shell.innerHTML =
      '<div class="ft-resize-handle"></div>' +
      '<div class="ft-head">' +
        '<div class="ft-title"><span class="ft-kicker">Herramienta</span><span class="ft-name">Ley</span></div>' +
        '<button class="ft-icon-btn ft-pop" type="button" aria-label="Abrir herramienta en una pestaña nueva">'+icon('external')+'</button>' +
        '<button class="ft-icon-btn ft-close" type="button" aria-label="Cerrar herramientas">'+icon('x')+'</button>' +
      '</div>' +
      '<div class="ft-list" role="tablist"></div>' +
      '<div class="ft-frame-wrap"><iframe class="ft-frame" title="Herramienta de facilitador"></iframe></div>';

    document.body.appendChild(dock);
    document.body.appendChild(backdrop);
    document.body.appendChild(shell);

    var list = shell.querySelector('.ft-list');
    var frame = shell.querySelector('.ft-frame');
    var name = shell.querySelector('.ft-name');
    var active = tools[0];

    tools.forEach(function(tool){
      // 1. Build dock button
      var dockBtn = document.createElement('button');
      dockBtn.className = 'ft-dock-btn';
      dockBtn.type = 'button';
      dockBtn.setAttribute('title', tool.label);
      dockBtn.innerHTML = icon(tool.iconName) + '<span>' + tool.label + '</span>';
      dockBtn.addEventListener('click', function(){
        load(tool);
        open();
      });
      dock.appendChild(dockBtn);

      // 2. Build inner tab list button
      var btn = document.createElement('button');
      btn.className = 'ft-tool';
      btn.type = 'button';
      btn.textContent = tool.label;
      btn.dataset.tool = tool.id;
      btn.addEventListener('click', function(){
        load(tool);
        open();
      });
      list.appendChild(btn);
    });

    function load(tool){
      active = tool;
      name.textContent = tool.label;
      frame.src = tool.url;
      list.querySelectorAll('.ft-tool').forEach(function(btn){
        btn.classList.toggle('ft-active', btn.dataset.tool === tool.id);
      });
    }
    function open(){
      shell.classList.add('ft-open');
      backdrop.classList.add('ft-open');
      document.body.classList.add('ft-panel-open');
    }
    function close(){
      shell.classList.remove('ft-open');
      backdrop.classList.remove('ft-open');
      document.body.classList.remove('ft-panel-open');
    }

    backdrop.addEventListener('click', close);
    shell.querySelector('.ft-close').addEventListener('click', close);
    shell.querySelector('.ft-pop').addEventListener('click', function(){
      window.open(active.url, '_blank', 'noopener');
    });
    document.addEventListener('keydown', function(evt){
      if(evt.key === 'Escape') close();
    });

    // --- DRAGGABLE RESIZE LOGIC ---
    var handle = shell.querySelector('.ft-resize-handle');
    var isResizing = false;
    var startX, startWidth;

    handle.addEventListener('mousedown', function(e) {
      isResizing = true;
      startX = e.clientX;
      startWidth = shell.offsetWidth;
      handle.classList.add('ft-active');
      document.body.classList.add('ft-resizing');
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
      frame.style.pointerEvents = 'none'; // Prevent iframe from capturing mouse events
    });

    document.addEventListener('mousemove', function(e) {
      if (!isResizing) return;
      var width = startWidth + (startX - e.clientX); // Left drag increases width
      var minWidth = 320;
      var maxWidth = window.innerWidth * 0.85; // Max 85% of screen width
      if (width >= minWidth && width <= maxWidth) {
        shell.style.width = width + 'px';
        if (window.innerWidth >= 980) {
          document.body.style.paddingRight = width + 'px';
        }
      }
    });

    document.addEventListener('mouseup', function() {
      if (isResizing) {
        isResizing = false;
        handle.classList.remove('ft-active');
        document.body.classList.remove('ft-resizing');
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
        frame.style.pointerEvents = 'auto'; // Re-enable iframe mouse events
      }
    });

    // Default load first tool
    load(active);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', create);
  else create();
})();
