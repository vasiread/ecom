import { createContext, useContext, useState } from "react";

const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [totalCart, setTotalCart] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);
  
    return (
        <CartContext.Provider value={{ totalCart, setTotalCart, cartProducts, setCartProducts }}>
            {children}

        </CartContext.Provider>
    )
    
}

export const useCart =()=>useContext(CartContext)