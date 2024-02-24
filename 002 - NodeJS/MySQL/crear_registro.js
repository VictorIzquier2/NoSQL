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
    INSERT INTO entradas VALUES(
      NULL,
      'Título de la entrada',
      'Texto de la entrada',
      '2023-08-14'
    )
    `, (err, result)=>{
    if(err) throw err;
    console.log("Se ha creado el registro");
  })
});