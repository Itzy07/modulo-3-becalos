import { useState } from 'react';
import InputNumber from './InputNumber';
import Message from './Message';
import RestartButton from './RestartButton';

function Game() {
  // 1. Estados principales del juego
  const [numSecreto, setNumSecreto] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [intento, setIntento] = useState('');
  const [pista, setPista] = useState('');

  // 2. Lógica para verificar el número al presionar el botón
  const verificar = (e) => {
    e.preventDefault();
    const numero = parseInt(intento, 10);

    if (isNaN(numero)) {
      setPista('Por favor, ingresa un número.');
      return;
    }

    if (numero === numSecreto) {
      setPista('¡Correcto!');
    } else if (numero < numSecreto) {
      setPista('El número es mayor');
    } else {
      setPista('El número es menor');
    }
  };

  // 3. Lógica para reiniciar y generar un nuevo número aleatorio
  const reiniciar = () => {
    setNumSecreto(Math.floor(Math.random() * 100) + 1);
    setIntento('');
    setPista('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px', fontFamily: 'sans-serif' }}>
      <h1>Adivina el Número (1 al 100)</h1>
      
      {/* InputNumber captura la entrada del usuario */}
      <InputNumber 
        value={intento} 
        onChange={(e) => setIntento(e.target.value)} 
        onSubmit={verificar} 
      />
      
      {/* Message muestra la retroalimentación o pistas */}
      <Message text={pista} />
      
      {/* RestartButton aparece solo cuando el usuario adivina el número */}
      {pista === '¡Correcto!' && <RestartButton onRestart={reiniciar} />}
    </div>
  );
}

export default Game;
