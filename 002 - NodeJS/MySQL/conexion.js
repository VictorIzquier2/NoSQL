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
})