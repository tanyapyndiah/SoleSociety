import "./SubTotal.css"
import { useCart } from '../CartContext';

function SubTotal(){
    const {cart} = useCart()
    
    function getSubtotal(){
        let total = 0
        cart.forEach(shoe => {
            total += shoe.price*shoe.quantity
        });
        return total
    }

    function getTotal(){
        let total = 0
        total = getSubtotal() + getSubtotal()*0.13 + 50
        return total
    }

    return(
        <>
            <div className="subtotal-cont">
                <p style={{textAlign: "center", fontWeight: 'bold', fontSize: '1.5em'}}>Order Summary</p>
                <table style={{width: '80%', marginInline: 'auto', marginTop: '2rem', fontSize: '1.2em', borderCollapse: 'separate', borderSpacing: '0 1rem'}}>
                    <tbody>
                        <tr>
                            <th>Subtotal</th>
                            <td className="currency">CAD</td>
                            <td className="table-value">{getSubtotal().toFixed(2)}</td>
                        </tr>
                        <tr>
                            <th>Shipping</th>
                            <td className="currency">CAD</td>
                            <td className="table-value">50.00</td>
                        </tr>
                        <tr>
                            <th>Tax</th>
                            <td className="currency">CAD</td>
                            <td className="table-value">{(getSubtotal()*0.13).toFixed(2)}</td>
                        </tr>
                    </tbody>

                    <tfoot style={{marginTop: '5rem'}}>
                        <tr>
                            <td colSpan="3"></td>
                        </tr>
                        <tr>
                            <td colSpan="3"></td>
                        </tr>
                        <tr style={{height: '5rem'}}>
                            <th>Order Total</th>
                            <td className="currency">CAD</td>
                            <td className="table-value" style={{borderTop: '1px solid black'}}>{getTotal().toFixed(2)}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    )
}

export default SubTotal