// Dependencies
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
// Styles
import './styles/global-variables.css';
import './styles/App.css';
// Components
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
// Contexts
import MediaQueryProvider from '@context/MediaQueryContext';

function App() {
  return (
    <MediaQueryProvider>
      <Analytics />
      <ScrollRestoration />
      <Header />
      {/* // Routes come from main.tsx */}
      <Outlet />
      <Footer />
    </MediaQueryProvider>
  );
}

export default App;
