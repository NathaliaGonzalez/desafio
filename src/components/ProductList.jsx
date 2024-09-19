import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ addToCart, removeFromCart, cartItems }) {
  const products = [
    { id: 1, name: 'Pico Inyector Bosch', price: 100, image: 'bosch.jpg' },
    { id: 2, name: 'Pico Inyector Denso', price: 120, image: 'denso.jpg' },
    { id: 3, name: 'Pico Inyector Delphi', price: 90, image: 'delphi.jpg' },
    { id: 4, name: 'Pico Inyector Caterpillar', price: 90, image: 'caterpillar.webp' },
    { id: 5, name: 'Pico Inyector Siemmens', price: 90, image: 'siemmens.jpg' },
    { id: 6, name: 'Pico Inyector Cummins', price: 90, image: 'cummins.webp' },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          cartItem={cartItems.find((item) => item.id === product.id)}
        />
      ))}
    </div>
  );
}

export default ProductList;


