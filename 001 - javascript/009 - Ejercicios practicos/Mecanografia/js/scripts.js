
window.onload = function(){
  var teclaspulsadas = [] // Teclas mostradas
  const TECLAS_EXCLUIDAS = ["Shift", "Control", "Meta", "Alt", "AltGraph", "Dead", "Quote", "BracketLeft", "Enter", "Space", "Backspace", "Insert", "Home", "PageUp", "End", "Delete", "PageDown", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]; // Teclas ocultadas
  var contexto = document.getElementById('lienzo').getContext("2d");
  var contador = 0;
  var textoEscrito;
  var tiempoInicio, tiempoFinal, diferenciaTiempo;
  var nTeclasPulsadas, pulsacionesPorMinuto;

  // Al pulsar una tecla
  document.onkeydown = (e)=> {
    var tecla, minuscula, elemento;
    
    // Código actual de teclas (keyCode desfasado)
    tecla = e.key;

    const validarTecla = (tecla)=>{

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
      return tecla;
    }

    const aplicarEstilo = (idElemento, estiloCSS)=>{
      elemento = document.getElementById(idElemento); // Localizar id en el DOM
      if(elemento){
        elemento.classList.add(estiloCSS); // Si existe, aplicar estilo
      }

    }

    const escribirTablero = (tecla)=> {
      if (TECLAS_EXCLUIDAS.includes(tecla)){ // comprobar teclas excluidas
        console.clear()
        console.table(tecla + " presionada, acción excluída.");
        return;
      }else{
        if(tecla === "space"){tecla = " "}
        document.getElementById('texto_escrito').innerHTML += tecla; // Escribir
        teclaspulsadas.push({"tecla": tecla, "epoch":  Date.now()}) // Registrar
      }
    }

    const escribirPPM = (teclaspulsadas)=>{
      // Pulsaciones por minuto
      tiempoFinal = teclaspulsadas[teclaspulsadas.length-1]["epoch"]
      tiempoInicio = teclaspulsadas[0]['epoch']
      diferenciaTiempo = (tiempoFinal * 1 - tiempoInicio * 1)/1000
      nTeclasPulsadas = teclaspulsadas.length
      pulsacionesPorMinuto = nTeclasPulsadas/(diferenciaTiempo/60);
      pulsacionesPorMinuto = Math.ceil(pulsacionesPorMinuto)
      document.getElementById('pulsaciones_minuto').innerHTML = `Pulsaciones por Minuto: ${pulsacionesPorMinuto}`;
    }

    // Pasamos a minúsculas
    minuscula = validarTecla(tecla).toLowerCase();
    aplicarEstilo(minuscula, 'tecla_correcta');
    escribirTablero(tecla);    
    escribirPPM(teclaspulsadas);
    
    contador++;
    contexto.fillRect(contador, 128, 1, 0 - pulsacionesPorMinuto/5)
    
    // Mostrar datos por consola
    console.clear()
    console.table(teclaspulsadas)
    console.log("Tiempo final: " + tiempoFinal)
    console.log("Tiempo de inicio: " + tiempoInicio)
    console.log("La diferencia es de: " + diferenciaTiempo)
    console.log("Nº de teclas pulsadas: " + nTeclasPulsadas)
    console.log("Nº de pulsaciones por minuto: " + pulsacionesPorMinuto)

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