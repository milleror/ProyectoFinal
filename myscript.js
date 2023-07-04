
// JavaScript
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que se envíe el formulario

    // Obtener los valores de los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telefono =document.getElementById('telefono').value;
    const message = document.getElementById('message').value;

    // Hacer algo con los valores del formulario
    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('telefono',telefono )
    console.log('Mensaje:', message);

    
    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";

    form.reset()
      // Aquí puedes enviar los datos del formulario a través de una solicitud AJAX o realizar otras acciones
}); 