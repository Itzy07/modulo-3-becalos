// Datos iniciales de libros en formato JSON
let biblioteca = {
    "libros": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true }
    ]
};

// Función para simular la lectura de datos (asimilar la lectura de un archivo JSON)
function leerDatos(callback) {
    setTimeout(() => {
        const datos= (biblioteca); // Simula la lectura de datos desde un "archivo"
        callback(biblioteca);
    }, 1000);// simula rettraso de un segundos
}

// Función para mostrar todos los libros en consola
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("Inventario de libros:");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
    });
}


// Función para agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible) {
    const nuevoLibro = { titulo, autor, genero, disponible };
    nuevoLibro.id = biblioteca.libros.length + 1; // Asignar un ID único basado en la longitud actual del array
    // Aquí falta la simulación de escribir el libro en el "archivo" (es decir, agregarlo al objeto)
    setTimeout(() => {
        // Pista: deberías agregar el nuevo libro a `biblioteca.libros`
        biblioteca.libros.push(nuevoLibro);
    }, 1000);
}

// Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado) {
     // Simula un retraso antes de actualizar la disponibilidad
     setTimeout(() => {
        // Pista: busca el libro por título y cambia la propiedad 'disponible' a nuevoEstado
        const libro = biblioteca.libros.find((l) => l.titulo === titulo);
        if (libro) {
            libro.disponible = nuevoEstado;
        }
    }, 1000);
}


// 1. Mostramos el estado inicial
console.log("--- Cargando estado inicial ---");
mostrarLibros();

// 2. Ejecutamos las acciones (que tardan 1 segundo)
agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true);
actualizarDisponibilidad("1984", false);

// 3. Esperamos 2 segundos para dar tiempo a que las acciones terminen y mostramos el resultado
setTimeout(() => {
    console.log("\n--- Inventario Final (Tras cambios) ---");
    mostrarLibros();
}, 2500);
