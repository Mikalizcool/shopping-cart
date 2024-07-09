import {useState, useEffect} from 'react'
const Shop = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products/");
                const data = await response.json();
                setItems(data);
            } catch (error) {

            }
        }
        fetchItems();
    })
    return (
        <>
            <div className="shop">
                {items.map((item) => (
                    <div className="item" key={item.id}>
                        <img className="item-image" src={item.image}></img>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <p>${item.price}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
 
export default Shop;