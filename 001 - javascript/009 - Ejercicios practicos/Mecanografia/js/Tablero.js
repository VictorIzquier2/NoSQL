import { TECLAS_EXCLUIDAS } from "./TECLAS_EXCLUIDAS.js";

export class Tablero{
  static _evento;
  static _idElemento;

  static get evento(){
    return Tablero._evento;
  }
  static set evento(nuevoEvento){
    Tablero._evento = nuevoEvento;
  }

  static get idElemento(){
    return Tablero._idElemento;
  }
  static set idElemento(nuevoIdElemento){
    Tablero._idElemento = nuevoIdElemento;
  }

  static escribir(evento, idElemento){
    let tecla = evento.key;
    if(TECLAS_EXCLUIDAS.includes(tecla)){
      console.clear()
      console.table(tecla + " presionada, acción excluída.")
      return;
    }else{
      if(tecla === 'space'){tecla = " "}
      document.getElementById(idElemento).innerHTML += tecla; 
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