import logo from './assets/logo.jpg'
const Home = () => {
    return (
        <>
            <div className="home">
                <img className="home-logo" src={logo}></img>
                <p>We take pride in our random items</p>
            </div>
        </>
    );
}
 
export default Home;