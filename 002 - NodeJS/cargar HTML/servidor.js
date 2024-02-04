var servidor = require('http');
var archivos = require('fs')

servidor.createServer((req,res)=>{
  archivos.readFile('inicio.html', (err, data)=> {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
    res.write(data);
    res.end('');
  })
}).listen(80)