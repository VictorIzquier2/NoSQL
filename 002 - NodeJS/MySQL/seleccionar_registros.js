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
    SELECT * FROM entradas ORDER BY id;
    `, (err, result)=>{
    if(err) throw err;
    console.log(result);
  })
});