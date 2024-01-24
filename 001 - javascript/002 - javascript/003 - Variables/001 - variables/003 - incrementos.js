// Obtener los valores y convertirlos a números
function variacion(){
  cifra = parseInt(document.getElementById("cifra").value);
  sumando = parseInt(document.getElementById("sumando").value);
  // Comprobar si el valor es un número
  if(isNaN(cifra) || isNaN(sumando)){
    console.log("Uno o ambos valores introducidos no es un número");
    return;
  }
  // Incrementar
  cifra += sumando;
  document.getElementById('cifra').value = cifra
}

function sumarUno(){
  cifra = parseInt(document.getElementById("cifra").value);

  // Comprobar si el valor es un número
  if(isNaN(cifra)){
    console.log("El valor introducido no es una cifra");
    return;
  }
  // Decrementar
  cifra++;
  document.getElementById('cifra').value = cifra

}

function restarUno(){
  cifra = parseInt(document.getElementById("cifra").value);

  // Comprobar si el valor es un número
  if(isNaN(cifra)){
    console.log("El valor introducido no es una cifra");
    return;
  }
  // Decrementar
  cifra--;
  document.getElementById('cifra').value = cifra

}