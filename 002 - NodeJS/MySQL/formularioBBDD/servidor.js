const http = require('http');
const fs = require('fs').promises; // Asegúrate de usar fs.promises para trabajar con async/await
const url = require('url');
const path = require('path');
const mysql = require('mysql');

const servidor = http.createServer(async (req, res) => {
    let rutaArchivo = '';
    let rutaCompleta = url.parse(req.url, true);
    let fecha = new Date();

    // Utiliza fs.promises.readFile para trabajar con async/await
    const leerArchivo = async (archivo) => {
        return fs.readFile(path.join(__dirname, 'plantillas', archivo), 'UTF-8');
    };

    // Manejo de archivos CSS
    if (req.url.match("\.css$")) {
        const cssPath = path.join(__dirname, req.url);
        try {
            const fileStream = await fs.readFile(cssPath, "UTF-8");
            res.writeHead(200, {"Content-Type": "text/css"});
            res.end(fileStream);
        } catch (err) {
            res.writeHead(404, {"Content-Type": "text/css"});
            res.end("404 Not Found");
        }
        return;
    }

    switch (req.url) {
        case "/":
            rutaArchivo = 'inicio.html';
            break;
        case "/blog":
            // Conexión a MySQL
            const conexion = mysql.createConnection({
                host: "localhost",
                user: "nodejs",
                password: "nodejs",
                database: "nodejs",
                port: "3307"
            });
            
            // Conecta a la base de datos
            conexion.connect(err => {
                if (err) {
                    console.error("Error al conectar a la base de datos:", err);
                    res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'});
                    res.end("Error interno del servidor");
                    return;
                }
            });
            
            try {
                const queryPromise = new Promise((resolve, reject) => {
                    conexion.query("SELECT * FROM entradas ORDER BY id;", (err, result) => {
                        if (err) reject(err);
                        else resolve(result);
                        console.log(result);
                    });
                });

                const result = await queryPromise;
                let entradasHTML = result.map(entrada =>
                    `<article class="articulo">
                        <h3>${entrada.titulo}</h3>
                        <p>${entrada.texto}</p>
                        <p><span>Fecha:</span>${entrada.fecha}</p>
                    </article>`).join('');

                let contenidoHeader = await leerArchivo('header.html');
                let contenidoFooter = await leerArchivo('footer.html');
                let contenidoPagina = await fs.readFile(path.join(__dirname, 'blog.html'), 'UTF-8');

                contenidoPagina = contenidoPagina.replace('%ENTRADAS_BLOG%', entradasHTML);
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                res.end(contenidoHeader + contenidoPagina + contenidoFooter);
            } catch (error) {
                console.error("Error:", error);
                res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'});
                res.end("Error interno del servidor");
            } finally {
                conexion.end();
            }
            return;
        case "/sobremi":
            rutaArchivo = 'sobremi.html';
            break;
        case "/contacto":
            rutaArchivo = 'contacto.html';
            break;
        case "/procesa":
            rutaArchivo = 'procesa.html';
            break;
        default:
            rutaArchivo = 'error404.html';
            break;
    }

    try {
        let contenidoHeader = await leerArchivo('header.html');
        let contenidoFooter = await leerArchivo('footer.html');
        let contenidoPagina = await fs.readFile(path.join(__dirname, rutaArchivo), 'UTF-8');

        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(contenidoHeader + contenidoPagina + contenidoFooter);
    } catch (error) {
        console.error("Error al leer archivos:", error);
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
        res.end("404 - Página no encontrada");
    }
}).listen(8081, () => console.log("Servidor corriendo en el puerto :8081"));
