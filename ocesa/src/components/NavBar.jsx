import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import './NavBar.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const openMenu = ()=> {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <img src="./og/ocesa.png" alt="logo-ocesa" className="logo" />
                {/* <h1 className="logo">Ocesa</h1> */}
                <button 
                    className="menu-toggle" 
                    onClick={openMenu} 
                    style={{ display: window.innerWidth <= 768 ? 'block' : 'none' }}
                    >
                    ☰
                </button>

                <ul className={`menu ${isOpen ? 'menu-open' : ''}`} style={{ display: window.innerWidth > 768 ? 'flex' : isOpen ? 'flex' : 'none' }}>
                    <li><Link to="/">INICIO</Link></li>
                    {/* <li><Link to="/novedades">Novedades</Link></li> */}
                    {/* <li><Link to="/events">Eventos</Link></li> */}
                    {/* <li><Link to="/galery">Galeria</Link></li> */}
                    {/* <li><Link to="/greenDistrict">VERDE</Link></li> */}
                    <li><Link to="/nosotros">NOSOTROS</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;

