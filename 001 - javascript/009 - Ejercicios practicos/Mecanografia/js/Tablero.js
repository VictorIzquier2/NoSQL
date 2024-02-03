import { ElementoGUI } from "./ElementoGUI.js";
import { TECLAS_EXCLUIDAS } from "./TECLAS_EXCLUIDAS.js";
import { Dictado } from "./Dictado.js";
export class Tablero extends ElementoGUI{

  static escribir(evento, idElementoDictado, idElementoTablero){
    let tecla = evento.key;
    if(TECLAS_EXCLUIDAS.includes(tecla)){
      console.clear()
      console.table(tecla + " presionada, acción excluída.")
      return;
    }else{
      if(tecla === 'space'){tecla = " "}
      this.comprobar(tecla, idElementoDictado, idElementoTablero);
    }
  }

  static comprobar(tecla, idElementoDictado, idElementoTablero){
    let textoDictado = Dictado.texto;
    let cursor = Dictado.cursor;
    let elementoTexto = document.getElementById(idElementoTablero);

    if(textoDictado[cursor].toLowerCase() === tecla.toLowerCase()){
      Dictado.incrementarCursor();
      elementoTexto.style.backgroundColor = "palegreen";
      if(Dictado.cursor ===  textoDictado.length){
        Dictado.siguienteLinea(idElementoDictado);
        elementoTexto.innerHTML = "";
        elementoTexto.style.backgroundColor = "";
      }else{
        elementoTexto.innerHTML = textoDictado.substr(0, cursor+1);
      }
    }else{
      elementoTexto.style.backgroundColor = "lightpink";
    }
  }

  static borrar(evento, idElemento){
    if(evento.key === "Backspace"){
      let texto = document.getElementById(idElemento).innerHTML;
      document.getElementById(idElemento).innerHTML = texto.slice(0, -1)
    }
  }
  static limpiar(idElemento){
    const altoDocumento = document.documentElement.scrollHeight;
    const alturaPantalla = window.innerHeight;

    if(altoDocumento > alturaPantalla){
      document.getElementById(idElemento).innerHTML = '';
    }
  }
}