

// Obtener los valores y convertirlos a números
function calcularSuma(){
  cifra1 = parseInt(document.getElementById("cifra1").value);
  cifra2 = parseInt(document.getElementById("cifra2").value);

  // Comprobar si alguno de los valores es NaN
  if(isNaN(cifra1) || isNaN(cifra2)){
    console.log("Uno o ambos valores no son numéricos");
    return;
  }
  // Realizar la suma
  var suma = cifra1+cifra2;
  
  // Mostrar la suma en la consola y en la página
  console.log(suma);
  document.getElementById("destino").innerHTML = "Resultado: ";
  document.getElementById("destino").innerHTML += suma;
}
