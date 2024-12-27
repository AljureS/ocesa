import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import { useEffect } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };
    useEffect(() => {
        console.log('Valor actualizado de isOpen:', isOpen);
    }, [isOpen]);
    
    const redirectToHome = () => {
        navigate('/');
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <img 
                    src="/og/ocesa.webp" 
                    alt="Ocesa Logo" 
                    className="logo" 
                    onClick={redirectToHome} 
                    style={{ cursor: 'pointer' }}
                />

                {/* Toggle Menu Button */}
                <button 
                    className="menu-toggle" 
                    onClick={toggleMenu} 
                    aria-expanded={isOpen}
                    aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                >
                    {isOpen ? 'x': '☰'}
                </button>

                {/* Navigation Menu */}
                <ul className={`menu ${isOpen ? 'menu-open' : ''}`}>
                    <li><Link to="/" onClick={() => setIsOpen(false)} className="hover-line">Inicio</Link></li>
                    {/* <li><Link to="/novedades">Novedades</Link></li> */}
                    {/* <li><Link to="/events">Eventos</Link></li> */}
                    {/* <li><Link to="/galery">Galeria</Link></li> */}
                    {/* <li><Link to="/greenDistrict">VERDE</Link></li> */}
                    <li><Link to="/nosotros" onClick={() => setIsOpen(false)} className="hover-line">Nosotros</Link></li>

                </ul>

                
            </div>
        </nav>
    );
};

// Subcomponente para los elementos del menú
// const MenuItem = ({ to, label, setIsOpen }) => (
//     <li>
//         <Link to={to} onClick={() => setIsOpen(false)}>
//             {label}
//         </Link>
//     </li>
// );

export default NavBar;
