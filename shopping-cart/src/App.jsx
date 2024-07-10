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
  const handleClick = (id) => {
    const updatedItems = items.map(item =>
        item.id === id ? { ...item, selected: item.selected + 1 } : item
    );
    setItems(updatedItems);
    setCartItems(cartItems+1);
    console.log(cartItems);
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
                          <h1>{item.title}</h1>
                          <p className="description">{item.description}</p>
                          <p>${item.price}</p>
                          <button onClick={()=>handleClick(item.id)}>Add to cart</button>
                          <p>{item.selected}</p>
                      </div>
                  ))}
              </div>
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
