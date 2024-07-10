import {useState, useEffect} from 'react'
import Cart from './Cart'
const Shop = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartItems, setCartItems] = useState(0);
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products/");
                const data = await response.json();
                const newList = data.map(item => ({...item, selected:0}));
                setItems(newList);
            } catch (error) {

            }
        }
        fetchItems();
    })

    const handleClick = (item) => {
        setCart(item);
        setCartItems(cartItems+1);
        console.log(cartItems);
        console.log(cart);
    }
    return (
        <>
            <div className="shop">
                {items.map((item) => (
                    <div className="item" key={item.id}>
                        <img className="item-image" src={item.image}></img>
                        <h1>{item.title}</h1>
                        <p className="description">{item.description}</p>
                        <p>${item.price}</p>
                        <button onClick={()=>handleClick(item)}>Add to cart</button>
                        <Cart cart = {cartItems}/>
                    </div>
                ))}
            </div>
            
        </>
    )
}
 
export default Shop;