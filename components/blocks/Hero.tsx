// components/blocks/Hero.tsx
"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

// IMPORT your images from: C:\Users\Admin\OneDrive\Desktop\NAZMI_BOUTIQUE-1\app\public\images\...
import offer1 from "@/app/public/images/offer1.png";
import offer2 from "@/app/public/images/offer2.png"; // make sure this file exists
import offer3 from "@/app/public/images/offer3.png"; // make sure this file exists
   // adjust extension if it's .png

const SLIDES: { src: StaticImageData; alt: string }[] = [
  { src: offer1, alt: "Offer 1" },
  { src: offer2, alt: "Offer 2" },
  { src: offer3, alt: "Offer 3" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((n) => (n + 1) % SLIDES.length);
    }, 6000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  return (
    <section className="text-center py-20 bg-gray-100 rounded-2xl">
      <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-xl">
        <div className="relative h-[320px] md:h-[420px]">
          {SLIDES.map(({ src, alt }, i) => (
            <Image
              key={i}
              src={src}
              alt={alt}
              fill
              sizes="100vw"
              priority={i === 0}
              className={`absolute inset-0 object-cover transition-[opacity,transform] ease-in-out ${
                i === index ? "opacity-100 scale-105 duration-[6000ms]" : "opacity-0 scale-100 duration-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
