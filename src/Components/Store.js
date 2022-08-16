import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import StoreDisplay from './StoreDisplay';
import Loading from './Loading';
import ShoppingCart from './ShoppingCart';
import '../styles/Store.css'

const Store = () => {
  const [categories, setCategories] = useState();
  const [showCart, setShowCart] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('electronics');

  const getCategories = async () => {
    const categoryData = await fetch(
      'https://fakestoreapi.com/products/categories'
    );
    const data = await categoryData.json();
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, [categories]);

  return (
    <div className="store">
      <div className="cart">
        <button onClick={() => setShowCart(!showCart)}>Shopping Cart</button>{' '}
        {showCart && <ShoppingCart />}
      </div>

      <div className="sidebar">
        {categories === undefined ? (
          <Loading />
        ) : (
          <Sidebar categoryProps={categories} />
        )}
      </div>

      <div className="storedisplay">
        <StoreDisplay itemProps={currentCategory} />
      </div>
    </div>
  );
};

export default Store;
