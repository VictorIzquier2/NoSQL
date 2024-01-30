

// «Buenas prácticas» Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', ()=> {
  var contenedor = document.getElementById('contenedor1');
  var contenedor2 = document.getElementById('contenedor2');
  var contenedor3 = document.getElementById('contenedor3');
  
  var meses = [
    {"nombre": "Enero", "dias": 31},
    {"nombre": "Febrero", "dias": 28},
    {"nombre": "Marzo", "dias": 31},
    {"nombre": "Abril", "dias": 30},
    {"nombre": "Mayo", "dias": 31},
    {"nombre": "Junio", "dias": 30},
    {"nombre": "Julio", "dias": 31},
    {"nombre": "Agosto", "dias": 31},
    {"nombre": "Septiembre", "dias": 30},
    {"nombre": "Octubre", "dias": 31},
    {"nombre": "Noviembre", "dias": 30},
    {"nombre": "Diciembre", "dias": 31},
  ]

  for(let dia = 1; dia <= 30; dia++){
    var divDia = document.createElement('div');
    divDia.className = 'dia';
    divDia.textContent = dia;
    
    contenedor.appendChild(divDia);
  }

  for(let mes = 1; mes <= 12; mes++){
    var divMes = document.createElement('div');
    divMes.className = 'mes';

    var h1Mes = document.createElement('h1');
    h1Mes.textContent = meses[mes-1].nombre;

    var divDias = document.createElement('div');
    divDias.className = 'dias'

    contenedor2.appendChild(divMes)
    divMes.appendChild(h1Mes)
    divMes.appendChild(divDias)

    for(let dia = 1; dia <= meses[mes-1].dias; dia++){
      var divDia = document.createElement('div');
      divDia.className = 'dia';
      divDia.textContent = dia;

      divDias.appendChild(divDia)

    }
  }
  let dia = 1;
  while(dia <= 30){
    var divDia = document.createElement('div');
    divDia.className = 'dia';
    divDia.textContent = dia;
    
    contenedor3.appendChild(divDia);
    dia++
  }
})

document.getElementById('comprobar_edad').onclick = ()=>{
  var contenedor4 = document.getElementById('contenedor4');
  var edad = parseInt(document.getElementById('edad').value);
  var respuesta = document.getElementById('respuesta_edad');
  var parrafo;

  if(!respuesta){
    respuesta = document.createElement('div');
    respuesta.id = 'respuesta_edad';
    respuesta.className = 'respuesta';
    contenedor4.appendChild(respuesta)
  }else{
    respuesta.innerHTML = '';
  }
  
  parrafo = document.createElement('p');
  
  if(edad >= 0 && edad < 18){
    parrafo.textContent = "Eres menor de edad"
  }else if(edad >= 18 && edad < 30){
    parrafo.textContent = "Eres joven"
  }else if(edad >= 30 && edad < 65){
    parrafo.textContent = "Ya no eres joven"
  }else if(edad >= 65 ){
    parrafo.textContent = "Eres mayor"
  }else{
    parrafo.textContent = "Edad incorrecta"
  }
  
  respuesta.appendChild(parrafo);
}

document.getElementById('comprobar_dia_semana').onclick = ()=>{
  var contenedor5 = document.getElementById('contenedor5');
  var dia_semana = document.getElementById('dia_semana').value;
  var respuesta = document.getElementById('respuesta_dia_semana');
  var parrafo;

  if(!respuesta){
    respuesta = document.createElement('div');
    respuesta.id = 'respuesta_dia_semana';
    respuesta.className = 'respuesta';
    contenedor5.appendChild(respuesta)
  }else{
    respuesta.innerHTML = '';
  }
  
  parrafo = document.createElement('p');
  
  switch (dia_semana) {
    case "lunes":
    case "Lunes":
    case "1":
      parrafo.textContent = "Hoy es el peor día de la semana"
      break;
    case "martes":
    case "Martes":
    case "2":
      parrafo.textContent = "Hoy es el segundo peor día de la semana"
      break;
    case "miercoles":
    case "Miercoles":
    case "miércoles":
    case "Miércoles":
    case "3":
      parrafo.textContent = "Ya estamos a mitad de semana"
      break;
    case "jueves":
    case "Jueves":
    case "4":
      parrafo.textContent = "Ya casi es viernes"
      break;
    case "viernes":
    case "Viernes":
    case "5":
      parrafo.textContent = "Por fin es viernes"
      break;
    case "sabado":
    case "Sabado":
    case "sábado":
    case "Sábado":
    case "6":
      parrafo.textContent = "Hoy es el mejor día de la semana"
      break;
    case "domingo":
    case "Domingo":
    case "7":
      parrafo.textContent = "Parece mentira que mañana  ya es lunes"
      break;
    default:
      parrafo.textContent = "Yo no sé lo que has escrito, pero no es un día de la semana"
      break;
  }
  
  respuesta.appendChild(parrafo);
}

document.getElementById('comprobar_operacion').onclick = ()=>{
  var contenedor6 = document.getElementById('contenedor6');
  var cifra1 = document.getElementById('cifra1').value;
  var cifra2 = document.getElementById('cifra2').value;
  var operacion = document.getElementById('operacion').value;
  var respuesta = document.getElementById('respuesta_operacion');
  var parrafo;

  const operacionAritmetica = (operando1, operando2, operacion)=> {
    switch (operacion) {
      case "sumar":
        return operando1 + operando2
      case "restar":
        return operando1 - operando2
      case "multiplicar":
        return operando1 * operando2
      case "dividir":
        if(operando2 === 0){
          return 'Error: División por cero';
        }else{
          return operando1 / operando2
        }
      default:
        return 'Error: Selecciona una operación'
    }
  }

  if(!respuesta){
    respuesta = document.createElement('div');
    respuesta.id = 'respuesta_operacion';
    respuesta.className = 'respuesta';
    contenedor6.appendChild(respuesta)
  }else{
    respuesta.innerHTML = '';
  }
  
  parrafo = document.createElement('p');
  
  switch (operacion) {
    case "sumar":
      parrafo.textContent = `${cifra1} + ${cifra2} = ${operacionAritmetica(cifra1, cifra2, "sumar")}`
      break;
    case "restar":
      parrafo.textContent = `${cifra1} - ${cifra2} = ${operacionAritmetica(cifra1, cifra2, "restar")}`
      break;
    case "multiplicar":
      parrafo.textContent = `${cifra1} × ${cifra2} = ${operacionAritmetica(cifra1, cifra2, "multiplicar")}`
      break;
    case "dividir":
      parrafo.textContent = `${cifra1} / ${cifra2} = ${operacionAritmetica(cifra1, cifra2, "dividir")}`
      break;
    default:
      parrafo.textContent = `${operacion(cifra1, cifra2, "")}`
  }
  respuesta.appendChild(parrafo);
}

document.getElementById('guardar_cliente').onclick = ()=>{
  var contenedor7 = document.getElementById('contenedor7');
  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var sexo = document.querySelector('input[name="sexo"]:checked')?.value;
  var respuesta = document.getElementById('respuesta_cliente');
  var parrafo;
  
  const ALEATORIO = (min, max)=>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const AHORA = ()=>{
    var ahora = new Date();
    var registro = {
      "dia": ahora.getDate(),
      "mes": ahora.getMonth() + 1,
      "anho": ahora.getFullYear()
    };
    return registro;
  }

  class Cliente{
    constructor(nombre, apellido, sexo){
      this._id = ALEATORIO(1, 9999);
      this._nombre = nombre;
      this._apellido = apellido;
      this._sexo = sexo
      this._registro = AHORA()
    }
    get id(){
      return this._id;
    }
    set id(nuevoId){
      if(nuevoId > 0 && nuevoID < 10000){
        this._id = nuevoId
      }
    }
    get nombre(){
      return this._nombre;
    }
    set nombre(nuevoNombre){
      this._nombre = nuevoNombre;
    }
    get apellido(){
      return this._apellido;
    }
    set apellido(nuevoApellido){
      this._apellido = nuevoApellido
    }
    get sexo(){
      return this._sexo
    }
    set sexo(nuevoSexo){
      const valores = ["hombre", "mujer", "otro"];
      if(valores.includes(nuevoSexo)){
        this._sexo = nuevoSexo
      }else{
        throw new Error("El valor introducido no es válido.")
      }
    }
    toString(){
      return `Cliente ${this._id}: ${this._nombre} ${this._apellido}, Sexo: ${this._sexo}. Fecha de inscripción: ${this._registro['dia']}/${this._registro['mes']}/${this._registro['anho']}`;
    }
  }

  if(!respuesta){
    respuesta = document.createElement('div');
    respuesta.id = 'respuesta_cliente';
    respuesta.className = 'respuesta';
    contenedor7.appendChild(respuesta)
  }else{
    respuesta.innerHTML = '';
  }
  
  parrafo = document.createElement('p');
  
  const cliente = new Cliente(nombre, apellido, sexo);

  parrafo.textContent = cliente.toString();

  respuesta.appendChild(parrafo);
}