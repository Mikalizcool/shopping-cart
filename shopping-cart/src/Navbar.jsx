import logo from './assets/nav-logo.jpg'
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <div className="nav">
                <div className="logo">
                    <img className="logo" src={logo}></img>
                </div>
                <ul className="navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </div>
        </>
    );
}
 
export default Navbar;