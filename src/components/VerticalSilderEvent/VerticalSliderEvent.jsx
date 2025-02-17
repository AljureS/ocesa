import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./VerticalSliderEvent.css";
import EventsSlider from "../../sections/Home/EventsSlider/EventsSlider";

gsap.registerPlugin(ScrollTrigger);

const VerticalSliderEvent = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Seleccionamos todas las secciones con la clase "image"
        const sections = gsap.utils.toArray(".image");

    // Creamos una timeline para secuenciar las animaciones de entrada
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current, // Contenedor principal
            pin: true, // Pin del contenedor mientras dura la animación
            start: "top top",
            // La duración es igual a la altura de viewport por cada transición (secciones - 1)
            end: `+=${(sections.length - 1) * window.innerHeight}`,
            // markers: true, 
            scrub: true, // Sincroniza la animación con el scroll
        },
    });

    // Para cada sección a partir de la segunda, animamos desde fuera de la pantalla hasta su posición normal
    sections.slice(1).forEach((section) => {
        tl.fromTo(
            section,
            { y: "100%" }, // Inicia fuera de la vista, abajo
            { y: "0%", duration: 1 } // Termina en su posición (entra cubriendo la anterior)
        );
    });

    // Cleanup al desmontar el componente
        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, []);

    return (
        <div ref={containerRef} className="container-vertical-slider">
            <section className="image section-1">
                <h2>Sección 1</h2>
            </section>
            <section className="image section-2">
                <h2>Sección 2</h2>
            </section>
            <section className="image section-3">
                <h2>Sección 3</h2>
            </section>
            {/* <section className="image section-4"><EventsSlider /></section> */}
        </div>
    );
};

export default VerticalSliderEvent;
