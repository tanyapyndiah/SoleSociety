import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import cart from "../assets/bx_cart.png";
import { useNavigate } from 'react-router-dom';


function Navbar(){
    const navigate = useNavigate()
    function handleNavClick(val){
        navigate("/browseProducts", { state: {val} });
    }

    function homeClick(){
        navigate("/")
    }

    function goToCart(){
        navigate("/shoppingCart")
    }
    return(
        <>
            <nav className="navbar navbar-expand-lg position-fixed navbar-light bg-transparent mt-0 w-100 p-0 nav-bar-cont">
                <div className="container-fluid nav-bar">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mainNavbar">
                        <p className="sole-society" onClick={homeClick} style={{cursor: 'pointer', marginBottom: '0', color: 'black', fontFamily: '"Josefin Sans","Inter",sans-serif',fontStyle: 'italic', fontSize: '2em'}}><span className="orange-text">Sole</span> Society</p>
                        <ul className="navbar-nav myNav">
                            <li className="nav-item">
                            <p className="nav-link" onClick={()=>handleNavClick("Women")}>Women</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link" onClick={()=>handleNavClick("Men")}>Men</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link" onClick={()=>handleNavClick("Boys/Girls")}>Kids</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link sale-text" onClick={()=>handleNavClick("Sale")}>Sale</p>
                        </li>
                        </ul>
                        <img src={cart} alt="Cart" className="cart" onClick={goToCart}/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;