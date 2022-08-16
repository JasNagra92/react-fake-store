import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Store from './Store';
import Nav from './Nav';
import ShoppingCart from './ShoppingCart';
import { ShoppingCartProvider } from './ShoppingCartContext';


const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <ShoppingCartProvider >
        <Nav />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/store" element={<Store />} />
          <Route path="/Cart" element={<ShoppingCart />} />
        </Routes>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
};
export default RouteSwitch;
