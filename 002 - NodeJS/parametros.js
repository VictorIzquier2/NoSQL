var servidor = require('http');
var ruta = require('url')

servidor.createServer((req,res)=>{
  res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
  var parametros = ruta.parse(req.url, true).query;
  res.write("Tu nombre es: " + parametros.nombre);
  res.write("<br>");
  res.write("Tus apellidos son: " + parametros.apellidos);
  res.end('');
  
}).listen(80)