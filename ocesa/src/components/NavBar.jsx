import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import { useEffect } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        // console.log(isOpen);
        
        setIsOpen((prev) => !prev)
        // setIsOpen(!isOpen);
        // console.log(isOpen);
        
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
                    {isOpen ? 'X': '☰'}
                </button>

                {/* Navigation Menu */}
                <ul className={`menu ${isOpen ? 'menu-open' : ''}`}>
                    <MenuItem to="/" label="Inicio" setIsOpen={setIsOpen} />
                    <MenuItem to="/nosotros" label="Nosotros" setIsOpen={setIsOpen} />
                    {/* Agregar más rutas según sea necesario */}
                </ul>

                
            </div>
        </nav>
    );
};

// Subcomponente para los elementos del menú
const MenuItem = ({ to, label, setIsOpen }) => (
    <li>
        <Link to={to} onClick={() => setIsOpen(false)}>
            {label}
        </Link>
    </li>
);

export default NavBar;
