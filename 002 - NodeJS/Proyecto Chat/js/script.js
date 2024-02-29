// Módulo FrontEnd de JavaScript

const mensaje = document.getElementById('mensaje');
const mensajes = document.getElementById('mensajes');

const recibe = () => {
  fetch("/recibe")
  .then((res) => res.json())
  .then((res) => {
    mensajes.innerHTML = res.map(msn =>
      `<article class="respuesta">
        <p class="centrado w-sm-100"><span>Fecha: </span>${new Date(msn.fecha).toLocaleString()}</p>
        <p class="texto sombra"><strong>${msn.mensaje}</strong></p>
      </article>`).join('');
  })
  mensajes.scrollTop = mensajes.scrollHeight;
}

window.onload = (e) => {
  mensaje.onkeydown = (e) => {
    if (e.key === 'Enter' && mensaje.value.trim() !== '') {
      let envia = e.target.value;
      fetch('/envia?mensaje=' + encodeURIComponent(envia))
      .then(()=>{
        mensaje.value = '';
        recibe(); // Llamar a recibe() actualiza la lista de mensajes
      })
      .catch((error) => console.error('Error: ', error));
    }
  };
};
