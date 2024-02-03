import { ElementoGUI } from "./ElementoGUI.js";

export class Marcador extends ElementoGUI{
  static _teclaspulsadas;

  static get teclaspulsadas(){
    return Marcador._teclaspulsadas;
  }
  static set teclaspulsadas(nuevasTeclasPulsadas){
    Marcador._teclaspulsadas = nuevasTeclasPulsadas
  }

  static anotarPPM(evento, idElemento, teclaspulsadas){
    let tiempoFinal, tiempoInicio, diferenciaTiempo;
    let nTeclasPulsadas, pulsacionesPorMinuto;

    teclaspulsadas.push({"tecla": evento.key, "epoch": Date.now()})
    tiempoFinal = teclaspulsadas[teclaspulsadas.length-1]["epoch"]
    tiempoInicio = teclaspulsadas[teclaspulsadas.length-11]['epoch']
    diferenciaTiempo = (tiempoFinal * 1 - tiempoInicio * 1)/1000
    nTeclasPulsadas = teclaspulsadas.length
    pulsacionesPorMinuto = 10/(diferenciaTiempo/60);
    pulsacionesPorMinuto = Math.ceil(pulsacionesPorMinuto)
    document.getElementById(idElemento).innerHTML = `Pulsaciones por Minuto: ${pulsacionesPorMinuto}`;
    return pulsacionesPorMinuto;
  }
}