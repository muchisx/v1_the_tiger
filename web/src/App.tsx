import './styles/global-variables.css';
import './styles/App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Playground from './pages/Playground';

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/playground">Playground</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
