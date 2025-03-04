import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./NavBar.css";
import { GrClose } from "react-icons/gr";
import { RiMenuUnfold4Fill } from "react-icons/ri";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const navigate = useNavigate();
    const location = useLocation();

    // Efecto para manejar el scroll
    useEffect(() => {
        const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
        setIsVisible(visible);
        setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    // Cerrar el menú al cambiar la ruta
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    // Toggle del menú
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    // Navegación para el logo (se puede mantener si se desea)
    const redirectToHome = () => {
        navigate("/");
    };

    return (
        <header>
            <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
                <div className="navbar-container">
                {/* Logo */}
                    <img
                        src="/og/ocesa.webp"
                        alt="Ocesa Logo"
                        className="logo"
                        onClick={redirectToHome}
                        style={{ cursor: "pointer" }}
                    />

                    {/* Botón para toggle del menú */}
                    <button
                        className="menu-toggle"
                        onClick={toggleMenu}
                        aria-expanded={isOpen}
                        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                    >
                        {isOpen ? <GrClose size={40} /> : <RiMenuUnfold4Fill size={41} />}
                    </button>

                    {/* Menú de navegación */}
                    <ul className={`menu ${isOpen ? "menu-open" : ""}`}>
                        <li><Link to="/" className="hover-line">Inicio</Link></li>
                        <li> <Link to="/cartelera" className="hover-line">Cartelera </Link> </li>
                        {/* <li> <Link to="/galeria" className="hover-line">Galeria </Link> </li> */}
                        <li> <Link to="/nosotros" className="hover-line">Nosotros </Link> </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;