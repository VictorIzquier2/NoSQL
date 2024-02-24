var mysql = require('mysql');

var conexion = mysql.createConnection({
  host:"localhost",
  user:"nodejs",
  password:"nodejs",
  port:"3307"
});

conexion.connect(function(err){
  if(err) throw err;
  console.log("Conectado");
  conexion.query('CREATE DATABASE nodejs', (err, result)=>{
    if(err) throw err;
    console.log("Se ha creado la base de datos");
  })
});