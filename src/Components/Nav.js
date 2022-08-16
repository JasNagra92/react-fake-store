import React from 'react';
import '../styles/Nav.css';
import { Link } from 'react-router-dom';

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
      </div>
    </nav>
  );
};
export default Nav;
