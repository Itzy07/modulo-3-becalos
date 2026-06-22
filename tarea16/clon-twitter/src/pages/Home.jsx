
const Home = ({ user, logout }) => {
  return (
    <div>
      <h1>¡HOLA!, Bienvenido a Twitter</h1>
      {user && (
        <div>
          <p>Hola, {user.username}!</p>
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      )}
      {/* ... contenido de la página ... */}
    </div>
  );
};

export default Home;