import "./ShoppingCartCard.css"
import { useState, useEffect } from "react"
import { useCart } from '../CartContext'


function ShoppingCartCard({image, name, size, price, quantity}){
     const MAX_VALUE = 10;
  const { updateQuantity, removeFromCart } = useCart();

  const [value, setValue] = useState(quantity.toString());

    useEffect(() => {
        const num = parseInt(value);
        if (isNaN(num)) return;

        if (num === 0) {
        removeFromCart(name);
        } else {
        updateQuantity(name, num);
        }
    }, [value, name, removeFromCart, updateQuantity]);

    const increment = () => {
        const num = parseInt(value) || 0;
        setValue(Math.min(num + 1, MAX_VALUE).toString());
    };

    const decrement = () => {
        const num = parseInt(value) || 0;
        setValue(Math.max(num - 1, 0).toString());
    };

    const handleChange = (e) => {
        const val = e.target.value;
        if (/^\d*$/.test(val)) {
        setValue(val);
        }
    };

    const handleBlur = () => {
        const num = parseInt(value) || 0;
        setValue(Math.min(num, MAX_VALUE).toString());
    };


    return(
        <>
            <div className="shopping-card-cont">
                <img src={image} alt="" className="shopping-card-img" />
                <div className="shopping-card-info">
                    <p className="shopping-card-name">{name}</p>
                    <p className="shopping-card-size">Size <br /><span style={{color: "gray"}}>{size}</span></p>
                    <p style={{margin: '0'}}>CAD {price}</p>
                    <p className="shopping-card-quantity">Quantity</p>
                    <div>
                    <button onClick={decrement} className="increment-btn">−</button>
                    <input
                        type="text"
                        value={value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="quantity-input"
                    />
                    <button onClick={increment} className="decrement-btn">+</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoppingCartCard