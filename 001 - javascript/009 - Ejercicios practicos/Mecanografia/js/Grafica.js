import { ElementoGUI } from "./ElementoGUI.js";

const colorear = (valor)=> {
    var porcentaje = valor / 500;
    var rojo = 255 * (1 - porcentaje);
    var verde = 255 * porcentaje;
    var azul = 0;
    return `rgb(${Math.round(rojo)}, ${Math.round(verde)}, ${Math.round(azul)})`;
  } 

export class Grafica extends ElementoGUI{
  static _contador = 0;
  static _pulsacionesPorMinuto;

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
    contexto.fillStyle = colorear(pulsacionesPorMinuto)
    contexto.fillRect(this.contador, 128, 1, 0 - pulsacionesPorMinuto/5);
  }   
}