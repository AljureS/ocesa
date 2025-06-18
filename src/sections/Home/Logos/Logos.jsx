import { useEffect, useState } from "react";

const images = [
    "/logos/logos11.png",
    "/logos/APOYA.png",
    "/logos/logos3.png"
];

const SLIDE_INTERVAL = 3000; 

export default function Logos() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        }, SLIDE_INTERVAL);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ width: "100vw", overflow: "hidden" }}>
            <div
                style={{
                display: "flex",
                width: `${images.length * 100}vw`,
                transform: `translateX(-${current * 100}vw)`,
                transition: "transform 0.5s ease-in-out",
                }}
            >
                {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Slide ${index + 1}`}
                    style={{ width: "100vw", height: "auto", objectFit: "contain" }}
                />
                ))}
            </div>
        </div>
    );
}
