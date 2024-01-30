

export class Circulo{
  constructor(radio){
    this._radio = radio;
  }
  calcularArea(){
    return Math.PI * Math.pow(this.radio, 2);
  }
  calcularCircunsferencia(){
    return 2 * Math.PI * this.radio
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
  dibujar(idCanvas){
    const canvas = document.getElementById(idCanvas);
    console.log(canvas)
    if(canvas.getContext){
      const ctx = canvas.getContext('2d');
      console.log(ctx)
      const x = canvas.width / 2;
      const y = canvas.height / 2;

      // Limpiar el canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.beginPath();
      ctx.arc(x, y, this.radio, 0, 2 * Math.PI)
      //ctx.fillStyle = color;
      //ctx.fill();
      ctx.stroke();
    }else{
      console.log("Error: Canvas no soportado en este navegador.")
    }
  }
  toString(){
    return `Círculo - Radio: ${this.radio}`
  }
}