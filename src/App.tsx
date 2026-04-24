import { Routes, Route, Link } from 'react-router-dom';
import Stylekit from './pages/stylekit/Stylekit';

function App() {
  return (
    <div className="app">
      <nav style={{ padding: '1rem', background: '#f5f5f5' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/stylekit">Stylekit</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<div>Главная страница портфолио</div>} />
          <Route path="/stylekit" element={<Stylekit />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;