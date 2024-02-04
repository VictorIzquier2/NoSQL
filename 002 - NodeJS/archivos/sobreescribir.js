var archivos = require('fs');
archivos.appendFile('nuevo.txt', 'Este es mi contenido', (err, data)=> {
  if(err){ throw err;}
  console.log("Misión cumplida!");
});