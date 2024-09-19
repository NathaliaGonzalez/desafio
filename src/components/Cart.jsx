import React from 'react';

function Cart({ cartItems, removeFromCart, addToCart }) {
  // Calcular el total de la compra
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>

      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <span className="cart-item-name">{item.name}</span>
              <div className="cart-item-controls">
                <button onClick={() => removeFromCart(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
              <span className="cart-item-price">${item.price * item.quantity}</span>
            </div>
          ))}
        </div>
      )}

      {/* Mostrar el total y el botón de pago */}
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h3>Total a pagar: ${total}</h3>
          <button className="checkout-button">Proceder al pago</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
