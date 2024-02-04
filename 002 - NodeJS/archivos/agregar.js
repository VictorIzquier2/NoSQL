var archivos = require('fs');
archivos.appendFile('nuevo.txt', '\nEste es mi contenido agregado', (err, data)=> {
  if(err){ throw err;}
  console.log("Misión cumplida!");
});