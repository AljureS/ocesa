import React, { useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./VerticalSlider.css";
import gsap from "gsap";

// import events from "../../data/dataEvents.json";
import events from "../../data/dataHidden.json";
import CardEvent from "../../components/CardEvent/CardEvent";

const VerticalSlider = () => {
    const containerRef = useRef(null);
    console.log(events);

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
                <CardEvent evento = {events[0]}></CardEvent>
            </section>
            <section className="image section-2">
                
                <CardEvent evento = {events[1]}></CardEvent>
            </section>
            <section className="image section-3">
                <CardEvent evento = {events[2]}></CardEvent>
            </section>
            {/* <section className="image section-4"><EventsSlider /></section> */}
        </div>
    );
};

export default VerticalSlider;
