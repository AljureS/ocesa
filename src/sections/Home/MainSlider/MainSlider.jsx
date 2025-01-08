import React, { useEffect, useState } from "react";
import "./MainSlider.css";
import events from "../../../data/dataEvents.json";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from "react-icons/ri";


const MainSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [oldIndex, setOldIndex] = useState(null); // indice de l img que se va
  const [direction, setDirection] = useState(null); // dureccion de la animacion prev o next
  const [transitioning, setTransitioning] = useState(false); // si hay o no una transicion

  useEffect(() => {
    if (!transitioning) return;

    const timeout = setTimeout(() => {
      // La animación ya terminó
      setTransitioning(false);
      setOldIndex(null); // ocultamos por completo el anterior
      setDirection(null); // reseteamos la dirección
    }, 1000);

    return () => clearTimeout(timeout);
  }, [transitioning]);

  const nextSlide = () => {
    if (transitioning) return;

    setOldIndex(currentIndex);
    setDirection("next");
    setTransitioning(true);
    setCurrentIndex((currentIndex) => (currentIndex + 1) % events.length);
  };

  const prevSlide = () => {
    if (transitioning) return;

    setOldIndex(currentIndex);
    setDirection("prev");
    setTransitioning(true);
    
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + events.length) % events.length
    );
  };

  const handleImageClick = () => {
    window.location.href = events[currentIndex].url; // Redirigir a la URL externa especificada en el objeto de eventos
  };

  return (
    <section className="slider-home">
      <div className="slider">
        <button className="slider-btn prev" onClick={prevSlide}>
          <RiArrowLeftDoubleFill size={72} />
        </button>

        {/* Imagen saliente (solo aparece si oldIndex !== null) */}
        {oldIndex !== null && (
          <div
            className={`slider-image-container slide-old ${direction}`}
            // onClick() si es necesario
          >
            <img src={events[oldIndex].banner} alt={events[oldIndex].name} />
          </div>
        )}

        <div
          className={`slider-image-container slide-current ${direction || ""}`}
          onClick={handleImageClick}
        >
          <img
            src={events[currentIndex].banner}
            alt={events[currentIndex].name}
          />
        </div>

        <button className="slider-btn next" onClick={nextSlide}>
          <RiArrowRightDoubleFill size={72} />
        </button>
      </div>
    </section>
  );
};

export default MainSlider;
