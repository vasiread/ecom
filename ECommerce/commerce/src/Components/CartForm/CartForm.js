import React, { useState } from 'react';
import "./CartForm.css";
import { useCart } from '../../Context/CartContext';
import { placeOrder } from '../../services/productService';

const CartForm = ({ onSubmitOrder }) => {
    const { cartProducts, setCartProducts, setTotalCart } = useCart();
    const [formData, setFormData] = useState({ name: "", lastname: "", address: "" });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });  
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "First name is required";
        if (!formData.lastname.trim()) newErrors.lastname = "Last name is required";
        if (!formData.address.trim()) newErrors.address = "Address is required";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (cartProducts.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);

        try {
            const orderData = {
                firstName: formData.name,
                lastName: formData.lastname,
                address: formData.address,
                products: cartProducts
            };

            const result = await placeOrder(orderData);
            console.log(result.message);

            onSubmitOrder(formData);
            setCartProducts([]);
            setTotalCart(0);
        } catch (error) {
            console.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="cart-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    placeholder="First Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={formData.lastname}
                    onChange={handleChange}
                />
                {errors.lastname && <span className="error">{errors.lastname}</span>}
            </div>

            <div className="form-group">
                <textarea
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                />
                {errors.address && <span className="error">{errors.address}</span>}
            </div>

            <button className="checkout-btn" type="submit" disabled={loading}>
                {loading ? "Placing Order..." : "Place Order"}
            </button>
        </form>
    );
};

export default CartForm;
