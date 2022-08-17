import React, { useContext } from 'react';
import { ShoppingCartContext } from './ShoppingCartContext';
import '../styles/ShoppingCart.css'

const ShoppingCart = () => {
  const [ShoppingCart, setShoppingCart] = useContext(ShoppingCartContext);

  const removeItem = (itemInCart) => {
    setShoppingCart(ShoppingCart.filter((item) => item.id !== itemInCart.id));
  };

  return (
    <div className='cartDiv'>
    {ShoppingCart.length === 0 ? <p>Add Items to Cart</p> :
      <table>
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
              <td><button onClick={() => removeItem(item)}>Delete</button></td>
            </tr>
          );
        })}
      </table>}
    </div>
  );
};
export default ShoppingCart;
