// Styles
import './styles/global-variables.css';
import './styles/App.css';
// Dependencies
import { Outlet } from 'react-router-dom';
// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// Contexts
import MediaQueryProvider from './context/MediaQueryContext';

function App() {
  return (
    <MediaQueryProvider>
      <Header />
      {/* // Routes come from main.tsx */}
      <Outlet />
      <Footer />
    </MediaQueryProvider>
  );
}

export default App;