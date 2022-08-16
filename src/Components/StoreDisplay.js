import React, {useState,useEffect} from "react";
const StoreDisplay = (props) => {
    const [displayItems, setDisplayItems] = useState([])

    const {itemProps} = props
    const getItems = async () => {
        const itemData = await fetch(`https://fakestoreapi.com/products/category/${itemProps}`);
        const items = await itemData.json();
        setDisplayItems(items)
        console.log(items)
    }
    useEffect(()=>{
        getItems()
    }, [itemProps])

    return (
        <div>
            {displayItems.map(item => {
                return <img key={item.id} src={item.image} alt='' />
            })}
        </div>
    )
}
export default StoreDisplay