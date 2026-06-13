
import { useReducer, useRef, useCallback, useEffect } from "react";

const initialState = { count: 0, history: [] };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { 
        count: state.count + 1, 
        history: [...state.history, `+1 (Nuevo valor: ${state.count + 1})`] 
      };
    case "decrement":
      return { 
        count: state.count - 1, 
        history: [...state.history, `-1 (Nuevo valor: ${state.count - 1})`] 
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
}


export default function CounterGame() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const incrementBtnRef = useRef(null);

  // Las funciones con useCallback se mueven DENTRO del componente
  const handleIncrement = useCallback(() => {
    dispatch({ type: "increment" });
  }, []); // dispatch nunca cambia de referencia, dependencia vacía es correcta

  const handleDecrement = useCallback(() => {
    dispatch({ type: "decrement" });
  }, []);

  const handleReset = useCallback(() => {
    dispatch({ type: "reset" });
  }, []);

  // Fijar el foco en el botón de incremento al renderizar por primera vez
  useEffect(() => {
    if (incrementBtnRef.current) {
      incrementBtnRef.current.focus();
    }
  }, []); // Array vacío para que solo se ejecute al montar el componente

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Contador: {state.count}</h2>
      
      {/*  Asignamos las funciones memorizadas al evento onClick */}
      <button ref={incrementBtnRef} onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>

      <h3>Historial de cambios:</h3>
      <ul>
        {state.history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}
