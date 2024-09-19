import React from 'react';

function Checkout({ cartItems }) {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Resumen de Pago</h2>
      <p>Total a pagar: ${total}</p>
      <button>Pagar con AdamsPay</button>
    </div>
  );
}

export default Checkout;
