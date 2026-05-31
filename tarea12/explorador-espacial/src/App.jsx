import React, { useState, useEffect, useMemo } from 'react';

import Planeta from './Planeta';

function App() {
  const [distancia, setDistancia]= useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave] = useState('En órbita');
  const [planetasVisitados] = useState(["Marte", "Júpiter", "Saturno"]);

  useEffect(() => {
    console.log("¡El panel está listo!"); // Montaje

    const intervalo = setInterval(() => { // Montaje
      setCombustible(prevCombustible => { // Simula consumo de combustible
   if (prevCombustible > 0) {
          setDistancia((prevDistancia) => prevDistancia + 10); // Aumenta la distancia
          return prevCombustible - 1; // Consume combustible
        }
        return 0; // Se queda sin combustible
      });
    }, 1000);


    return () => {
      clearInterval(intervalo); // Desmontaje
      console.log("El panel se ha apagado."); // Desmontaje
    };
  }, []);

  useEffect(() => {
    console.log("¡Combustible actualizado!"); // Actualización
  }, [combustible]);

  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]);

  return (
    <div>
      <h2>Panel de Control</h2>
      <p>{mensajeEstado}</p>
      <p>Combustible: {combustible}%</p>
      <p>Distancia: {distancia} km</p>
      {planetasVisitados.map((planeta, index) => (
        <Planeta key={index} nombre={planeta} />
      ))}
    </div>
  );
}



export default App
