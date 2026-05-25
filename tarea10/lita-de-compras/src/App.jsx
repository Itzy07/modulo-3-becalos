import { useState } from "react";

function App() {
  // Estado para la lista de productos (empieza vacío)
  const [productos, setProductos] = useState([]);
  // Estado para el texto del input
  const [input, setInput] = useState("");

  // Función para agregar un producto
  const agregar = () => {
    if (input === "") return;
    // Agrega el nuevo texto al arreglo y le asigna un ID único
    setProductos([...productos, { id: Date.now(), nombre: input }]);
    setInput(""); // Limpia el input
  };

  // Función para eliminar un producto
  const eliminar = (id) => {
    // Filtra la lista para quitar el producto seleccionado
    setProductos(productos.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h2>Lista de Compras</h2>
      
      {/* Input y botón para añadir */}
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button onClick={agregar}>Añadir</button>

      {/* Renderizado de la lista */}
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre}
            {/* El botón de cada producto ejecuta la función eliminar con su ID */}
            <button onClick={() => eliminar(producto.id)}>Eliminar</button>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
