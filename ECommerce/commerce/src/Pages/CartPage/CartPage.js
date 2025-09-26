import React, { useRef, useState } from 'react'
import "./CartPage.css"
import Cart from '../../Components/Cart/Cart'
import CartForm from '../../Components/CartForm/CartForm'
import orderPlaced from "../../assets/images/orderplace.jpg"

const CartPage = () => {
    const [showForm, setShowForm] = useState(false);
    const formRef = useRef(null);
    const [showConfirmation, setShowConfirmation] = useState(false);


    const handleProceedToPayment = () => {
        setShowForm(true);
        setTimeout(() => {
            formRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handleSubmitOrder = (data) => {
        setShowConfirmation(true);
        setShowForm(false);
        setTimeout(() => {
            setShowConfirmation(false);
            setShowForm(false);
        }, 5000);
    };

    return (
        <div className="cart-page">
            {!showConfirmation && <Cart OnProceed={handleProceedToPayment} />}
            {showForm && !showConfirmation && (
                <div ref={formRef}>
                    <CartForm onSubmitOrder={handleSubmitOrder} />
                </div>
            )}
            {showConfirmation && (
                <div className="confirmation-screen">
                    <h2>Order Placed Successfully!</h2>
                    <p>Thank you for your purchase.</p>
                    <img src={orderPlaced} alt="orderplaced" />
                </div>
            )}
        </div>
    );
}

export default CartPage
