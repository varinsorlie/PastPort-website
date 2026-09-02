"use client";

import { useRef, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ScrollCarouselProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollCarousel({
  children,
  className = "",
}: ScrollCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 320; // Card width + gap
    const newScrollLeft =
      direction === "left"
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;
    
    scrollRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Left Arrow - mobile only */}
      <button
        onClick={() => scroll("left")}
        className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[var(--burgundy)] text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[var(--burgundy)]/80"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Scrollable container - centered on mobile, grid on desktop */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto md:overflow-visible scrollbar-hide scroll-smooth px-[calc(50vw-160px)] md:px-4 md:justify-center md:flex-wrap py-4"
        style={{
          scrollSnapType: "x mandatory",
        }}
      >
        {children}
      </div>

      {/* Right Arrow - mobile only */}
      <button
        onClick={() => scroll("right")}
        className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[var(--burgundy)] text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[var(--burgundy)]/80"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
