import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/index';
import Temporizador from './pages/temporizador';
import Libros from './pages/libros';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/temporizador" element={<Temporizador />} />
        <Route path="/libros" element={<Libros />} />
      </Routes>
    </Router>
  );
}

export default App;
