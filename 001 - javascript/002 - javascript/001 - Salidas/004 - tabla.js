

function Persona(nombre, apellido){
  this.nombre = nombre
  this.apellido = apellido
}

const ME = new Persona("Victor", "Izquierdo")

console.table(ME)