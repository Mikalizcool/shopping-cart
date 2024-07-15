import {useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import Home from './Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css'
import Shop from './Shop'
import Cart from './Cart'

function App() {
  const [cartItems, setCartItems] = useState(0);
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
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
  },[]);
  useEffect(() => {
    handleCart();
  }, [items])
  const handleClick = (id) => {
    const updatedItems = items.map(item =>
        item.id === id ? { ...item, selected: item.selected + 1 } : item
    ); // item selected
    setItems(updatedItems);
    setCartItems(cartItems + 1);
  }
  const handleCart = () => {
    const updatedCart = items.filter(item => item.selected > 0);
    setCart(updatedCart);
    let newTotal = 0;
    updatedCart.map(item => {newTotal += item.price * item.selected}); // cart total
    setTotal(newTotal);
  }
  return (
    <>
      <Router>
      <Navbar total = {cartItems} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shop">
            <div className="shop">
              {items.map((item) => (
                  <div className="item" key={item.id}>
                        <img className="item-image" src={item.image}></img>
                        <h1 className="item-title">{item.title}</h1>
                        <p className="item-description">{item.description}</p>
                    <div className="item-cart-details">
                        <p>${item.price}</p>
                        <button className="item-button"onClick={()=>handleClick(item.id)}>Add to cart</button>
                        <p>{item.selected}</p>
                    </div>
                  </div>
              ))}
          </div>
          </Route>
          <Route path="/cart">
          <div className="cart">
            {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                    <img className="cart-item-image" src={item.image}></img>
                    <div className="cart-description">
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                    </div>
                    <p className="cart-price">Item cost: ${item.price}</p>
                    <p className="cart-selected">Amount: {item.selected}</p>
                    <p className="cart-item-total">Total cost: ${item.price * item.selected}</p>
                </div>
            ))}
            {total > 0 ? <p className="cart-total">Cart Total: ${Math.round(total)}</p> : <p>Cart is empty!</p>}
          </div>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
