import "./CheckoutPage.css";
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import ShoppingCart from "./ShoppingCart";
import ShippingDetailsForm from "./ShippingDetailsForm";
import PaymentForm from "./PaymentForm";
import { Alert } from 'react-bootstrap';


function CheckoutPage(){
    const [canPay, setCanPay] = useState(false)
    const [step,setStep] = useState("My Cart")
    const [review,setReview] = useState(true)
    const [details,setDetails] = useState(false)
    const [payment,setPayment] = useState(false)

    const [showAlert, setShowAlert] = useState(false);

    
    useEffect(() => {
        if (step=="My Cart"){
            setReview(true)
            setDetails(false)
            setPayment(false)
        } else {
            if (step=="Shipping Details"){
                setReview(true)
                setDetails(true)
                setPayment(false)
            } else {
                setReview(true)
                setDetails(true)
                setPayment(true)
            }
        }
    }, [step]);

    function stepClick(val){
        if (val == "Payment" && canPay) {
            console.log(val)
            setStep(val)
        }
        else{
            if (val == "Payment" && !canPay){
                setShowAlert(true);
                setTimeout(() => setShowAlert(false), 1500);
            } else {
                setStep(val);
            }
            
        }
    }

    return(
        <>
            <Navbar></Navbar>
            <div className="checkout-page-cont">
                <p className="checkout-step-title">{step}</p>
                <div className="steps-cont">
                    <p className="step" style={{color: review? '#ff5500' : '#d9d9d9'}} onClick={()=>stepClick("My Cart")}>Review Cart</p>
                    <div className="line"></div>
                    <p className="step" style={{color: details? '#ff5500' : '#d9d9d9'}} onClick={()=>stepClick("Shipping Details")}>Shipping Details</p>
                    <div className="line"></div>
                    <p className="step" style={{color: payment? '#ff5500' : '#d9d9d9'}} onClick={()=>stepClick("Payment")}>Payment</p>
                </div>
                <div style={{height:'100%', padding: '2rem'}}>
                    {step=="My Cart" && <ShoppingCart setStep={setStep}></ShoppingCart>}
                    {step=="Shipping Details" && <ShippingDetailsForm setStep={setStep} setCanPay={setCanPay}></ShippingDetailsForm>}
                    {step=="Payment" && <PaymentForm ></PaymentForm>}
                </div>
                {showAlert && (
                    <Alert variant="danger" className="mt-3" style={{position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)' }}>
                        Please provide all necessary information before proceeding to payment.
                    </Alert>
                )}
            </div>
        </>
    )
}

export default CheckoutPage;