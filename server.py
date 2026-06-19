import http.server
import socketserver
import os
import json

PORT = 8788

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path == '/api/save':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            
            try:
                data = json.loads(post_data.decode('utf-8'))
                file_path = data.get('filePath')
                panel_id = data.get('panelId')
                new_content = data.get('content')
                
                if not file_path or not panel_id or new_content is None:
                    raise ValueError("Faltan parámetros requeridos (filePath, panelId, content)")

                # Resolver ruta absoluta y prevenir Path Traversal
                base_dir = os.getcwd()
                target_path = os.path.abspath(os.path.join(base_dir, file_path))
                
                if not target_path.startswith(base_dir):
                    raise PermissionError("Acceso no autorizado fuera del directorio raíz")

                if not os.path.exists(target_path):
                    raise FileNotFoundError(f"El archivo {file_path} no existe")

                # Realizar el reemplazo del HTML en el archivo físico
                replace_panel_content(target_path, panel_id, new_content)

                # Enviar respuesta de éxito
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                response = {'success': True}
                self.wfile.write(json.dumps(response).encode('utf-8'))
                print(f"[COOPNOTEBOOK] Panel '{panel_id}' guardado con éxito en '{file_path}'")
                
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                response = {'success': False, 'error': str(e)}
                self.wfile.write(json.dumps(response).encode('utf-8'))
                print(f"[COOPNOTEBOOK ERROR] {str(e)}")
        else:
            self.send_response(404)
            self.end_headers()

def replace_panel_content(file_path, panel_id, new_content):
    with open(file_path, 'r', encoding='utf-8') as f:
        html = f.read()

    # Buscar el panel por id con comillas dobles o simples
    id_str = f'id="{panel_id}"'
    if id_str not in html:
        id_str = f"id='{panel_id}'"
    
    if id_str not in html:
        raise Exception(f"No se encontró el panel con ID '{panel_id}' en el HTML")

    # Encontrar la etiqueta de apertura del div
    idx_id = html.find(id_str)
    idx_start_tag = html.rfind('<div', 0, idx_id)
    if idx_start_tag == -1:
        raise Exception("No se encontró la etiqueta <div de apertura para el panel")

    # Encontrar el final del tag de apertura (el primer > después del ID)
    idx_open_end = html.find('>', idx_id) + 1

    # Contar divs anidados para encontrar la etiqueta de cierre correspondiente </div>
    count = 1
    current_pos = idx_open_end
    while count > 0 and current_pos < len(html):
        next_open = html.find('<div', current_pos)
        next_close = html.find('</div>', current_pos)

        if next_close == -1:
            break
        
        if next_open != -1 and next_open < next_close:
            count += 1
            current_pos = next_open + 4
        else:
            count -= 1
            current_pos = next_close + 6

    if count == 0:
        idx_close_start = current_pos - 6
        # Reemplazar el contenido interno del panel
        new_html = html[:idx_open_end] + "\n" + new_content.strip() + "\n" + html[idx_close_start:]
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_html)
    else:
        raise Exception(f"No se pudo encontrar la etiqueta de cierre </div> para el panel '{panel_id}'")

# Cambiar el directorio de trabajo a public/ para servir los archivos
project_dir = os.path.dirname(os.path.abspath(__file__))
public_dir = os.path.join(project_dir, 'public')
os.chdir(public_dir)

# Permitir reusar la dirección del puerto rápidamente en caso de reinicio
socketserver.TCPServer.allow_reuse_address = True

with socketserver.TCPServer(("127.0.0.1", PORT), CustomHTTPRequestHandler) as httpd:
    print(f"Servidor CoopeNotebook en ejecución en http://127.0.0.1:{PORT}")
    print("Deja esta ventana abierta para guardar cambios y usar la libreta.")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor detenido.")
