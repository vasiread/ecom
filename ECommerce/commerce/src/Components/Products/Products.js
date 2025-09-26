import React, {  useEffect, useState } from 'react';
import "./Products.css";
 import { useCart } from '../../Context/CartContext';
import { getProducts } from '../../services/productService';
 

const Products = () => {

  const { setTotalCart,cartProducts,setCartProducts } = useCart();

  const [listItems, setListItems] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setListItems(data.map(item => ({ ...item, cart: 0 })));
    };

    fetchProducts();
  }, []);
  const cartAddProduct = (id) => {
    setListItems(prev =>
      prev.map((item, index) =>
        index === id ? { ...item, cart: item.cart + 1 } : item
      )
    );

    setTotalCart(prev => prev + 1);

    setCartProducts(prev => {
      return prev.map(item => {
        if (item.id === listItems[id].id) {
          return { ...item, cart: item.cart + 1 };
        }
        return item;
      }).concat(
        prev.some(item => item.id === listItems[id].id)
          ? []
          : [{ ...listItems[id], cart: 1 }]
      );
    });
  };

  const cartLessProduct = (id) => {
    setListItems(prev =>
      prev.map((item, index) =>
        index === id ? { ...item, cart: Math.max(item.cart - 1, 0) } : item
      )
    );

    setTotalCart(prev => Math.max(prev - 1, 0));

    setCartProducts(prev => {
      const product = prev.find(item => item.id === listItems[id].id);
      if (!product) return prev;
      const newCartCount = product.cart - 1;
      if (newCartCount <= 0) return prev.filter(item => item.id !== product.id);
      return prev.map(item =>
        item.id === product.id ? { ...item, cart: newCartCount } : item
      );
    });
  };


  const cartButton = {
    width: "100%",
    maxWidth: "100%",
    background: " #f5093c",
    color: " #fff",
    border: "none",
    padding: "0.6rem 1rem",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: " 0.9rem",
    fontWeight: "500",
    transition: "background 0.3s ease",

  }
  const cartButtonShort = {
    width: "100%",
    maxWidth: "100%",
    background: " #f5093c",
    color: " #fff",
    border: "none",
    padding: "0.6rem 1rem",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: " 0.9rem",
    fontWeight: "500",
    transition: "background 0.3s ease",
  }
  const hide = {
    display: "none",
  };
  const visible = {

    background: " #f5093c",
    color: " #fff",
    border: "none",
    padding: "0.6rem 1rem",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: " 0.9rem",
    fontWeight: "500",
    transition: "background 0.3s ease",

  }




  return (
    <div className='productdiv'>
      {listItems.map((item, index) => (
        <div className="eachproducts" key={index}>
          <figure>
            <img src={item.image} alt={item.name} />
            <figcaption>{item.name}</figcaption>
          </figure>
          <div className="productdetails">
            <p className="productdesc">{item.description}</p>
            <span className="productprice">₹{item.price}</span>
            <div className="cartsection">
              <button style={item.cart > 0 ? cartButtonShort : cartButton} onClick={() => cartAddProduct(index)}>Add to Cart</button>
              <button onClick={() => cartLessProduct(index)} style={item.cart <= 0 ? hide : visible} >-</button>

              <p style={item.cart <= 0 ? hide : {}}>{item.cart}</p>
              <button onClick={() => cartAddProduct(index)} style={item.cart <= 0 ? hide : visible}>+</button>

            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products
