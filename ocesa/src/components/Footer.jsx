import React from 'react';
import './Footer.css'; // Importar el archivo CSS
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    const redirectToHome = () => {
        navigate('/');
    };

    return (
        <footer className='footer'>
            <div className='footer-container'>
                <img 
                    src="/og/ocesa.webp" 
                    alt="Ocesa Logo" 
                    className="logoFooter" 
                    onClick={redirectToHome} 
                    style={{ cursor: 'pointer' }}
                />

                <div className='footer-text'>
                    <p className='footerLinks'>
                        <Link to="/terminos-y-condiciones">TÉRMINOS Y CONDICIONES</Link>
                        <> / </>
                        <Link to="/politica-de-privacidad">POLÍTICA DE PRIVACIDAD</Link>
                        <> / </>
                        <a href="mailto:notificaciones-col@ocesa.co">PRENSA</a>
                    </p>
                    <p>© 2023 OCESA COLOMBIA. TODOS LOS DERECHOS RESERVADOS. DESARROLLADO POR OCESA COLOMBIA</p>
                </div>

                <div className="footer-right">
                    <ul className="social-icons">
                        <li>
                        <a href="https://www.instagram.com/ocesacolombia/" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.1em" viewBox="0 0 448 512">
                            <path d="M 224.1 141 c -63.6 0 -114.9 51.3 -114.9 114.9 s 51.3 114.9 114.9 114.9 S 339 319.5 339 255.9 S 287.7 141 224.1 141 Z m 0 189.6 c -41.1 0 -74.7 -33.5 -74.7 -74.7 s 33.5 -74.7 74.7 -74.7 s 74.7 33.5 74.7 74.7 s -33.6 74.7 -74.7 74.7 Z m 146.4 -194.3 c 0 14.9 -12 26.8 -26.8 26.8 c -14.9 0 -26.8 -12 -26.8 -26.8 s 12 -26.8 26.8 -26.8 s 26.8 12 26.8 26.8 Z m 76.1 27.2 c -1.7 -35.9 -9.9 -67.7 -36.2 -93.9 c -26.2 -26.2 -58 -34.4 -93.9 -36.2 c -37 -2.1 -147.9 -2.1 -184.9 0 c -35.8 1.7 -67.6 9.9 -93.9 36.1 s -34.4 58 -36.2 93.9 c -2.1 37 -2.1 147.9 0 184.9 c 1.7 35.9 9.9 67.7 36.2 93.9 s 58 34.4 93.9 36.2 c 37 2.1 147.9 2.1 184.9 0 c 35.9 -1.7 67.7 -9.9 93.9 -36.2 c 26.2 -26.2 34.4 -58 36.2 -93.9 c 2.1 -37 2.1 -147.8 0 -184.8 Z M 398.8 388 c -7.8 19.6 -22.9 34.7 -42.6 42.6 c -29.5 11.7 -99.5 9 -132.1 9 s -102.7 2.6 -132.1 -9 c -19.6 -7.8 -34.7 -22.9 -42.6 -42.6 c -11.7 -29.5 -9 -99.5 -9 -132.1 s -2.6 -102.7 9 -132.1 c 7.8 -19.6 22.9 -34.7 42.6 -42.6 c 29.5 -11.7 99.5 -9 132.1 -9 s 102.7 -2.6 132.1 9 c 19.6 7.8 34.7 22.9 42.6 42.6 c 11.7 29.5 9 99.5 9 132.1 s 2.7 102.7 -9 132.1 Z"></path>
                            </svg>
                        </a>
                        </li>
                        <li>
                        <a href="https://www.twitter.com/OcesaColombia" aria-label="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.1em" viewBox="0 0 512 512">
                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                            </svg>
                        </a>
                        </li>
                        <li>
                        <a href="https://www.tiktok.com/@ocesacolombia?lang=es" aria-label="TikTok">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.1em" viewBox="0 0 448 512">
                            <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                            </svg>
                        </a>
                        </li>
                        <li>
                        <a href="https://www.youtube.com/user/OcesaColombia" aria-label="YouTube">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.1em" viewBox="0 0 576 512">
                            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                            </svg>
                        </a>
                        </li>
                        <li>
                        <a href="https://www.facebook.com/OcesaColombia" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.1em" viewBox="0 0 512 512">
                            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                            </svg>
                        </a>
                        </li>
                    </ul>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
