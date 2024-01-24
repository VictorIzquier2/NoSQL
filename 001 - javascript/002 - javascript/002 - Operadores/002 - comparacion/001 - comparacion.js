// Obtener los valores y convertirlos a números
function comparar(){
  cadena1 = document.getElementById("cadena1").value;
  cadena2 = document.getElementById("cadena2").value;

  // Comprobar si alguno de los valores es nulo
  if(cadena1 == null || cadena2 == null){
    console.log("Una o ambas cadenas son nulas");
    return;
  }
  // Realizar la comparacion
  var resultado = cadena1.localeCompare(cadena2)
  switch (resultado) {
    case 0:
      document.getElementById("destino").innerHTML = "Resultado: ";
      document.getElementById("destino").innerHTML += "Son iguales";
      break;
    case 1:
    case -1:
      document.getElementById("destino").innerHTML = "Resultado: ";
      document.getElementById("destino").innerHTML += "No son iguales";
    default:
      console.log("Hubo un error")
      break;
  }
  
  // Mostrar la suma en la consola y en la página
 
}
