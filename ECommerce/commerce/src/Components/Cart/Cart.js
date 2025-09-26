import React, { useState } from 'react';
import "./Cart.css";
import { useCart } from '../../Context/CartContext';

const Cart = ({ OnProceed }) => {
    const { cartProducts, setCartProducts, setTotalCart } = useCart();




    const handleQuantityChange = (id, type) => {
        setCartProducts(prev =>
            prev.map(item =>
                item.id === id
                    ? {
                        ...item,
                        cart: type === "increase" ? item.cart + 1 : Math.max(item.cart - 1, 0)
                    }
                    : item
            )
        );

        setTotalCart(prev => {
            const product = cartProducts.find(item => item.id === id);
            if (!product) return prev;

            if (type === "decrease" && product.cart < 1) return prev;
            return type === "increase" ? prev + 1 : prev - 1;
        });
    };



    const handleRemove = (id) => {
        const product = cartProducts.find(item => item.id === id);
        if (!product) return;

        setCartProducts(prev => prev.filter(item => item.id !== id));
        setTotalCart(prevTotal => prevTotal - product.cart);


    };


    const totalPrice = cartProducts.reduce((total, item) => total + item.price * item.cart, 0);

    return (
        <div className="cart-container">
            <h2>Your Shopping Cart</h2>
            {cartProducts.length === 0 ? (
                <p className="empty-cart">Your cart is empty</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cartProducts.map(item => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <p>₹{item.price.toFixed(2) * item.cart}</p>
                                    <div className="quantity-control">
                                        <button onClick={() => handleQuantityChange(item.id, "decrease")}>-</button>
                                        <span>{item.cart}</span>
                                        <button onClick={() => handleQuantityChange(item.id, "increase")}>+</button>
                                    </div>
                                </div>
                                <button className="remove-item" onClick={() => handleRemove(item.id)}>Remove</button>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
                        <button className="checkout-btn" onClick={OnProceed}>Proceed to Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
