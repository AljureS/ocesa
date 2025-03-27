import React from "react";
import "./Galeria.css";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import $ from "jquery";
// import eventsLong from '../../../data/eventsSection.json'

const Galeria = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        
        let xPos = 0;

        function getBgPos(i) {
        return (
            100 -
            (gsap.utils.wrap(
            0,
            360,
            gsap.getProperty(".ring", "rotationY") - 180 - i * 36
            ) /
            360) *
            500 +
            "px 0px"
        );
        }

        function drag(e) {
        if (e.touches) e.clientX = e.touches[0].clientX;
        gsap.to(".ring", {
            rotationY: "-=" + ((Math.round(e.clientX) - xPos) % 360),
            onUpdate: () => {
            gsap.set(".img", { backgroundPosition: (i) => getBgPos(i) });
            },
        });
        xPos = Math.round(e.clientX);
        }

        function dragStart(e) {
        if (e.touches) e.clientX = e.touches[0].clientX;
        xPos = Math.round(e.clientX);
        gsap.set(".ring", { cursor: "grabbing" });
        $(window).on("mousemove touchmove", drag);
        }

        function dragEnd() {
        $(window).off("mousemove touchmove", drag);
        gsap.set(".ring", { cursor: "grab" });
        }

        // GSAP context para que los selectores se limiten a este componente
        const ctx = gsap.context(() => {
        gsap
            .timeline()
            .set(".ring", { rotationY: 180, cursor: "grab" })
            .set(".img", {
            rotateY: (i) => i * -36,
            transformOrigin: "50% 50% 500px",
            z: -500,
            backgroundImage: (i) =>
                `url(https://picsum.photos/id/${i + 32}/600/400/)`,
            backgroundPosition: (i) => getBgPos(i),
            backfaceVisibility: "hidden",
            })
            .from(".img", {
            duration: 1.5,
            y: 200,
            opacity: 0,
            stagger: 0.1,
            ease: "expo",
            })
            .add(() => {
            $(".img").on("mouseenter", (e) => {
                const current = e.currentTarget;
                gsap.to(".img", {
                opacity: (i, t) => (t === current ? 1 : 0.5),
                ease: "power3",
                });
            });
            $(".img").on("mouseleave", () => {
                gsap.to(".img", { opacity: 1, ease: "power2.inOut" });
            });
            }, "-=0.5");

        $(window).on("mousedown touchstart", dragStart);
        $(window).on("mouseup touchend", dragEnd);
        }, containerRef);

        return () => {
        ctx.revert();
        $(window).off("mousedown touchstart", dragStart);
        $(window).off("mouseup touchend", dragEnd);
        $(window).off("mousemove touchmove", drag);
        };
    }, []);

    return (
        <div id="parallax-stage" ref={containerRef} className="parallax-stage">
        <div className="container">
            <div className="ring">
            {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="img" />
                
            ))}
            </div>
        </div>
        </div>
    );
};

export default Galeria;

// const Galeria = () => {

//     return (
//         <>

//         </>
//     )
// }

// export default Galeria
