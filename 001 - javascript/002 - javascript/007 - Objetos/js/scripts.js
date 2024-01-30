import {Circulo} from './Circulo.js';

document.getElementById('dibujar').onclick = ()=> {
  const radio = document.getElementById('radio').value;
  var recuadro = document.getElementById('recuadro');
  var respuesta = document.getElementById('respuesta');
  var parrafo1;
  var parrafo2;
  
  const miCirculo = new Circulo(radio);
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