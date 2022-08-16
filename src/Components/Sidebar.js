import React from "react";

const Sidebar = (props) => {
    const {categoryProps, clickProps} = props

    return (
        <ul>
            {categoryProps.map((category, index) => {
                return <li onClick={() => clickProps(category)} key={index}>{category}</li>
            })}
        </ul>
    )
}
export default Sidebar