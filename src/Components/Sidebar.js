import React from "react";

const Sidebar = (props) => {
    const {categoryProps} = props

    return (
        <ul>
            {categoryProps.map((category, index) => {
                return <li key={index}>{category}</li>
            })}
        </ul>
    )
}
export default Sidebar