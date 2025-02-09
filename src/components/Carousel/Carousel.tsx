import React, { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

type CarouselProps = {
  content: React.ReactNode[];
  buttonStyle: ButtonStyleVariant;
};

type ButtonStyleVariant = "FullHeight" ;

const buttonStyles: Record<ButtonStyleVariant, string> = {
  FullHeight: "h-full px-4 z-10",
  // Circle: "rounded-full w-10 h-10 flex items-center justify-center z-10",
};

const Carousel: React.FC<CarouselProps> = ({ content, buttonStyle }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const itemWidth = containerRef.current.clientWidth;
      containerRef.current.scrollBy({
        left: direction === "left" ? -itemWidth : itemWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div
        ref={containerRef}
        className="flex overflow-hidden scroll-smooth snap-x snap-mandatory"
      >
        {content.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full snap-start"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => handleScroll("left")}
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white hover:bg-gray-900 ${buttonStyles[buttonStyle]}`}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => handleScroll("right")}
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white hover:bg-gray-900 ${buttonStyles[buttonStyle]}`}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;