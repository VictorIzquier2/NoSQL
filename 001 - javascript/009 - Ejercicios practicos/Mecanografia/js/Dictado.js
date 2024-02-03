import { ElementoGUI } from "./ElementoGUI.js";

export class Dictado extends ElementoGUI{
  static _cursor = 0;
  static _texto;
  static _lineas = []
  static _indiceLineaActual = 0;

  
  static get texto(){
    return Dictado._texto;
  }
  static set texto(nuevoTexto){
    Dictado._texto = nuevoTexto;
    Dictado._cursor = 0;
    
  }
  static get cursor(){
    return Dictado._cursor;
  }
  static incrementarCursor(){
    Dictado._cursor++;
  }

  static escribir(texto, idElemento){
    Dictado.texto = texto;
    document.getElementById(idElemento).innerHTML = texto;
  }
  
  static async cargarTextoDesdeApi(urlAPI, idElemento){
    try{
      const respuesta = await fetch(urlAPI);
      const datos = await respuesta.json();
      const texto = datos.body;
      Dictado._lineas = texto.split('\n');
      Dictado.escribir(Dictado._lineas[0], idElemento);
    }catch (error){
      console.error("Error al cargar el texto desde la API", error);
    }
  }

  static siguienteLinea(idElemento){
    Dictado._indiceLineaActual++;
    if(Dictado._indiceLineaActual < Dictado._lineas.length){
      Dictado._texto = Dictado._lineas[Dictado._indiceLineaActual];
      Dictado._cursor = 0;
      document.getElementById(idElemento).innerHTML = Dictado._texto;
    }else{
      document.getElementById(idElemento).innerHTML = "— FIN —";
    }
  }

  static actualizar(texto, cursor){
    var entrada = texto;
    var n = cursor;
    var textoColoreado;

    const aplicarColor = (text, n)=> {
      if(text.length <= n) {
        return `span style="color: crimson;">${text}</span>`;
      }else{
        let textoColoreado = `<span style="color: lime;">${text.substr(0, n)}</span>`;
        let restoTexto = text.substr(n)
        return textoColoreado + restoTexto;
      }
    }
    textoColoreado = aplicarColor(entrada, n);
    return textoColoreado;
  }

}