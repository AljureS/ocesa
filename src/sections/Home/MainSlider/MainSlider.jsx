import React, { useEffect, useState, useCallback, useMemo } from "react";
import "./MainSlider.css";
import events from "../../../data/dataEvents.json";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useSwipeable } from "react-swipeable";

// Duración de la transición en ms (debe coincidir con CSS)
const TRANSITION_DURATION = 1000;

const MainSlider = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [oldIndex, setOldIndex] = useState(null);
  const [direction, setDirection] = useState(null);
  const [transitioning, setTransitioning] = useState(false);

  // Handler de resize optimizado
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Verificación inicial

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Memoizar URLs de imágenes
  const currentImage = useMemo(() => (
    isMobile 
      ? events[currentIndex]?.mobileBanner 
      : events[currentIndex]?.banner
  ), [isMobile, currentIndex]);

  const oldImage = useMemo(() => {
    if (oldIndex === null) return null;
    return isMobile 
      ? events[oldIndex]?.mobileBanner 
      : events[oldIndex]?.banner;
  }, [isMobile, oldIndex]);

  // Control de transiciones
  useEffect(() => {
    if (!transitioning) return;

    const timeout = setTimeout(() => {
      setTransitioning(false);
      setOldIndex(null);
      setDirection(null);
    }, TRANSITION_DURATION);

    return () => clearTimeout(timeout);
  }, [transitioning]);

  // Navegación memoizada
  const nextSlide = useCallback(() => {
    if (transitioning) return;
    
    setOldIndex(currentIndex);
    setDirection("next");
    setTransitioning(true);
    setCurrentIndex(prev => (prev + 1) % events.length);
  }, [transitioning, currentIndex]);

  const prevSlide = useCallback(() => {
    if (transitioning) return;
    
    setOldIndex(currentIndex);
    setDirection("prev");
    setTransitioning(true);
    setCurrentIndex(prev => (prev - 1 + events.length) % events.length);
  }, [transitioning, currentIndex]);

  // Handler de clic memoizado
  const handleImageClick = useCallback(() => {
    window.location.href = events[currentIndex]?.url;
  }, [currentIndex]);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <section className="slider-home" {...handlers}>
      <div className="slider-main">
        <button className="slider-btn prev" onClick={prevSlide} aria-label="Previous">
          <GrPrevious size={62} />
        </button>

        {oldIndex !== null && (
          <div
            className={`slider-image-container slide-old ${direction}`}
            onClick={handleImageClick}
            aria-hidden="true"
          >
            <img
              src={oldImage}
              className="main-slider-image"
              alt={events[oldIndex]?.name}
              loading="lazy"
            />
          </div>
        )}

        <div
          className={`slider-image-container slide-current ${direction || ""}`}
          onClick={handleImageClick}
        >
          <img
            src={currentImage}
            alt={events[currentIndex]?.name}
            className="main-slider-image"
            loading="lazy"
          />
        </div>

        <button className="slider-btn next" onClick={nextSlide} aria-label="Next">
          <GrNext size={62} />
        </button>
      </div>
    </section>
  );
};

export default MainSlider;