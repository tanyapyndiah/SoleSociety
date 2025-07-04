import "./Card.css"
import { useNavigate } from "react-router-dom"

function Card({image, name, price, idx, resArr, sale}){
    const navigate = useNavigate()
    function handleCardClick(){
        let shoe = resArr[idx]
        navigate("/productDetails", {state: {shoe}})
    }
    return(
        <>
            <div className="card" onClick={handleCardClick} >
                {sale && <p style={{position: 'absolute', width: '100%', backgroundColor: '#ff5500', top: '2.5%', color: 'white', textAlign: 'center', fontFamily: 'Inter', fontWeight: '600'}}>On Sale!</p>}
                <img src={image} alt="" className="card-img" />
                <p className="card-name">{name}</p>
                {/* <p className="card-price">CAD {price}</p> */}
                <p className="card-price">
                    {sale ? (
                        <><span style={{ textDecoration: "line-through", marginRight: "8px" }}>CAD {(price + 30).toFixed(2)}</span>CAD {price.toFixed(2)}</>) : (<>CAD {price.toFixed(2)}</>
                    )}
                </p>
            </div>
        </>
    )
}

export default Card