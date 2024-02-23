var servidor = require('http');
var archivos = require('fs');
var ruta = require('url');
var procesador = require('querystring');
var path = require('path');

servidor.createServer((req, res) => {
    let rutaArchivo = '';
    let rutaCompleta = ruta.parse(req.url, true);
    let fecha = new Date();

    const leerArchivo = (archivo, callback) => {
        archivos.readFile(path.join(__dirname, 'plantillas', archivo), 'UTF-8', callback);
    };

    if(req.url.match("\.css$")){
      let cssPath = path.join(__dirname, req.url);
      let fileStream = archivos.createReadStream(cssPath, "UTF-8");
      res.writeHead(200, {"Content-Type": "text/css"});
      fileStream.pipe(res);
      return;
    } else {
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
        case "/procesa":
          rutaArchivo = 'procesa.html';
          break;
        default:
          rutaArchivo = 'error404.html';
          break;
      }

      let contenidoHeader = '';
      let contenidoFooter = '';

      leerArchivo('header.html', (err, data)=> {
        if(!err) contenidoHeader = data;

        leerArchivo('footer.html', (err, data) => {
          if(!err) contenidoFooter = data;

          archivos.readFile(rutaArchivo, (err, data) => {
            if (err) {
                archivos.readFile('error404.html', (err, data) => {
                  if(err){
                    res.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
                    res.end("404 - Página no encontrada");
                  }else{
                    res.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
                    res.end(data);
                  }
                });
            } else {
                res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
                res.end(contenidoHeader + data + contenidoFooter);
                if(req.url != "/favicon.ico"){
                    archivos.appendFile('registro.txt', fecha.getFullYear()+ "," + fecha.getMonth() + "," + fecha.getDate()+ "," + fecha.getHours() + "," + fecha.getMinutes() + "," + fecha.getSeconds() + "," + rutaCompleta.host+"," + rutaCompleta.pathname+"," + rutaCompleta.search + "," + req.url+"\n", (err)=>{
                      if(err) throw err;
                    });
                }
                if(req.url == "/procesa"){
                  let datos = '';
                  req.on('data', parte => datos += parte.toString());
                  req.on('end', ()=> {
                    let cadena = datos;
                    let procesado = procesador.parse(cadena);
                    console.log(procesado);
                  })
                }
            }    
          });

        });

      });
    }
}).listen(80, () => console.log("Servidor corriendo en el puerto :80"));