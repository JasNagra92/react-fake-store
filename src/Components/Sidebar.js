import React, {useState, useEffect} from "react";
import Loading from "./Loading";

const Sidebar = (props) => {
    const {clickProps} = props
    const [categories,setCategories] = useState()

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
            {categories === undefined ? (<Loading />) : categories.map((category, index) => {
                return <li onClick={() => clickProps(category)} key={index}>{category}</li>
            })}
        </ul>
    )
}
export default Sidebar