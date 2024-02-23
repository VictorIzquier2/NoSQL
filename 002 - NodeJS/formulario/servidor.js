const http = require('http');
const fs = require('fs'); // Añadido para servir archivos estáticos como CSS
const procesador = require('querystring');

const server = http.createServer((req, res) => {
    // Función para servir el formulario
    function serveForm() {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <link rel="stylesheet" type="text/css" href="styles.css">
            <header>
              <h1 class="titulo"><span>Formulario de</span> Contacto</h1>
            </header>
            <h2>Contacto</h2>
            <form class="formulario" action="/procesa" method="POST" enctype="application/x-www-form-urlencoded">
              <div class="contenedor-campos">
                <div class="campo">
                  <label for="nombre">Nombre:</label>
                  <input class="entrada" type="text" name="nombre" placeholder="Escribe tu nombre" /><br>
                </div>
                <div class="campo">
                  <label for="asunto">Asunto:</label>
                  <input class="entrada" type="text" name="asunto" placeholder="Escribe el asunto" /><br>
                </div>
                <div class="campo">
                  <label for="email">Email:</label>
                  <input class="entrada" type="email" name="email" placeholder="Escribe tu email" /><br>
                </div>
                <div class="campo">
                  <textarea class="entrada" name="mensaje" placeholder="Escribe tu mensaje"></textarea><br>
                </div>
                <div class="campo alineado-derecha flex">
                  <input class="boton w-sm-100" type="submit" value="Enviar" />
                </div>
              </div>
            </form>
        `);
    }

    // Función para procesar los datos del formulario
    function processData(req, res) {
        let datos = '';
        req.on('data', parte => datos += parte.toString());
        req.on('end', () => {
            let cadena = datos;
            let procesado = procesador.parse(cadena);
            console.log(procesado); 

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end("<p>Datos recibidos. Puedes cerrar esta ventana.</p>");
        });
    }

    // Función para servir archivos estáticos, como tu CSS
    function serveStaticFile(res, path, contentType, responseCode = 200) {
        fs.readFile(__dirname + path, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 - Internal Error');
            } else {
                res.writeHead(responseCode, { 'Content-Type': contentType });
                res.end(data);
            }
        });
    }

    switch (req.url) {
        case '/':
            serveForm();
            break;
        case '/procesa':
            if (req.method === 'POST') {
                processData(req, res);
            } else {
                res.writeHead(405, { 'Content-Type': 'text/plain' });
                res.end('Method Not Allowed');
            }
            break;
        case '/styles.css':
            serveStaticFile(res, '/styles.css', 'text/css');
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
            break;
    }
});

server.listen(80, () => console.log('Servidor escuchando en el puerto 80'));
