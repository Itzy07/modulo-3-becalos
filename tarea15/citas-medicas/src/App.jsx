import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importación de las páginas 
import Home from './pages/Home';
import CitasList from './pages/CitasList';
import CitaDetalle from './pages/CitaDetalle';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        {/* / : Página de inicio */}
        <Route path="/" element={<Home />} />

        {/* /citas : Lista de citas médicas */}
        <Route path="/citas" element={<CitasList />} />

        {/* /cita/:id : Detalles de una cita específica */}
        <Route path="/cita/:id" element={<CitaDetalle />} />

        {/* /* : Página de error para rutas no existentes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
