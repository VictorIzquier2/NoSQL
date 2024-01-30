import {Circulo} from './Circulo.js';

let miCirculo;

document.getElementById('dibujar').onclick = ()=> {
  const radio = document.getElementById('radio').value;
  const color = document.getElementById('color').value;
  var recuadro = document.getElementById('recuadro');
  var respuesta = document.getElementById('respuesta');
  var parrafo1;
  var parrafo2;
  
  miCirculo = new Circulo(200, 200, radio, color);
  miCirculo.dibujar('miCanvas');

  if(!respuesta){
    respuesta = document.createElement('div');
    respuesta.id = 'respuesta';
    respuesta.className = 'respuesta';
    recuadro.appendChild(respuesta)
  }else{
    respuesta.innerHTML = '';
  }
  
  parrafo1 = document.createElement('p');
  parrafo2 = document.createElement('p')
  parrafo1.textContent = `Área: ${miCirculo.calcularArea()}`;
  parrafo2.textContent = `Circunsferencia: ${miCirculo.calcularCircunsferencia()}`;
  respuesta.appendChild(parrafo1); 
  respuesta.appendChild(parrafo2);
  
};

window.addEventListener('keydown', (evento)=>{
  if(miCirculo){
    miCirculo.moverCirculo(evento, 'miCanvas');
  }
});

document.getElementById('tecla').addEventListener('keydown', (evento)=> {
  const codigoAscii = evento.keyCode;
  document.getElementById('codigoAscii').textContent = `Código ASCII: ${codigoAscii}`
  document.getElementById('tecla').value = '';
});

document.getElementById('miCanvas').addEventListener('wheel', (evento)=>{
  var respuesta = document.getElementById('respuesta');
  var parrafo1;
  var parrafo2;

  if(evento.deltaY < 0){
    miCirculo.radio += 0.5;
  }else if(evento.deltaY > 0 && miCirculo.radio > 1) {
    miCirculo.radio -= 0.5;
  }

  miCirculo.dibujar('miCanvas');

   if(!respuesta){
    respuesta = document.createElement('div');
    respuesta.id = 'respuesta';
    respuesta.className = 'respuesta';
    recuadro.appendChild(respuesta)
  }else{
    respuesta.innerHTML = '';
  }
  
  parrafo1 = document.createElement('p');
  parrafo2 = document.createElement('p')
  parrafo1.textContent = `Área: ${miCirculo.calcularArea()}`;
  parrafo2.textContent = `Circunsferencia: ${miCirculo.calcularCircunsferencia()}`;
  respuesta.appendChild(parrafo1); 
  respuesta.appendChild(parrafo2);

});

document.getElementById('miCanvas').addEventListener('contextmenu', (evento)=>{
  
  const coloresBasicos = [
    "Black", "White", "Red", "Lime", "Blue", 
    "Yellow", "Cyan", "Magenta", "Silver", "Gray", 
    "Maroon", "Olive", "Green", "Purple", "Teal", 
    "Navy"
  ];

  evento.preventDefault();
  const colorAleatorio = coloresBasicos[Math.floor(Math.random() * coloresBasicos.length)];
  miCirculo.color = colorAleatorio;
  miCirculo.dibujar('miCanvas');

});

document.getElementById('miCanvas').addEventListener('dblclick', (evento)=>{
  const canvas = document.getElementById('miCanvas');
  const respuesta = document.getElementById('respuesta');
  const ctx = canvas.getContext('2d');

  document.getElementById('radio').value = ''
  document.getElementById('color').value  = ''
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if(respuesta){
    respuesta.innerHTML = '';
  }
});