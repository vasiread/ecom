import React, { useEffect } from 'react';
import "./Navbar.css";
import cartImg from "../../assets/images/cartimg.jpg";
import { useCart } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
 
    const { totalCart } = useCart();
    const navigate = useNavigate();

    const navCart = () => {
         navigate('/cart')
    }
    const routeHome = () => {
        navigate('/')
    }
    
  
    return (
        <div className='navwrapper'>
            <div className="navigation">
                <li onClick={routeHome}>Home</li>
                
                <div onClick={navCart} className="cart-wrapper">
                    <img src={cartImg} alt="cart" />
                    <p>{totalCart}</p>
                </div>
            </div>

        </div>
    )
}

export default Navbar
