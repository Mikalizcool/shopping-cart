import logo from './assets/nav-logo.jpg'
import {Link} from 'react-router-dom';
import menu from './assets/menu.svg'
const Navbar = ({total}) => {
    const handleClick = () => {
        let element = document.getElementById("mobile-navbar");
        if (element.style.display === "none") {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    }
    return (
        <>
            <div className="nav">
                <div className="logo">
                    <Link to="/"><img className="logo" src={logo}></img></Link>
                </div>
                <ul className="navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/cart">Cart: {total}</Link></li>
                </ul>
                <div className="mobile-nav">
                    <button onClick = {() => handleClick()}id="mobile-button"><img className="mobile-menu" src={menu}></img></button>
                    <ul id="mobile-navbar">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/cart">Cart: {total}</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
 
export default Navbar;