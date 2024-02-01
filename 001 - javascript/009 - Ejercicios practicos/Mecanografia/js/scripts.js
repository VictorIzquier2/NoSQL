
window.onload = function(){
  var teclaspulsadas = [] // Teclas mostradas
  var teclasExcluidas = ["Shift", "Control", "Meta", "Alt", "AltGraph", "Dead", "Quote", "BracketLeft", "Enter", "Space", "Backspace", "Insert", "Home", "PageUp", "End", "Delete", "PageDown", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]; // Teclas ocultadas
  var textoEscrito;
  var tiempoInicio, tiempoFinal, diferenciaTiempo;
  var nTeclasPulsadas, pulsacionesPorMinuto;

  // Al pulsar una tecla
  document.onkeydown = (e)=> {
    var tecla, minuscula, elemento;
    
    // Código actual de teclas (keyCode desfasado)
    tecla = e.key;
    
    if (tecla === "Backspace"){ // Borrar caracteres
      e.preventDefault();
      textoEscrito = document.getElementById('texto_escrito').innerHTML;
      document.getElementById('texto_escrito').innerHTML = textoEscrito.slice(0, -1);
    }
 
    // Si las teclas son de acentos UTF-8 (e.code)
    if(tecla === "Dead"){
      switch (e.code) {
        case "BracketLeft":
          tecla = "BracketLeft"
          break;
        case "Quote":
          tecla = "Quote"
          break;
      }
    }
    if(tecla === " "){tecla = "space"}

    // Pasamos a minúsculas
    minuscula = tecla.toLowerCase();
    elemento = document.getElementById(minuscula); // Localizar id en el DOM
    if(elemento){
      elemento.classList.add('tecla_correcta'); // Si existe, aplicar estilo
    }
    if (teclasExcluidas.includes(tecla)){ // comprobar teclas excluidas
      console.clear()
      console.table(teclaspulsadas)
      console.table(tecla + " presionada, acción excluída.");
      return;
    }else{
      if(tecla === "space"){tecla = " "}
      document.getElementById('texto_escrito').innerHTML += tecla; // Escribir
    }
    
    teclaspulsadas.push({"tecla": tecla, "epoch":  Date.now()}) // Registrar
    
    // Pulsaciones por minuto
    tiempoFinal = teclaspulsadas[teclaspulsadas.length-1]["epoch"]
    tiempoInicio = teclaspulsadas[0]['epoch']
    diferenciaTiempo = (tiempoFinal * 1 - tiempoInicio * 1)/1000
    nTeclasPulsadas = teclaspulsadas.length
    pulsacionesPorMinuto = nTeclasPulsadas/(diferenciaTiempo/60);
    pulsacionesPorMinuto = Math.ceil(pulsacionesPorMinuto)
    
    console.clear()
    console.table(teclaspulsadas)
    console.log("Tiempo final: " + tiempoFinal)
    console.log("Tiempo de inicio: " + tiempoInicio)
    console.log("La diferencia es de: " + diferenciaTiempo)
    console.log("Nº de teclas pulsadas: " + nTeclasPulsadas)
    console.log("Nº de pulsaciones por minuto: " + pulsacionesPorMinuto)

    document.getElementById('pulsaciones_minuto').innerHTML = `Pulsaciones por Minuto: ${pulsacionesPorMinuto}`
    
    const limpiarTexto = (idElemento)=> {
      const altoDocumento = document.documentElement.scrollHeight;
      const alturaPantalla = window.innerHeight;

      if(altoDocumento > alturaPantalla){
        document.getElementById(idElemento).innerHTML = '';
      }
    }

    limpiarTexto('texto_escrito');
    
  }
  document.onkeyup = (e)=> {
    var tecla, minuscula, elemento;
    tecla = e.key;

    if(tecla === "Dead"){ // Comprobar acentos UTF-8
      switch (e.code) {
        case "BracketLeft":
          tecla = "BracketLeft"
          break;
        case "Quote":
          tecla = "Quote"
          break;
      }
    }
    if(tecla === " "){tecla = "space"}
    // Pasar a minúsculas
    minuscula = tecla.toLowerCase();
    elemento = document.getElementById(minuscula) // Localizar en el DOM
    if(elemento){
      elemento.classList.remove('tecla_correcta') // Quitar estilo
    }
  }
  document.addEventListener('keydown', (e) => {
    console.log(`Key: ${e.key}, KeyCode: ${e.code}`);
  });
}