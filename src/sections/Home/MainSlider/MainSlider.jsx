import React, { useEffect, useState } from "react";
import "./MainSlider.css";
import events from "../../../data/dataEvents.json";
// import events from "../../../data/dataHidden.json";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useSwipeable } from "react-swipeable"; 

const MainSlider = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [oldIndex, setOldIndex] = useState(null); // indice de l img que se va
  const [direction, setDirection] = useState(null); // dureccion de la animacion prev o next
  const [transitioning, setTransitioning] = useState(false); 

  const checkMobile = () => {
    return window.innerWidth <= 768;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(checkMobile());
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!transitioning) return;

    const timeout = setTimeout(() => {
      // La animación ya terminó
      setTransitioning(false);
      setOldIndex(null); // ocultamos por completo el anterior
      setDirection(null); // reseteamos la dirección
    }, 750);

    return () => clearTimeout(timeout);
  }, [transitioning]);

  const nextSlide = () => {
    if (transitioning) return;

    setOldIndex(currentIndex);
    setDirection("next");
    setTransitioning(true);
    setCurrentIndex((currentIndex) => (currentIndex + 1) % events.length);
    scrollBy({ left: 300, behavior: 'smooth' });
  };

  const prevSlide = () => {
    if (transitioning) return;

    setOldIndex(currentIndex);
    setDirection("prev");
    setTransitioning(true);

    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + events.length) % events.length
    );
    scrollBy({ left: -300, behavior: 'smooth' })
  };

  const handleImageClick = () => {
    window.location.href = events[currentIndex].url; 
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <section className="slider-home" {...handlers}>
      <div className="slider-main">
        <button className="slider-btn prev" onClick={prevSlide}>
          <GrPrevious size={62} />
        </button>

        {oldIndex !== null && (
          <div
            className={`slider-image-container slide-old ${direction}`}
            onClick={handleImageClick}
          >
            <img
              src={
                isMobile 
                  ? `${events[oldIndex].mobileBanner}`
                  : `${events[oldIndex].banner}`
              }
              className="main-slider-image"
              alt={events[oldIndex].name}
              loading="lazy"
            />
          </div>
        )}

        <div
          className={`slider-image-container slide-current ${direction || ""}`}
          onClick={handleImageClick}
        >
          <img
            src={
              isMobile
                ? `${events[currentIndex].mobileBanner}`
                : `${events[currentIndex].banner}`
            }
            alt={events[currentIndex].name}
            className="main-slider-image"
            loading="lazy"
          />
        </div>

        <button className="slider-btn next" onClick={nextSlide}>
          <GrNext size={62} />
        </button>
      </div>
    </section>
  );
};

export default MainSlider;
