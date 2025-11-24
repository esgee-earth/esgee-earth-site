"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroIllustrations() {
  const illustrations = [
    "/illustrations/illustration1.svg",
    "/illustrations/illustration2.svg",
    "/illustrations/illustration3.svg",
    "/illustrations/illustration4.svg",
    "/illustrations/illustration5.svg",
    "/illustrations/illustration6.svg",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % illustrations.length),
      2500
    );
    return () => clearInterval(interval);
  }, [illustrations.length]);

  return (
    <div className="mt-4 mb-15 flex justify-center">
      {/* This container now *reserves space* so it won't overlap section 2 */}
      <div className="relative w-full max-w-3xl h-64 md:h-80">
        {illustrations.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt="SME illustration"
            fill
            sizes="(max-width: 768px) 80vw, 600px"
            className={`
              absolute inset-0
              m-auto
              object-contain
              transition-opacity duration-700
              ${i === activeIndex ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
