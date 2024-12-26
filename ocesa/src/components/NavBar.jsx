import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importar Link y useNavigate
import './NavBar.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate(); // Hook para redirección

    const openMenu = () => {
        setIsOpen(!isOpen);
    };

    const redirectToHome = () => {
        navigate('/'); // Redirigir a Inicio
        setIsOpen(false); // Cerrar el menú si está abierto
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <img 
                    src="./og/ocesa.png" 
                    alt="logo-ocesa" 
                    className="logo" 
                    onClick={redirectToHome} // Redirigir al hacer clic en el logo
                    style={{ cursor: 'pointer' }}
                />
                {/* <h1 className="logo">Ocesa</h1> */}
                <button 
                    className="menu-toggle" 
                    onClick={openMenu} 
                    style={{ display: window.innerWidth <= 768 ? 'block' : 'none' }}
                >
                    ☰
                </button>

                <ul className={`menu ${isOpen ? 'menu-open' : ''}`} style={{ display: window.innerWidth > 768 ? 'flex' : isOpen ? 'flex' : 'none' }}>
                    <li><Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link></li>
                    {/* <li><Link to="/novedades">Novedades</Link></li> */}
                    {/* <li><Link to="/events">Eventos</Link></li> */}
                    {/* <li><Link to="/galery">Galeria</Link></li> */}
                    {/* <li><Link to="/greenDistrict">VERDE</Link></li> */}
                    <li><Link to="/nosotros" onClick={() => setIsOpen(false)}>Nosotros</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;