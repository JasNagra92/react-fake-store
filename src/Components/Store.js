import React, { useState } from 'react';
import Sidebar from './Sidebar';
import StoreDisplay from './StoreDisplay';
import ShoppingCart from './ShoppingCart';
import '../styles/Store.css';

const Store = () => {
  const [currentCategory, setCurrentCategory] = useState('electronics');

  const handleCatSwitch = (string) => {
    setCurrentCategory(string);
  };

  return (
    <div className="store">
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
