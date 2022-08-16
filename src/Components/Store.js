import React, {useState,useEffect} from 'react';
import Sidebar from './Sidebar';
import StoreDisplay from './StoreDisplay';
import Loading from './Loading'
import ShoppingCart from './ShoppingCart';

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
    <div styles={{ display: 'flex' }}>
        <button onClick={() => setShowCart(!showCart)}>Shopping Cart</button>
        {showCart && <ShoppingCart />}
        {categories === undefined ? <Loading /> :
         <Sidebar categoryProps={categories}/> }
    
      <StoreDisplay itemProps={currentCategory} />
    </div>
  );
};

export default Store;
