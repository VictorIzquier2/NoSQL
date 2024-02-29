// Backend nodejs

const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const path = require('path');
const port = 8081;

var mensajes = [];

const servidor = http.createServer(async (req, res) => {

  let rutaCompleta = url.parse(req.url, true);
  let rutaArchivo = rutaCompleta.pathname === '/' ? '/front.html' : rutaCompleta.pathname;

  if (rutaArchivo.match("\.css$")) {
    // Manejo de archivos CSS
    const cssPath = path.join(__dirname, rutaArchivo);
    try {
      const fileStream = await fs.readFile(cssPath, "UTF-8");
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.end(fileStream);
    } catch (error) {
      console.error("Error al leer el archivo CSS: ", error);
      res.writeHead(404, {'Content-Type': 'text/css'});
      res.end("404 - Archivo CSS no encontrado");
    }
  } else if (rutaArchivo.match("\.js$")) {
    // Manejo de archivos JavaScript
    const jsPath = path.join(__dirname, rutaArchivo);
    try {
      const fileStream = await fs.readFile(jsPath, "UTF-8");
      res.writeHead(200, {'Content-Type': 'application/javascript'});
      res.end(fileStream);
    } catch (error) {
      console.error("Error al leer el archivo JS: ", error);
      res.writeHead(404, {'Content-Type': 'application/javascript'});
      res.end("404 - Archivo JS no encontrado");
    }
  } else {
    // Manejo de páginas HTML y otros archivos
    if(req.url == '/recibe'){
      res.writeHead(200, {'Content-Type': 'text/json'}); 
      res.end(JSON.stringify(mensajes));
      return;
    }else if(req.url.includes('/envia')){
     let parametros = url.parse(req.url, true).query;
     mensajes.push({fecha: Date.now(), mensaje: parametros.mensaje});
     console.table(mensajes);
     res.end("");
    }else{
      try {
        const contenido = await fs.readFile(path.join(__dirname, rutaArchivo), 'UTF-8');
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(contenido);
      } catch (error) {
        console.error('Error al leer la página: ', error);
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
        res.end("404 - Página no encontrada");
      }
    }
  }
});

servidor.listen(port, () => console.info('Servidor corriendo en el puerto:', port));
