import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; 
import Navbar from './components/Navbar';  
import ProductList from './components/ProductList';  
import Cart from './components/Cart'; 
import Checkout from './components/Checkout'; 
import './App.css'; 
import { FaShoppingCart } from 'react-icons/fa';  

function App() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();  

   // Función para agregar o aumentar la cantidad de un producto
   const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exists, quantity: exists.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Función para disminuir la cantidad o eliminar el producto del carrito
  const removeFromCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exists, quantity: exists.quantity - 1 } : item
        )
      );
    }
  };

  return (
    <div className="App">
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route
          path="/"
          element={<ProductList addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} />}
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />}  // Aquí se pasan las funciones
        />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
      </Routes>

      <div className="floating-cart" onClick={() => navigate('/cart')}>
        <FaShoppingCart className="cart-icon" />  {/* Aquí usamos el icono de FontAwesome */}
        <span className="cart-count">({cartItems.reduce((acc, item) => acc + item.quantity, 0)})</span>
      </div>
    </div>
  );
}

export default App;
