import React from 'react';
import '../styles/Nav.css';
import { Link } from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa'

const Nav = () => {
  return (
    <nav>
      <h1 className='title'>Best Clothing Shop</h1>
      <div className="linkdiv">
        <Link to="/">
          <h1>Home</h1>
        </Link>

        <Link to="/Store">
          <h1>Store</h1>
        </Link>

        <Link to='/Cart' style={{display:'flex', alignItems:'center'}}>
          <FaShoppingCart size='30'/>
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
