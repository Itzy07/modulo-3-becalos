//. ¡Será el centro de comunicaciones de nuestra expedición! ¡Conectando con la base!
const planetas = require('./planetas'); // aca llamo a mi modulo de planetas.js, 
// que es donde tengo la informacion de los planetas, y lo guardo en una variable llamada planetas
// Aquí mostraremos la información de los planetas

planetas.forEach(planeta=>{
    console.log(`Planeta: ${planeta.nombre}`);
    console.log(`Descripcion: ${planeta.descripcion}`)
    console.log(`Descubierto: ${planeta.descubiertoEn}`);
    console.log('--------');

});
