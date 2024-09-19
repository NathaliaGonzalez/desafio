import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importar useNavigate
import './Navbar.css';
import logo from '../images/logo.png';

function Navbar({ cartItems }) {
  const navigate = useNavigate();  // Inicializar el hook para navegar

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar__search">
        <input type="text" placeholder="¿Qué estás buscando?" />
        <button type="submit">🔍</button>
      </div>
      <div className="navbar__links">
        <ul>
          <li>Inicio</li>
          <li>Info</li>
          <li>Visítanos</li>
          <li>Contacto</li>
        </ul>
      </div>
      <div className="navbar__icons">
        <span>❔ Ayuda</span>
        <span>👤 Mi Cuenta</span>
        <span onClick={() => navigate('/cart')}>  {/* Redirige a la página del carrito */}
          🛒 Mi carrito ({cartItems.length})
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
