function Message({ text }) {
  // Si no hay ningún mensaje en el estado, no renderiza nada
  if (!text) return null;

  // Si hay un mensaje, lo muestra en pantalla
  return (
    <p><strong>{text}</strong></p>
  );
}

export default Message;
