(function() {
  var passwordCorrect = 'chc';
  var authKey = 'chc_auth';
  var path = window.location.pathname;
  var search = window.location.search;

  // Normalize path to check if we are on the home page
  var isHome = path === '/' || path === '/index.html' || (path.endsWith('/index.html') && !path.includes('/capsulas teoricas/') && !path.includes('/artefactos/') && !path.includes('/lnl/') && !path.includes('/p2l/'));
  // Check if already authenticated
  var isAuthenticated = sessionStorage.getItem(authKey) === passwordCorrect;

  if (!isAuthenticated) {
    if (!isHome) {
      // Prevent rendering subpage and redirect immediately
      document.documentElement.style.display = 'none';
      var redirectUrl = window.location.origin + '/index.html?redirect=' + encodeURIComponent(path + search);
      window.location.replace(redirectUrl);
    } else {
      // On home page: hide body instantly to avoid flash of content
      var css = document.createElement('style');
      css.id = 'auth-hide-body';
      css.innerHTML = 'body > :not(#auth-overlay) { display: none !important; }';
      document.documentElement.appendChild(css);

      // Once DOM is ready, build and inject the premium login form
      document.addEventListener('DOMContentLoaded', function() {
        // Create full screen background overlay
        var overlay = document.createElement('div');
        overlay.id = 'auth-overlay';
        overlay.style.cssText = 'position: fixed; inset: 0; z-index: 99999; display: flex; align-items: center; justify-content: center; background: #ffffff; font-family: system-ui, -apple-system, sans-serif; padding: 20px;';

        // CSS styles for the authentication interface
        var style = document.createElement('style');
        style.innerHTML = '\
          #auth-card {\
            background: #ffffff;\
            border: 1px solid #e4e4e0;\
            border-radius: 16px;\
            padding: 3rem 2.5rem;\
            width: 100%;\
            max-width: 440px;\
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);\
            text-align: center;\
            animation: authFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;\
          }\
          @keyframes authFadeIn {\
            from { opacity: 0; transform: translateY(20px); }\
            to { opacity: 1; transform: translateY(0); }\
          }\
          #auth-logo-img {\
            width: 100%;\
            max-width: 280px;\
            height: auto;\
            margin: 0 auto 1.5rem;\
            display: block;\
          }\
          #auth-subtitle {\
            font-size: 14px;\
            color: #6a6a64;\
            margin-bottom: 2rem;\
            line-height: 1.5;\
          }\
          #auth-form {\
            display: flex;\
            flex-direction: column;\
            gap: 1.25rem;\
          }\
          .auth-input-group {\
            display: flex;\
            flex-direction: column;\
            text-align: left;\
            gap: 0.5rem;\
          }\
          .auth-input-group label {\
            font-size: 11px;\
            font-weight: 700;\
            text-transform: uppercase;\
            letter-spacing: 0.08em;\
            color: #1c6b4a;\
          }\
          #auth-input {\
            width: 100%;\
            padding: 12px 16px;\
            font-size: 16px;\
            border: 1.5px solid #d8d8d4;\
            border-radius: 8px;\
            outline: none;\
            background: #fafaf9;\
            color: #1a1a18;\
            transition: border-color 0.2s, box-shadow 0.2s;\
          }\
          #auth-input:focus {\
            border-color: #1c6b4a;\
            box-shadow: 0 0 0 3px rgba(28, 107, 74, 0.15);\
            background: #ffffff;\
          }\
          #auth-btn {\
            width: 100%;\
            padding: 13px 20px;\
            font-size: 15px;\
            font-weight: 600;\
            color: #ffffff;\
            background: #1c6b4a;\
            border: none;\
            border-radius: 8px;\
            cursor: pointer;\
            transition: background 0.2s, transform 0.1s, box-shadow 0.2s;\
            box-shadow: 0 4px 12px rgba(28, 107, 74, 0.25);\
          }\
          #auth-btn:hover {\
            background: #155138;\
            box-shadow: 0 6px 16px rgba(28, 107, 74, 0.35);\
          }\
          #auth-btn:active {\
            transform: scale(0.98);\
          }\
          #auth-error {\
            font-size: 13px;\
            color: #b32e2e;\
            font-weight: 500;\
            min-height: 20px;\
            margin-top: -0.25rem;\
            opacity: 0;\
            transition: opacity 0.2s;\
          }\
          #auth-error.visible {\
            opacity: 1;\
          }\
          .shake {\
            animation: authShake 0.4s ease-in-out;\
          }\
          @keyframes authShake {\
            0%, 100% { transform: translateX(0); }\
            20%, 60% { transform: translateX(-8px); }\
            40%, 80% { transform: translateX(8px); }\
          }\
        ';
        document.head.appendChild(style);

        // Build the HTML template inside the card
        overlay.innerHTML = '\
          <div id="auth-card">\
            <img id="auth-logo-img" src="/assets/coopenotebook-main-logo.png" alt="CoopeNotebook">\
            <div id="auth-subtitle">Ingresa la contraseña del diplomado para continuar</div>\
            <form id="auth-form" onsubmit="return false;">\
              <div class="auth-input-group">\
                <label for="auth-input">Contraseña</label>\
                <input type="password" id="auth-input" placeholder="••••" autocomplete="current-password" required>\
              </div>\
              <div id="auth-error">Contraseña incorrecta</div>\
              <button type="submit" id="auth-btn">Entrar</button>\
            </form>\
          </div>\
        ';
        document.body.appendChild(overlay);

        var input = document.getElementById('auth-input');
        var btn = document.getElementById('auth-btn');
        var error = document.getElementById('auth-error');
        var card = document.getElementById('auth-card');
        var form = document.getElementById('auth-form');

        // Focus input immediately
        input.focus();

        function checkAuth() {
          var val = input.value.trim().toLowerCase();
          console.log('Comparing:', JSON.stringify(val), 'with:', JSON.stringify(passwordCorrect));
          if (val === passwordCorrect) {
            // Correct password
            sessionStorage.setItem(authKey, passwordCorrect);
            
            // Fade out animation
            overlay.style.transition = 'opacity 0.35s ease';
            overlay.style.opacity = '0';
            setTimeout(function() {
              // Remove overlay and restore page rendering
              overlay.remove();
              var hideStyle = document.getElementById('auth-hide-body');
              if (hideStyle) hideStyle.remove();
              
              // Handle redirects if present
              var params = new URLSearchParams(window.location.search);
              var redirect = params.get('redirect');
              if (redirect) {
                window.location.replace(decodeURIComponent(redirect));
              }
            }, 350);
          } else {
            // Incorrect password: shake animation and show error
            error.classList.add('visible');
            card.classList.add('shake');
            input.value = '';
            input.focus();
            
            setTimeout(function() {
              card.classList.remove('shake');
            }, 400);
          }
        }

        form.addEventListener('submit', function(e) {
          e.preventDefault();
          checkAuth();
        });
      });
    }
  }
})();
