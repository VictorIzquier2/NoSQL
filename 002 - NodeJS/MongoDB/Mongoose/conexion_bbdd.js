var mongoose = require('mongoose');

const conexion = 'mongodb://127.0.0.1/contacto'

mongoose.connect(conexion)
  .then(()=> {
    console.log("Conectado a Mongodb");
  });