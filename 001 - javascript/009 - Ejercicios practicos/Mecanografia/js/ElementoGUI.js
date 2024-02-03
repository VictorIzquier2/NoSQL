

export class ElementoGUI{
  static _evento;
  static _idElemento;

  static get evento(){
    return ElementoGUI._evento;
  }
  static set evento(nuevoEvento){
    ElementoGUI._evento = nuevoEvento;
  }

  static get idElemento(){
    return ElementoGUI._idElemento
  }
  static set idElemento(nuevoIdElemento){
    ElementoGUI._idElemento = nuevoIdElemento;
  }
}