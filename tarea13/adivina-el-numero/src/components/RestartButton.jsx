function RestartButton({ onRestart }) {
  return (
    <button 
      onClick={onRestart} 
      style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
    >
      Reiniciar Juego
    </button>
  );
}

export default RestartButton;
