// Dependencies
import { Analytics } from '@vercel/analytics/react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
// Styles
import './styles/global-variables.css';
import './styles/App.css';
// Components
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Badge from '@components/shared/Badge/Badge';
// Contexts
import MediaQueryProvider from '@context/MediaQueryContext';

import { ReactComponent as ShopifyBag } from '@assets/svgs/shopify_glyph.svg';

function App() {
  return (
    <MediaQueryProvider>
      <Analytics />
      <ScrollRestoration />
      <Header />
      {/* // Routes come from main.tsx */}
      <Outlet />
      <Badge
        Icon={ShopifyBag}
        style={{
          position: 'fixed',
          bottom: '80px',
          right: '-40px',
          transform: 'rotate(90deg)',
          WebkitTransformOrigin: '52% 51%',
        }}
      >
        Shopify Partner
      </Badge>
      <Footer />
    </MediaQueryProvider>
  );
}

export default App;
