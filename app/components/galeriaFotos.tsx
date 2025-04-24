"use client";
import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

interface GalleryItem {
  before: string | StaticImageData;
  after: string | StaticImageData;
  alt?: string;
}

interface Props {
  galeria: GalleryItem[];
  interval?: number; // tempo entre slides (em ms)
}

export default function BeforeAfterSlider({ galeria, interval = 3000 }: Props) {
  const [sliderPos, setSliderPos] = useState(50);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const bounds = containerRef.current.getBoundingClientRect();
    const pos = ((e.clientX - bounds.left) / bounds.width) * 100;
    setSliderPos(Math.min(100, Math.max(0, pos)));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galeria.length);
      setSliderPos(50); // reinicia o slider ao trocar
    }, interval);

    return () => clearInterval(timer);
  }, [galeria.length, interval]);

  const current = galeria[currentIndex];

  return (
    
      <div
        ref={containerRef}
        className="relative w-full max-w-3xl h-[400px] overflow-hidden cursor-ew-resize select-none flex justify-center items-center "
        onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
        onMouseDown={handleMove}
        
      >
        <Image
          src={current.after}
          alt={current.alt || "Depois"}
          fill
          className="object-cover absolute inset-0 transition-opacity duration-500"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <Image
            src={current.before}
            alt={current.alt || "Antes"}
            fill
            className="object-cover transition-opacity duration-500"
          />
        </div>
        <div
          className="absolute top-0 bottom-0 w-1 bg-white left-0"
          style={{ left: `${sliderPos}%` }}
        />
      </div>

  );
}
