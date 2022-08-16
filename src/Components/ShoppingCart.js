import React, { useContext } from 'react';
import { ShoppingCartContext } from './ShoppingCartContext';

const ShoppingCart = () => {
  const [ShoppingCart, setShoppingCart] = useContext(ShoppingCartContext);

  const removeItem = (itemInCart) => {
    setShoppingCart(ShoppingCart.filter((item) => item.id !== itemInCart.id));
  };

  return (
    <div>
      <table style={{textAlign:'center'}}>
        <tr>
          <td></td>
          <th>Item name</th>
          <th>Item Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
        </tr>
        {ShoppingCart.map((item) => {
          return (
            <tr>
              <td>
                <img src={item.image} alt="" />
              </td>
              <td>
                <h4>{item.title}</h4>
              </td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.quantity * item.price}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default ShoppingCart;
