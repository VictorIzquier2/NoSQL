

export class Circulo{
  constructor(x, y, radio, color) {
    this._x = x;
    this._y = y;
    this._radio = radio;
    this._color = color;
  }
  calcularArea(){
    return Math.PI * Math.pow(this.radio, 2);
  }
  calcularCircunsferencia(){
    return 2 * Math.PI * this.radio
  }
  get x(){
    return this._x;
  }
  set x(nuevaX){
    this._x = nuevaX;
  }
  get y(){
    return this._y;
  }
  set y(nuevaY){
    this._y = nuevaY
  }
  get radio(){
    return this._radio;
  }
  set radio(nuevoRadio){
    if(nuevoRadio > 0){
      this._radio = nuevoRadio;
      console.log("Círculo redimensionado correctamente");
    }else{
      console.log("Error: El nuevo radio debe ser un número positivo.");
    }
  }
  get color(){
    return this._color;
  }
  set color(nuevoColor){
    this._color = nuevoColor;
  }
  dibujar(idCanvas){
    const canvas = document.getElementById(idCanvas);
    if(canvas.getContext){
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.beginPath();
      ctx.arc(this._x, this._y, this.radio, 0, 2 * Math.PI)
      ctx.fillStyle = this._color;
      ctx.fill();
      ctx.stroke();
    }else{
      console.log("Error: Canvas no soportado en este navegador.")
    }
  }
  moverCirculo(evento, idCanvas){
    const tecla = evento.keyCode;
    const paso = 5;

    switch(tecla){
        case 37: // Izquierda
            this._x -= paso;
            break;
        case 38: // Arriba
            this._y -= paso;
            break;
        case 39: // Derecha
            this._x += paso;
            break;
        case 40: // Abajo
            this._y += paso;
            break;
    }
    this.dibujar(idCanvas);
}
  toString(){
    return `Círculo - Radio: ${this.radio}`
  }
}