import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    // POr el nnav bar 
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, );

    const redirectToHome = () => {
        navigate('/');
        setIsOpen(false);
    };

    return (
        <header>
            <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
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
        </header>
    );
};

export default NavBar;
