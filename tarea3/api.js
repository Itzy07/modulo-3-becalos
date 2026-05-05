// Implementa las Solicitudes con Fetch
const fetchBtn = document.getElementById('fetch-btn'); // Botón para iniciar la solicitud debe coincidir con el id del botón en tu HTML
const dataContainer = document.getElementById('data-container');

fetchBtn.addEventListener('click', () => {
  fetch('https://rickandmortyapi.com/api/character')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      return response.json();
    })
    .then(data => {
        //  Limpia el contenedor por si ya tenía contenido de una carga anterior
      dataContainer.innerHTML = '';

      //data.results es el arreglo que contiene los personajes
      data.results.forEach(character => {
         // crear un elemento (div) para cada personaje (tarjeta de HTML)
        const characterDiv = document.createElement('div');
        characterDiv.style.border = '1px solid #ccc';
        characterDiv.style.margin = '10px';
        characterDiv.style.padding = '10px';
        characterDiv.style.borderRadius = '8px';
        characterDiv.style.display = 'inline-block';
        characterDiv.style.textAlign = 'center';
        characterDiv.style.background='#0fb8eb';

         // Insertamos la información: nombre e imagen (con datos de la API)
        characterDiv.innerHTML = `
          <img src="${character.image}" alt="${character.name}" style="width: 150px; border-radius: 50%;">
          <h3>${character.name}</h3>
          <p>Estado: ${character.status}</p>
        `;

        // Agregar al contenedor principal del HTML
        dataContainer.appendChild(characterDiv);
      });
    })
        


      // Completar: renderizar datos en el contenedor
      // Pista: Usa `data.results` para iterar sobre los personajes obtenidos.

    .catch(error => {
      console.error('Error:', error);
      dataContainer.textContent = 'Hubo un error al obtener los datos.';
 });

 });
// Nota: Asegúrate de que el botón con id 'fetch-btn' y el contenedor con 
// id 'data-container' existan en tu HTML para que este código funcione correctamente.

//------------------------ Implementa las Solicitudes con Axios

// 1. Instala Axios o inclúyelo mediante una CDN:
//   <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> esto en el HTML
// 2. Escribe una función que utilice Axios para obtener los datos y manejarlos de manera similar a `fetch`.

const axiosBtn = document.getElementById('axios-btn');

axiosBtn.addEventListener('click', () => {
  axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
      const data = response.data; // extraemos los datos de la respuesta
      renderCharacters(data.results); // Llamamos a la función de renderizado con los personajes obtenidos
       // Llamamos a la función de renderizado pasando el arreglo de personajes
      // Pista: En Rick & Morty API, los personajes están en data.results
      // Completar: renderizar datos en el contenedor
      // Pista: Observa que Axios ya convierte la respuesta JSON, por lo que no necesitas usar `.json()`.
    })
    .catch(error => {
      console.error('Error:', error);
      dataContainer.textContent = 'Hubo un error al obtener los datos.';
    });
});

// esta es la función de renderizado!!!:Esta función es la que "dibuja" los personajes en el HTML,->
//  creando elementos dinámicamente y agregándolos al contenedor.
function renderCharacters(characters) {
  dataContainer.innerHTML = ''; //limpia el contenedor antes de agregar nuevos personajes
  characters.forEach(character => {
    const characterElement = document.createElement('div');
    //aca agregamos estilo para que se vea como tarjeta, puedes personalizarlo como quieras
    characterElement.style.border = '1px solid #ccc';
    characterElement.style.margin = '10px';
    characterElement.style.padding = '10px';
    characterElement.style.borderRadius = '8px';
    characterElement.style.display = 'inline-block';
    characterElement.style.textAlign = 'center';
    characterElement.style.background='#eb0fa5';


    characterElement.innerHTML = `
     <img src="${character.image}" alt="${character.name}" style="width: 150px; border-radius: 50%;">
     <h3>${character.name}</h3>
     <p>Estado: ${character.status}</p>
    `;
    dataContainer.appendChild(characterElement);
  });
}