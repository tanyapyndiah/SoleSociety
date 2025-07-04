import "./PaymentForm.css"
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";


function PaymentForm(){
    const navigate = useNavigate()

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        navigate("/survey")

    };

    return(
        <>
            <div className="form-cont">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className="field-cont">
                        <div className="ship-left"> 
                            <Form.Group className="mb-3 fieldL" >
                                <Form.Label className="input-label">Cardholder name</Form.Label>
                                <Form.Control type="name" placeholder="Name" className="field" id="cname" required/>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide the cardholder's name.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3 fieldL" >
                                <Form.Label className="input-label">Card number</Form.Label>
                                <Form.Control type="number" placeholder="Card number" className="field" id="cnumber" required/>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a card number.</Form.Control.Feedback>
                            </Form.Group>    
                        </div>
                        <div className="ship-right"> 
                            <Form.Group className="mb-3 fieldL" >
                                <Form.Label className="input-label">CVV</Form.Label>
                                <Form.Control type="number" placeholder="CVV" className="field" id="cvv" required/>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide the card's CVV.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3 fieldL" >
                                <Form.Label className="input-label">Expiry date</Form.Label>
                                <Form.Control type="date" placeholder="Email" className="field" id="emailadd" required/>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide the card's expiry date.</Form.Control.Feedback>
                            </Form.Group>
                        </div>
                    </div>
                    <div style={{width:'100%', display:'flex', flexDirection: 'row', justifyContent:'flex-end', paddingInline: '5%'}}>
                        <Button variant="primary" type="submit" className="pay-now-btn">
                                    Pay now
                        </Button> 
                    </div>
                        
                </Form>
            </div>
        </>
    )
}

export default PaymentForm