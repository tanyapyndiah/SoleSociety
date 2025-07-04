import "./MainPage.css";
import Navbar from "./Navbar";
import promoImage from "../assets/promo-image.jpg";
import sittingImage from "../assets/sitting-img.jpg";
import standingImage from "../assets/standing-img.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function MainPage(){
    let val = ""
    const navigate = useNavigate()
    function allShoesClick(){
        val = "all"
        navigate("/browseProducts", { state: {val} });
    }
    function saleShoesClick(){
        val = "Sale"
        navigate("/browseProducts", { state: {val} });
    }

    return(
        <>
            <Navbar></Navbar>
            <div className="sale-promo-cont">
                <img className="promo-img" src={promoImage} alt="promo image" />
                <div className="promo-text-cont">
                    <p className="summer-sale-text">Let <span className="orange-text">us</span> style<br/><span className="orange-text">you</span> this summer. <br /><span>Get up to</span></p>
                    <p className="off-text"><span className="orange-text">50%</span> OFF</p>
                </div>
                <button className="shop-sale-btn" onClick={saleShoesClick}>Shop Sale</button>
            </div>
            <div className="shop-all-cont">
                <img className="standing-img" src={standingImage} alt="standing" />
                <div className="shop-img-cont">
                    <p className="occasions-text">Find the shoe <br />that fits <span className="orange-text">you</span>.</p>
                    <p className="shop-all-shoes" onClick={allShoesClick}>Shop all shoes.</p>
                    <img className="sitting-img" src={sittingImage} alt="sitting" />
                </div>
            </div>
        </>
    )
}

export default MainPage;