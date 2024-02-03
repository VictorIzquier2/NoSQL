

export class Marcador{
  static _evento;
  static _teclaspulsadas;

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
    tiempoInicio = teclaspulsadas[0]['epoch']
    diferenciaTiempo = (tiempoFinal * 1 - tiempoInicio * 1)/1000
    nTeclasPulsadas = teclaspulsadas.length
    pulsacionesPorMinuto = nTeclasPulsadas/(diferenciaTiempo/60);
    pulsacionesPorMinuto = Math.ceil(pulsacionesPorMinuto)
    document.getElementById(idElemento).innerHTML = `Pulsaciones por Minuto: ${pulsacionesPorMinuto}`;
    return pulsacionesPorMinuto;
  }
}