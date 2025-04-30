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
  interval?: number;
}

export default function BeforeAfterSlider({ galeria, interval = 3000 }: Props) {
  const [sliderPos, setSliderPos] = useState(50);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const bounds = containerRef.current.getBoundingClientRect();
    const pos = ((clientX - bounds.left) / bounds.width) * 100;
    setSliderPos(Math.min(100, Math.max(0, pos)));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.buttons === 1) {
      updatePosition(e.clientX);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    updatePosition(e.clientX);
  };

  useEffect(() => {
    // detecta mobile uma única vez ao montar
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galeria.length);
      setSliderPos(50);
    }, interval);
    return () => clearInterval(timer);
  }, [galeria.length, interval]);

  const current = galeria[currentIndex];

  if (isMobile) {
    // Layout mobile: imagens uma abaixo da outra
    return (
      <div className="w-full max-w-3xl space-y-4">
        <div className="relative w-full h-[300px]">
          <Image
            src={current.before}
            alt={current.alt || "Antes"}
            fill
            className="object-cover rounded"
          />
        </div>
        <div className="relative w-full h-[300px]">
          <Image
            src={current.after}
            alt={current.alt || "Depois"}
            fill
            className="object-cover rounded"
          />
        </div>
      </div>
    );
  }

  // Layout desktop: efeito de arrastar
  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-3xl h-[400px] overflow-hidden cursor-ew-resize select-none flex justify-center items-center"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
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
        className="absolute top-0 bottom-0 w-1 bg-white"
        style={{ left: `${sliderPos}%` }}
      />
    </div>
  );
}
