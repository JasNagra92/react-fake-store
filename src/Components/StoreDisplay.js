import React, {useState,useEffect} from "react";
import '../styles/StoreDisplay.css'

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
        <div style={{display:'flex', flexDirection:'column'}}>
            {displayItems.map(item => {
                return <div className="item" key={item.id}>
                            <img src={item.image} alt=''/>
                            <h2>{item.title}</h2>
                        </div>
            })}
        </div>
    )
}
export default StoreDisplay