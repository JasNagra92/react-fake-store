import React, { useContext } from 'react';
import '../styles/Nav.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { ShoppingCartContext } from './ShoppingCartContext';

const Nav = () => {
  const [ShoppingCart, setShoppingCart] = useContext(ShoppingCartContext);
  return (
    <nav>
      <h1 className="title">Nagra Random Goods Store</h1>
      <div className="linkdiv">
        <Link to="/">
          <h1>Home</h1>
        </Link>

        <Link to="/Store">
          <h1>Store</h1>
        </Link>

        <Link to="/Cart" style={{ display: 'flex', alignItems: 'center' }}>
          <FaShoppingCart size="30" />{' '}
          <p className="itemcount">{ShoppingCart.length}</p>
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
