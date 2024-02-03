import { ElementoGUI } from "./ElementoGUI.js";

export class TecladoVirtual extends ElementoGUI{
  static _estiloCSS;
  
  static get estiloCSS(){
    return TecladoVirtual._estiloCSS;
  }
  static set estiloCSS(nuevoEstiloCSS){
    TecladoVirtual._estiloCSS = nuevoEstiloCSS
  }

  static validarTecla(evento){
    if(evento.key === 'Dead'){
      switch(evento.code){
        case "BracketLeft":
          return "BracketLeft"
        case "Quote":
          return "Quote"
        case " ":
          return "space"
        default:
          return evento.key;
      }
    }
    return evento.key;
  }
  static aplicarEstilo(idElemento, estiloCSS){
    let elemento = document.getElementById(idElemento.toLowerCase()); // Localizar id en el DOM
    if(elemento){
      elemento.classList.add(estiloCSS); // Si existe, aplicar estilo
    }
  }
  static eliminarEstilo(idElemento, estiloCSS){
    let elemento = document.getElementById(idElemento.toLowerCase()); // Localizar id en el DOM
    if(elemento){
      elemento.classList.remove(estiloCSS); // Si existe, aplicar estilo
    }
  } 
}