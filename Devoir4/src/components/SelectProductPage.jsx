import "./SelectProductPage.css";
import Navbar from "./Navbar";
import { useState } from "react"
import standingimg from "../assets/standing-img.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useCart} from "../CartContext"
import { Alert } from 'react-bootstrap';


function SelectProductPage(){
    const location = useLocation();
    const [product] = useState(() => location.state?.shoe);
    const {cart, addToCart} = useCart()

    const [showAlert, setShowAlert] = useState(false);
    
    const [validated, setValidated] = useState(false);
    
        const handleSubmit = (event) => {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                setValidated(true);
            } else {
                const data = new FormData(form)
                const selectedSize = data.get("shoeSize")
                const quantity = data.get("shoeQuantity")

                let shoe = {
                    name: product.name,
                    image: product.image,
                    price: product.price,
                    size: selectedSize,
                    quantity: quantity
                }

                addToCart(shoe)
                form.reset(); 
                setValidated(false); 
                setShowAlert(true);
                setTimeout(() => setShowAlert(false), 1500);
                
                event.preventDefault();
                event.stopPropagation();
            }
            
        };

    return(
        <>
            <Navbar></Navbar>
            <div className="selectProductPage-cont">
                <img className="product-img" src={product.image} alt="product image" />
                <div className="product-select-cont">
                    <div className="product-title-desc">
                        <p className="product-title">{product.name}</p>
                        <p className="product-desc">{product.description}</p>
                        <p className="product-price">CAD {(product.price).toFixed(2)}</p>
                    </div>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                        <Form.Label className="select-label">Size</Form.Label>
                        <Form.Control as="select" className="field" id="shoe-size" required defaultValue="" name="shoeSize" >
                            <option value="">Select a size</option>
                            <option value="M6/W4.5">M6 / W4.5</option>
                            <option value="M6.5/W5">M6.5 / W5</option>
                            <option value="M7/W5.5">M7 / W5.5</option>
                            <option value="M7.5/W6">M7.5 / W6</option>
                            <option value="M8/W6.5">M8 / W6.5</option>
                            <option value="M8.5/W7">M8.5 / W7</option>
                            <option value="M9/W7.5">M9 / W7.5</option>
                            <option value="M9.5/W8">M9.5 / W8</option>
                            <option value="M10/W8.5">M10 / W8.5</option>
                            <option value="M10.5/W9">M10.5 / W9</option>
                            <option value="M11/W9.5">M11 / W9.5</option>
                            <option value="M11.5/W10">M11.5 / W10</option>
                            <option value="M12/W10.5">M12 / W10.5</option>
                        </Form.Control>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please select a shoe size.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="select-label" htmlFor="shoe-quantity" >Quantity</Form.Label>
                            <Form.Control 
                                type="number"
                                id="shoe-quantity"
                                min={1}
                                max={10}
                                defaultValue={1}
                                required
                                name="shoeQuantity"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a quantity between 1 and 10.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="Add-to-cart-btn">
                                Add to cart
                        </Button> 
                    </Form>
                </div>
                {showAlert && (
                    <Alert variant="success" className="mt-3" style={{position: 'absolute', top: '10vh', left: '50%', transform: 'translateX(-50%)' }}>
                        Item(s) added to cart!
                    </Alert>
                )}
            </div>
        </>
    )
}

export default SelectProductPage;