

export class Grafica{
  static _idElemento;
  static _contador = 0;
  static _pulsacionesPorMinuto;

  static get idElemento(){
    return Grafica._idElemento;
  }
  static set idElemento(nuevoIdElemento){
    Grafica._idElemento = nuevoIdElemento;
  }

  static get contador(){
    return Grafica._contador;
  }
  static set contador(nuevoContador){
    Grafica._contador = nuevoContador;
  }

  static get pulsacionesPorMinuto(){
    return Grafica._pulsacionesPorMinuto;
  }
  static set pulsacionesPorMinuto(nuevoPPM){
    Grafica._pulsacionesPorMinuto = nuevoPPM;
  }

  static dibujarPPM(idElemento, pulsacionesPorMinuto){
    let contexto = document.getElementById(idElemento).getContext("2d");
    this.contador++;
    contexto.fillRect(this.contador, 128, 1, 0 - pulsacionesPorMinuto/5);
  } 
}