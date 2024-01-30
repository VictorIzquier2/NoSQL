document.getElementById('mi_boton').onclick = ()=>{
  console.log('Me pulsaste!')
}
document.getElementById('capturar_nombre').onclick = ()=>{
  console.log('¡Hola ' + document.getElementById('nombre').value + '!');
}

class Persona {
  constructor(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
  }
}

document.getElementById('capturar_nombre_apellido').onclick = ()=>{
  var datos_personales = []
  nombre_completo = document.getElementById('nombre_completo').value
  apellido = document.getElementById('apellido').value
  console.log('¡Hola ' + nombre_completo + ' ' + apellido +'!')
  
  // Insertar en Array
  datos_personales.push(nombre_completo, apellido)
  console.log('Datos personales: ' + datos_personales)
  
  // console table Persona
  const ME = new Persona(nombre_completo, apellido)
  console.table(ME)

  // Agenda
  var agenda = []
  agenda["Nombre"] = nombre_completo
  agenda["Apellido"] = apellido
  console.table(agenda)

  // Agenda multidimensional
  var agenda_multi = []
  agenda_multi[0] = []
  agenda_multi[0]['nombre'] = nombre_completo
  agenda_multi[0]['apellido'] = apellido

  agenda_multi[1] = []
  agenda_multi[1]['nombre'] = 'José Vicente'
  agenda_multi[1]['apellido'] = 'Carratalá'

  console.table(agenda_multi)

  // Agenda JSON
  agenda_json = {
    "nombre": nombre_completo,
    "apellido": apellido
  }
  console.table(agenda_json);

  // Lista JSON
  usuarios = [
    {"nombre": nombre_completo, "apellido": apellido},
    {"nombre": "José Vicente", "apellido": "Carratalá"}
  ];
  console.table(usuarios)
  
  // Objeto JSON + Array
  agenda_json_array = {
    "persona": [nombre_completo, apellido]
  }
  console.table(agenda_json_array)

  // array + JSON + Array
  agenda_array_json_array = [
    {"persona": [nombre_completo, apellido]},
    {"persona": ["José Vicente", "Carratalá"]}
  ]
  console.table(agenda_array_json_array)
}
