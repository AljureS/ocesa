import React from 'react';

const NavBar = () => {
    return (
        
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="logo">Mi Sitio</h1>
                <ul className="menu">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/about">Acerca</Link></li>
                <li><Link to="/services">Servicios</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
                </ul>
            </div>
        </nav>
        
    );
};

export default NavBar;
