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
    DELETE FROM entradas
    WHERE id = 1
    `, (err, result)=>{
    if(err) throw err;
    console.log("Se ha eliminado el registro");
  })
});