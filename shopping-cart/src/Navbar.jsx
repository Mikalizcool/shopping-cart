import logo from './assets/nav-logo.jpg'
const Navbar = () => {
    return (
        <>
            <div className="nav">
                <div className="logo">
                    <img className="logo" src={logo}></img>
                </div>
                <ul className="navbar">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Cart</li>
                </ul>
            </div>
        </>
    );
}
 
export default Navbar;