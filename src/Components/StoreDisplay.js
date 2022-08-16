import React, { useState, useEffect, useContext } from 'react';
import '../styles/StoreDisplay.css';
import { FcPlus, FcMinus } from 'react-icons/fc';
import { ShoppingCartContext } from './ShoppingCartContext';

const StoreDisplay = (props) => {
  const [displayItems, setDisplayItems] = useState([]);
  const [input, setInput] = useState({});
  const [ShoppingCart, setShoppingCart] = useContext(ShoppingCartContext);

  const handleChange = (e) => {
    let num = e.target.value.replace(/\D/g, '');
    setInput({ ...input, [e.target.name]: +num });
  };
  const handleIncrement = (name) => {
    if (!input[name]) {
      setInput({ ...input, [name]: 0 });
    }
    setInput((prev) => ({
      ...input,
      [name]: prev[name] + 1,
    }));
  };
  const handleDecrement = (name) => {
    if (!input[name]) {
      setInput({ ...input, [name]: 0 });
    } else {
      setInput((prev) => ({
        ...input,
        [name]: prev[name] - 1,
      }));
    }
  };
  const addToCart = (item, n) => {
    item.quantity = n;
    setShoppingCart([...ShoppingCart, item]);
  };

  const { itemProps } = props;
  
  const getItems = async () => {
    const itemData = await fetch(
      `https://fakestoreapi.com/products/category/${itemProps}`
    );
    const items = await itemData.json();
    setDisplayItems(items);
  };
  useEffect(() => {
    getItems();
  }, [itemProps]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {displayItems.map((item) => {
        return (
          <div className="item" key={item.id}>
            <div>
              <img src={item.image} alt="" />
            </div>
            <div>
              <h4>{item.title}</h4>
            </div>
            <div>
              <h4>${item.price}</h4>
            </div>
            <div className="price">
              <FcMinus onClick={() => handleDecrement(item.title)} />
              <input
                name={item.title}
                onChange={handleChange}
                placeholder="0"
                value={input[item.title]}
              />
              <FcPlus onClick={() => handleIncrement(item.title)} />
              <button onClick={() => addToCart(item, input[item.title])}>
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default StoreDisplay;
