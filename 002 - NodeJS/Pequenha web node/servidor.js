var servidor = require('http');
var archivos = require('fs');

servidor.createServer((req, res) => {
    let rutaArchivo = '';

    switch (req.url) {
        case "/":
            rutaArchivo = 'inicio.html';
            break;
        case "/sobremi":
            rutaArchivo = 'sobremi.html';
            break;
        case "/contacto":
            rutaArchivo = 'contacto.html';
            break;
        default:
            rutaArchivo = 'error404.html';
            break;
    }

    archivos.readFile(rutaArchivo, (err, data) => {
        if (err) {
            // Si hay un error leyendo el archivo, envía un error 404
            archivos.readFile('error404.html', (err, data)=> {
              if(err){
                res.writeHead(404, {'Content-Type':'text/html charset=utf8'});
                res.end("404 - Página no encontrada");
              }else {
                res.writeHead(404, {'Content-Type':'text/html charset=utf8'});
                res.end(data);
              }
            });   
        }else{
          // Si el archivo se lee correctamente, envía los datos
          res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
          res.end(data);
        }
        
    });
}).listen(80, () => console.log("Servidor corriendo en el puerto 80"));
