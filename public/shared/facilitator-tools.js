(function(){
  var tools = [
    { id:'ley', label:'Ley', url:'/tools/ley.html?panel=1' },
    { id:'delegados', label:'Delegados', url:'/tools/temas-artefacto/calculadora-delegados.html?panel=1' },
    { id:'excedentes', label:'Excedentes', url:'/tools/temas-artefacto/explorador-excedentes.html?panel=1' },
    { id:'anio', label:'A\u00f1o social', url:'/tools/temas-artefacto/ano-social-fiscal.html?panel=1' },
    { id:'incidencia', label:'Incidencia', url:'/tools/temas-artefacto/plan-incidencia-politica.html?panel=1' },
    { id:'perfil', label:'Perfil l\u00edder', url:'/tools/trabajo-equipo/perfil-lider.html?panel=1' }
  ];

  function icon(name){
    var icons = {
      tools:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.1-3.1a6 6 0 0 1-7.9 7.9l-5.6 5.6a2.1 2.1 0 0 1-3-3l5.6-5.6a6 6 0 0 1 7.9-7.9l-3.1 3.1Z"/></svg>',
      x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>',
      external:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>'
    };
    return icons[name] || '';
  }

  function create(){
    if(document.querySelector('.ft-shell')) return;

    var toggle = document.createElement('button');
    toggle.className = 'ft-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-label','Abrir herramientas de facilitador');
    toggle.innerHTML = icon('tools');

    var backdrop = document.createElement('div');
    backdrop.className = 'ft-backdrop';

    var shell = document.createElement('aside');
    shell.className = 'ft-shell';
    shell.setAttribute('aria-label','Herramientas de facilitador');
    shell.innerHTML =
      '<div class="ft-head">' +
        '<div class="ft-title"><span class="ft-kicker">Facilitador</span><span class="ft-name">Ley</span></div>' +
        '<button class="ft-icon-btn ft-pop" type="button" aria-label="Abrir herramienta en una pesta\u00f1a nueva">'+icon('external')+'</button>' +
        '<button class="ft-icon-btn ft-close" type="button" aria-label="Cerrar herramientas">'+icon('x')+'</button>' +
      '</div>' +
      '<div class="ft-list" role="tablist"></div>' +
      '<div class="ft-frame-wrap"><iframe class="ft-frame" title="Herramienta de facilitador"></iframe></div>';

    document.body.appendChild(toggle);
    document.body.appendChild(backdrop);
    document.body.appendChild(shell);

    var list = shell.querySelector('.ft-list');
    var frame = shell.querySelector('.ft-frame');
    var name = shell.querySelector('.ft-name');
    var active = tools[0];

    tools.forEach(function(tool){
      var btn = document.createElement('button');
      btn.className = 'ft-tool';
      btn.type = 'button';
      btn.textContent = tool.label;
      btn.dataset.tool = tool.id;
      btn.addEventListener('click', function(){ load(tool); open(); });
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

    toggle.addEventListener('click', function(){ open(); });
    backdrop.addEventListener('click', close);
    shell.querySelector('.ft-close').addEventListener('click', close);
    shell.querySelector('.ft-pop').addEventListener('click', function(){
      window.open(active.url, '_blank', 'noopener');
    });
    document.addEventListener('keydown', function(evt){
      if(evt.key === 'Escape') close();
    });

    load(active);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', create);
  else create();
})();
