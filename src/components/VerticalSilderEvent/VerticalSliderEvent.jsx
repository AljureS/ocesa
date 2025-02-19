import React, { useRef, useEffect, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./VerticalSliderEvent.css";
import EventsSlider from "../../sections/Home/EventsSlider/EventsSlider";

import gsap from "gsap";

const VerticalSliderEvent = () => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const sections = gsap.utils.toArray(".image");
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                // pinSpacing: false,
                start: "top top",
                end: `+=${(sections.length - 1) * window.innerHeight}`,
                scrub: true,
                // Puedes activar los markers para depuración:
                // markers: true,
            },
            });
        
        sections.slice(1).forEach((section) => {
            tl.fromTo(
                section,
                { y: "100%" },
                { y: "0%", duration: 1 }
            );
        });
        
            // Refresca ScrollTrigger para asegurar la correcta configuración
        ScrollTrigger.refresh();
        
        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
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
