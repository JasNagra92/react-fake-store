import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import '../styles/Sidebar.css'

const Sidebar = (props) => {
  const { clickProps } = props;
  const [categories, setCategories] = useState();
  const [active, setActive] = useState('electronics');

  const getCategories = async () => {
    const categoryData = await fetch(
      'https://fakestoreapi.com/products/categories'
    );
    const data = await categoryData.json();
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <ul>
      <h3>Categories</h3>
      {categories === undefined ? (
        <Loading />
      ) : (
        categories.map((category, index) => {
          return (
            <li
              className={active === category ? 'active' : 'inactive'}
              onClick={() => {
                clickProps(category);
                setActive(category);
              }}
              key={index}
            >
              {category}
            </li>
          );
        })
      )}
    </ul>
  );
};
export default Sidebar;
