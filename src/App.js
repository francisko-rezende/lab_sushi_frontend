import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { CartProvider } from './contexts/CartContext';
import Menu from './components/Menu';

import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import { ToastContainer } from 'react-toastify';
import { SearchProvider } from './contexts/SearchContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <SearchProvider>
          <Menu />
          <AppRoutes />
          <ToastContainer />
        </SearchProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
