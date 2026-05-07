//PARA NOMBRE Y CORRREO
document.getElementById('myform').addEventListener('submit', function(event) {
 event.preventDefault(); // Evita el envío automático del formulario

 //DEFINIR VARIABLES
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const telefono = document.getElementById('telefono').value;
const intereses= document.querySelectorAll('input[name="intereses"]:checked');
const fecha= document.getElementById('fecha').value;
const horario = document.querySelector('input[name="horario"]:checked')?.value || "";
/*?.value:El ?. se llama Optional Chaining. Sirve para que, si el usuario no ha marcado nada, 
el código no "explote" (no marque error) y simplemente devuelva que no hay nada.
 El .value saca el texto (ej. "tarde").
|| "":Es un plan de respaldo. 
Si todo lo anterior es nulo (nadie hizo clic en nada), guarda un texto vacío "" en lugar de un error.
 */
const hora= document.getElementById('hora').value;
const inputArchivo = document.getElementById('archivo');

// VALIDACCION CORRECTA DE INFORMACION
if (name === '' || email === '' || telefono === '' || intereses.length === 0 || fecha === '' || horario === '' || hora === '') {
    alert('Por favor, completa todos los campos obligatorios.');
    return;
}

    Swal.fire({
  title: '¡Registro exitoso! 🤩',
  text: 'Tu formulario se envió correctamente.',
  icon: 'success',
  confirmButtonText: 'Genial'
});
});