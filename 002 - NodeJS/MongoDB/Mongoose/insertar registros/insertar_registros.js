var mongoose = require('mongoose');

const conexion = 'mongodb://127.0.0.1/contacto'

const formularioSchema = new mongoose.Schema({
  nombre: String,
  asunto: String,
  mensaje: String,
  fecha: String
});

const Formulario = mongoose.model("Formulario", formularioSchema);

const nFormulario = new Formulario({
  nombre:"Rita",
  asunto:"Este es el quinto correo",
  mensaje:"In cillum nisi laborum quis occaecat sint est aliqua sunt voluptate cupidatat qui do",
  fecha:"2024-02-26"  
});

mongoose.connect(conexion)
  .then(()=> {
    console.log("Conectado a Mongodb");

    nFormulario.save()
    .then((formularios)=>{
      console.log(formularios);
    });
  });