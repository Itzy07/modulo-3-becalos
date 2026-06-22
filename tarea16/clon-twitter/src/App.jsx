import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import "./App.css"; 
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username) => {
    const userdata = { username };
    setUser(userdata);
    localStorage.setItem("user", JSON.stringify(userdata));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Router>
       {/* MENÚ DE NAVEGACIÓN PRINCIPAL */}
        <nav className="navbar">
        <div className="nav-links">
          <Link to="/" className="link">Home</Link>
          {user && <Link to="/profile" className="link">Profile</Link>}
        </div>

        <div>
          {user ? (
            <button onClick={logout} className="logout-btn">
              Logout ({user.username})
            </button>
          ) : (
            <Link to="/login" className="login-link">Login</Link>
          )}
        </div>
      </nav>
      <Routes>
        {/*  RUTAS DE LA APLICACIÓN */}
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/profile" element={user ? <Profile user={user} /> : <Navigate to="/login" />} />
        <Route path="/" element={<Home user={user} logout={logout} />} />
      </Routes>
    </Router>
  );
};

export default App;
