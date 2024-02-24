var mysql = require('mysql');

var conexion = mysql.createConnection({
  host:"localhost",
  user:"nodejs",
  password:"nodejs",
  port:"3307",
  database:"nodejs"
});

conexion.connect(function(err){
  if(err) throw err;
  console.log("Conectado");
  conexion.query(`
    CREATE TABLE entradas
    ( 
      id INT AUTO_INCREMENT PRIMARY KEY,
      titulo VARCHAR(255),
      texto TEXT,
      fecha VARCHAR(255)
      )
    `, (err, result)=>{
    if(err) throw err;
    console.log("Se ha creado la tabla");
  })
});