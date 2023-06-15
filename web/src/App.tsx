// Styles
import './styles/global-variables.css';
import './styles/App.css';
// Dependencies
import { Route, Routes } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Playground from './pages/Playground';
import Header from './components/Header/Header';
import About from './pages/About';
import Work from './pages/Work';
import Footer from './components/Footer/Footer';
import Services from './pages/Services';
import WebDev from './pages/WebDev';
import Shopify from './pages/Shopify';
// Contexts
import MediaQueryProvider from './context/MediaQueryContext';

function App() {
  return (
    <MediaQueryProvider>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
        <Route path="/web-dev" element={<WebDev />} />
        <Route path="/shopify" element={<Shopify />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </MediaQueryProvider>
  );
}

export default App;
