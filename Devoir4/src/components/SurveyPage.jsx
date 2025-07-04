import "./SurveyPage.css"
import { use, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NotSatisfied from "../assets/NotSatisfied.png"
import SomewhatSatisfied from "../assets/SomewhatSatisfied.png"
import Satisfied from "../assets/Satisfied.png"
import VerySatisfied from "../assets/VerySatisfied.png"
import ExtremelySatisfied from "../assets/ExtremelySatisfied.png"
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import { Alert } from 'react-bootstrap';
import Navbar from "./Navbar";

function SurveyPage(){
    const navigate = useNavigate()
    const [validated, setValidated] = useState(false);
    const [currentBtn, setCurrentBtn] = useState(3)
    const { clearCart } = useCart()

    const [showAlert, setShowAlert] = useState(true);

    setTimeout(() => setShowAlert(false), 1000);

    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        } 
        else{
            setValidated(true);
            event.preventDefault();
            event.stopPropagation();
            clearCart()
            navigate("/")
        }
        
        
    };

    return(
        <>
        <Navbar></Navbar>
        <div style={{height:'100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center'}}>
            <p className="survey-title">Tell us about your <span style={{color: '#ff5500'}}>experience!</span></p>
            <p className="opinion-text">Your opinion matters to us.</p>
            <div className="survey-cont">
                <Form noValidate validated={validated} onSubmit={handleSubmit} style={{display: 'flex',flexDirection: 'column', gap: '1rem'}}>
                    {/* <Form.Group className="mb-3 fieldL" >
                        <Form.Label className="input-label">Name</Form.Label>
                        <Form.Control type="name" placeholder="Name" className="field" id="survey-name" required/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please provide a name.</Form.Control.Feedback>
                    </Form.Group> */}

                    <div>
                        <p className="input-label">Rating</p>
                        <div className="btn-group">
                            <div className="satis-btn" onClick={()=>setCurrentBtn(1)} style={{borderColor: currentBtn == 1? "#ff5500" : "gray"}}>
                                <img src={NotSatisfied} alt="" />
                            </div>
                            <div className="satis-btn" onClick={()=>setCurrentBtn(2)} style={{borderColor: (currentBtn == 2)? "#ff5500" : "gray"}}>
                                <img src={SomewhatSatisfied} alt="" />
                            </div>
                            <div className="satis-btn" onClick={()=>setCurrentBtn(3)} style={{borderColor: (currentBtn == 3)? "#ff5500" : "gray"}}>
                                <img src={Satisfied} alt="" />
                            </div>
                            <div className="satis-btn" onClick={()=>setCurrentBtn(4)} style={{borderColor: (currentBtn == 4)? "#ff5500" : "gray"}}>
                                <img src={VerySatisfied} alt="" />
                            </div>
                            <div className="satis-btn" onClick={()=>setCurrentBtn(5)} style={{borderColor: (currentBtn == 5)? "#ff5500" : "gray"}}>
                                <img src={ExtremelySatisfied} alt="" />
                            </div>
                        </div>
                    </div>

                    <Form.Group className="mb-3 fieldL" >
                        <Form.Label className="input-label">Feedback</Form.Label>
                        <Form.Control as="textarea" placeholder="Let us know how we can improve for you, all feedback is appreciated!" className="field" id="survey-feedback" required/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please provide some feedback.</Form.Control.Feedback>
                    </Form.Group>

                    
                    <Button variant="primary" type="submit" className="submit-btn">
                        Submit
                    </Button>                        
                </Form>
                {showAlert && (
                    <Alert variant="success" className="mt-3" style={{position: 'absolute', top: '0vh', left: '50%', transform: 'translateX(-50%)', zIndex: '5000' }}>
                        Payment Successful! Thank you for your purchase.
                    </Alert>
                )}
            </div>
        </div>
        </>
    )
}

export default SurveyPage