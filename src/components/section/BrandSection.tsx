// src/components/section/LogosSection.tsx
"use client";

import React from "react";
import Image from "next/image";

const logos = [
  "/logo/daihatsu-1.svg",
  "/logo/honda-1.svg",
  "/logo/hyundai-1.svg",
  "/logo/mazda-1.svg",
  "/logo/mitsubishi-1.svg",
  "/logo/toyota-1.svg",
];

export function BrandSection() {
  return (
    <section className="max-w-full mx-px px-2 pb-24">
      <div className="flex items-center justify-center flex-wrap gap-24 opacity-100">
        {logos.map((src) => (
          <div key={src} className="h-8 w-auto">
            <Image src={src} alt="" width={120} height={32} />
          </div>
        ))}
      </div>
    </section>
  );
}
