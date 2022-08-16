import React, {useState,createContext} from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = props => {
    const [ShoppingCart, setShoppingCart] = useState([])
    return (
        <ShoppingCartContext.Provider value={[ShoppingCart,setShoppingCart]}>
            {props.children}
        </ShoppingCartContext.Provider>
    )
}