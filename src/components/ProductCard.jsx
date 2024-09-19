import React from 'react';
import bosch from '../images/bosch.jpeg';
import denso from '../images/denso.jpg';
import delphi from '../images/delphi.jpeg';
import caterpillar from '../images/caterpillar.webp';
import siemmens from '../images/siemmes.jpg';
import cummins from '../images/cummins.webp';

function ProductCard({ product, addToCart, removeFromCart, cartItem }) {
  // Objeto que mapea nombres de productos a imágenes
  const productImages = {
    'Pico Inyector Bosch': bosch,
    'Pico Inyector Denso': denso,
    'Pico Inyector Delphi': delphi,
    'Pico Inyector Caterpillar': caterpillar,
    'Pico Inyector Siemmens': siemmens,
    'Pico Inyector Cummins': cummins,
  };

  // Seleccionar la imagen correcta según el nombre del producto
  const productImage = productImages[product.name];

  return (
    <div className="product-card">
      <img src={productImage} alt={product.name} style={{ width: '150px', height: '150px' }} />
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>

      {cartItem ? (
        <div>
          <button onClick={() => removeFromCart(product)}>-</button>
          <span>{cartItem.quantity}</span>
          <button onClick={() => addToCart(product)}>+</button>
        </div>
      ) : (
        <button onClick={() => addToCart(product)}>Agregar al carrito</button>
      )}
    </div>
  );
}

export default ProductCard;

