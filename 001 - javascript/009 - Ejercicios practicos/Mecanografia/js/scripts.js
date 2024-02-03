import { TecladoVirtual } from "./TecladoVirtual.js";
import { Tablero } from "./Tablero.js";
import { Marcador } from "./Marcador.js";
import { Grafica } from "./Grafica.js";

window.onload = function(){
  var teclaspulsadas = [] // Teclas mostradas
  
  // Al pulsar una tecla
  document.onkeydown = (e)=> { 
    
    // Teclado
    TecladoVirtual.aplicarEstilo(TecladoVirtual.validarTecla(e), 'tecla_correcta');

    // Linea de escritura
    Tablero.escribir(e, 'texto_escrito');
    Tablero.borrar(e, 'texto_escrito');

    // PPM y Grafica
    Grafica.dibujarPPM('grafica', Marcador.anotarPPM(e, 'pulsaciones_minuto', teclaspulsadas))
    
    // Mostrar datos por consola
    console.clear()
    console.table(teclaspulsadas)

    Tablero.limpiar('texto_escrito');
    
  }
  document.onkeyup = (e)=> {

    // Teclado
    TecladoVirtual.eliminarEstilo(TecladoVirtual.validarTecla(e), 'tecla_correcta');
  }
  // document.addEventListener('keydown', (e) => {
  //   console.log(`Key: ${e.key}, KeyCode: ${e.code}`);
  // });
}