"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SLIDES = [
  { src: "/images/offer1.png", alt: "Offer 1" },
  { src: "/images/offer2.png", alt: "Offer 2" },
  { src: "/images/offer3.png", alt: "Offer 3" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((n) => (n + 1) % SLIDES.length);
    }, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section className="text-center py-20 bg-gray-100 rounded-2xl">
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-xl">
        <div className="relative h-[500px] md:h-[650px] lg:h-[750px]">
          {SLIDES.map(({ src, alt }, i) => (
            <Image
              key={i}
              src={src}
              alt={alt}
              fill
              sizes="100vw"
              priority={i === 0}
              className={`absolute inset-0 object-cover transition-[opacity,transform] ease-in-out ${
                i === index
                  ? "opacity-100 scale-105 duration-[6000ms]"
                  : "opacity-0 scale-100 duration-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}