import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Playground from './pages/Playground';
import About from './pages/About';
import Work from './pages/Work';
import Services from './pages/Services';
import WebDev from './pages/WebDev';
import Shopify from './pages/Shopify';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="playground" element={<Playground />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="services" element={<Services />} />
          <Route path="web-dev" element={<WebDev />} />
          <Route path="shopify" element={<Shopify />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
