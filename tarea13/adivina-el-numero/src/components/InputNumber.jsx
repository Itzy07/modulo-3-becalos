function InputNumber({ value, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} style={{ margin: '20px 0' }}>
      <input 
        type="number" 
        value={value} 
        onChange={onChange} 
        placeholder="Ingresa un número"
        style={{ padding: '8px', fontSize: '16px', marginRight: '8px' }}
      />
      <button type="submit" style={{ padding: '8px 16px', fontSize: '16px', cursor: 'pointer' }}>
        Probar
      </button>
    </form>
  );
}

export default InputNumber;
