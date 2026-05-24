import Tarjeta from './Tarjeta';

function App() {
  return (
    <div>
      {/*Primera Tarjeta*/ }
      <Tarjeta
        nombre= "Itzel Gomez"
        profesion= "Desarrolladora web"
        mensaje= "¡Bienvenido a mi tarjeta de presentación!"
      />
      {/* Segunda Tarjeta */}
      <Tarjeta
        nombre="Andres Lazaro"
        profesion= "Diseñador gráfico"
        mensaje= "¡Hola! Soy un apasionado del diseño."
      />


    </div>
  );
}

export default App;