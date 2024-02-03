

export class TecladoVirtual{
  static _evento;
  static _idElemento;
  static _estiloCSS;
  

  static get evento(){
    return TecladoVirtual._evento;
  }
  static set evento(nuevoEvento){
    TecladoVirtual._evento = nuevoEvento;
  }

  static get idElemento(){
    return TecladoVirtual._idElemento;
  }
  static set idElemento(nuevoIdElemento){
    TecladoVirtual._idElemento = nuevoIdElemento;
  }

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