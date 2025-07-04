import "./ShippingDetailsForm.css"
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ShippingDetailsForm({setStep, setCanPay}){
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } 
        else{
            setCanPay(true)
            setStep("Payment")
        }
        setValidated(true);
        event.preventDefault();
        event.stopPropagation();
        
    };

    return(
        <>
            <div className="form-cont">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className="field-cont">
                        <div className="ship-left"> 
                            <Form.Group className="mb-3 fieldL" >
                                <Form.Label className="input-label">First name</Form.Label>
                                <Form.Control type="name" placeholder="First name" className="field" id="fname" required/>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a first name.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3 fieldL" >
                                <Form.Label className="input-label">Last name</Form.Label>
                                <Form.Control type="name" placeholder="Last name" className="field" id="lname" required/>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a last name.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3 fieldL">
                                <Form.Label className="input-label">Telephone number</Form.Label>
                                <Form.Control type="tel" placeholder="Telephone number" className="field" id="telnum" required/>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid" >Please provide your telephone number.</Form.Control.Feedback>
                            </Form.Group>    
                        </div>
                        <div className="ship-right"> 
                            <Form.Group className="mb-3 fieldL" >
                                <Form.Label className="input-label">Shipment address</Form.Label>
                                <Form.Control type="text" placeholder="Address" className="field" id="addr" required/>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a shipment address.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3 fieldL" >
                                <Form.Label className="input-label">Email address</Form.Label>
                                <Form.Control type="email" placeholder="Email" className="field" id="emailadd" required/>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide an email address.</Form.Control.Feedback>
                            </Form.Group>

                            <Button variant="primary" type="submit" className="payment-btn">
                                Payment
                            </Button>    
                        </div>
                    </div>
                    
                </Form>
            </div>
        </>
    )
}

export default ShippingDetailsForm