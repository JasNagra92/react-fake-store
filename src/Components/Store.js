import React, { useState } from 'react';
import Sidebar from './Sidebar';
import StoreDisplay from './StoreDisplay';
import ShoppingCart from './ShoppingCart';
import '../styles/Store.css';

const Store = () => {
  const [showCart, setShowCart] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('electronics');

  const handleCatSwitch = (string) => {
    setCurrentCategory(string);
  };

  return (
    <div className="store">
      <div className="cart">
        <button onClick={() => setShowCart(!showCart)}>Shopping Cart</button>
        {showCart && <ShoppingCart />}
      </div>

      <div className="sidebar">
        <Sidebar clickProps={handleCatSwitch} />
      </div>

      <div className="storedisplay">
        <StoreDisplay itemProps={currentCategory} />
      </div>
    </div>
  );
};

export default Store;
