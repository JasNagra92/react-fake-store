import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import StoreDisplay from './StoreDisplay';
import Loading from './Loading';
import ShoppingCart from './ShoppingCart';
import '../styles/Store.css';

const Store = () => {
  const [categories, setCategories] = useState();
  const [showCart, setShowCart] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('electronics');
  const [shoppingCart, setShoppingCart] = useState([]);

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

  const handleCatSwitch = (string) => {
    setCurrentCategory(string);
  };

  const addItem = (item, n) => {
    item.quantity = n
    setShoppingCart([...shoppingCart, item])
    alert('Items Added to Cart')
  }
  const removeItem = (item) => {
    setShoppingCart(shoppingCart.filter(itemInCart => itemInCart.id !== item.id ))
  }

  return (
    <div className="store">
      <div className="cart">
        <button onClick={() => setShowCart(!showCart)}>Shopping Cart</button>
        <div>{shoppingCart.reduce((total, cur) => {
           return total + cur.quantity}, 0)}</div>
        {showCart && <ShoppingCart />}
      </div>

      <div className="sidebar">
        {categories === undefined ? (
          <Loading />
        ) : (
          <Sidebar categoryProps={categories} clickProps={handleCatSwitch} />
        )}
      </div>

      <div className="storedisplay">
        <StoreDisplay itemProps={currentCategory} addProps={addItem} minusProps={removeItem} />
      </div>
    </div>
  );
};

export default Store;
