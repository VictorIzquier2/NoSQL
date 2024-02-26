var mongoose = require('mongoose');

const conexion = 'mongodb://127.0.0.1/contacto'

const formularioSchema = new mongoose.Schema({
  nombre: String,
  asunto: String,
  mensaje: String,
  fecha: String
});

const Formulario = mongoose.model("Formulario", formularioSchema);

mongoose.connect(conexion)
  .then(()=> {
    console.log("Conectado a Mongodb");

    // Listar elementos del formulario
    Formulario.find({})
      .exec()
      .then((formularios)=>{
        console.log(formularios);
      })
  });