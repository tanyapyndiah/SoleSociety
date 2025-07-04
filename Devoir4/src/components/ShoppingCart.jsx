import "./ShoppingCart.css"
import "./ShoppingCartCard"
import { useCart } from '../CartContext'
import ShoppingCartCard from "./ShoppingCartCard"
import SubTotal from "./SubTotal"


function ShoppingCart({setStep}){
    const {cart} = useCart()
    function nextStep(){
        setStep("Shipping Details")
    }

    return(
        <>  
            <div className="pln-cont" style={{display: 'flex', justifyContent: 'space-around'}}>
                {cart.length === 0? <p className="no-items-cart" style={{alignSelf: 'center'}}>Looks like your cart is empty...</p> : null}
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    {cart.map((shoe) => {
                        return(
                            <ShoppingCartCard image={shoe.image} price={shoe.price} name={shoe.name} quantity={shoe.quantity} size={shoe.size}></ShoppingCartCard>
                        )
                    })}
                </div>
                <div style={{gap: '2rem', display:'flex', flexDirection:'column'}}>
                    <SubTotal></SubTotal>
                    <button className="checkout-btn" style={{width:'100%', height:'3rem', border:'none'}} onClick={nextStep}>Checkout</button>
                </div>
                
            </div>
        </>
    )
}

export default ShoppingCart