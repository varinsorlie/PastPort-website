"use client";

import { useEffect, useRef, ReactNode } from "react";

interface InfiniteScrollProps {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}

export default function InfiniteScroll({
  children,
  speed = 30,
  direction = "left",
  pauseOnHover = true,
  className = "",
}: InfiniteScrollProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current || !innerRef.current) return;

    const scroller = scrollerRef.current;
    const inner = innerRef.current;

    // Clone children for seamless loop
    const scrollerContent = Array.from(inner.children);
    scrollerContent.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      clone.setAttribute("aria-hidden", "true");
      inner.appendChild(clone);
    });

    // Set animation
    const animationDirection = direction === "left" ? "normal" : "reverse";
    inner.style.animationDirection = animationDirection;
    inner.style.animationDuration = `${speed}s`;

    return () => {
      // Cleanup clones on unmount
      const clones = inner.querySelectorAll('[aria-hidden="true"]');
      clones.forEach((clone) => clone.remove());
    };
  }, [direction, speed]);

  return (
    <div
      ref={scrollerRef}
      className={`overflow-hidden ${className}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
      }}
    >
      <div
        ref={innerRef}
        className={`flex gap-6 w-max animate-scroll ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
