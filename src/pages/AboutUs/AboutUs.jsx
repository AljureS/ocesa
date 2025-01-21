import React from 'react'
import './AboutUs.css'
import ScrollAnimation from 'react-animate-on-scroll'

const AboutUs = () => {
    return (
        <>
            <section className='about-us-1'>
                <div  className='about-us-container-1'>
                    <img className='concierto' src="aboutUs/concierto.jpg" alt="concierto" />
                    <h3 id='title-about' className='animate__animated animate__slideInDown'>¿Quiénes somos?</h3>
                </div>
            </section>

            <section className='about-us-2'>
                <div className= 'about-us-container-2'>
                    <ScrollAnimation animateIn="animate__fadeInUp" animateOut='animate__fadeOutUp'  animateOnce={false}>
                        <div className='about-us-title-container'>
                            <h2 className='about-us-text-title1'>Somos</h2> <h2 className='about-us-text-title'>OCESA</h2>
                        </div>

                    </ScrollAnimation>

                    <ScrollAnimation animateIn="animate__fadeInLeft" animateOut='animate__fadeOutRight'  animateOnce={false}>
                        <p className='about-us-text'>La promotora de emociones más grande de México y Latinoamérica</p>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="animate__fadeInRight" animateOut='animate__fadeOutLeft'  animateOnce={false}>
                        <p className='about-us-text'>Hoy, formamos parte de Live Nation, la promotora de entretenimiento más importante del mundo.</p>
                    </ScrollAnimation>
                </div>
            </section>

            <section className='contact '>
                <div className="contact-details">
                    <h2 className="section-header">Contacto</h2>

                    <div className="direct-contact-container">
                        <ul className="contact-list">
                            <li className="list-item"><span className="contact-text place">Cra 11 # 87 - 51 of 201, Bogotá - Colombia</span></li>
                            <li className="list-item"><span className="contact-text phone"><a href="tel:+576017940300" title="Llámanos">+57 601 794 0300</a></span></li>
                            <li className="list-item"><span className="contact-text gmail"><a href="mailto:notificaciones-col@ocesa.co" title="Envíanos un correo">notificaciones-col@ocesa.co</a></span></li>
                        </ul>
                    </div>

                    <div className="copyright">
                        © COLOMBIA DERECHOS RESERVADOS
                        <div className="logo-contact">
                            {/* <a href="https://ocesa.co/"> */}
                            <img src="og/ocesa.webp" alt="Ocesa Colombia" width="100"/>
                            {/* </a> */}
                        </div> 
                    </div>

                </div>
            </section>

            <section className='about-us-social-media'>

            </section>
        </>
    )
}

export default AboutUs