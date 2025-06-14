// src/components/section/BentoSection.tsx
"use client";

import React from "react";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import { Compass, Smile, Car, HandHeart } from 'lucide-react';
import Image from "next/image";

export function BentoSection() {
  return (
    <section className="max-w-full mx-px px-2 py-2 auto-cols-max">
      <BentoGrid className="grid-cols-1 sm:grid-cols-4 auto-rows-[22rem] gap-2">
        {/* Large hero */}
        <BentoCard
          name="Explore more to get your comfort zone"
          description="Book your perfect stay with us."
          href="#"
          cta="Booking Now"
          Icon={Compass}
          className="col-span-1 sm:col-span-2 sm:row-span-2 relative"
          background={
            <div className="absolute inset-0">
              <Image
                src="/bento/hero-car.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          }
        />

        {/* Medium */}
        <BentoCard
          name="Beyond accommodation, creating memories of a lifetime"
          description=""
          href="#"
          cta="Learn More"
          Icon={Smile}
          className="col-span-1 sm:col-span-2 relative"
          background={
            <div className="absolute inset-0">
              <Image
                src="/bento/car-front.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          }
        />

        {/* Small 1 */}
        <BentoCard
          name="Vehicle Available"
          description="3,490"
          href="#"
          cta="View Fleet"
          Icon={Car}
          className="col-span-1 relative"
          background={
            <div className="absolute inset-0">
              <Image
                src="/bento/happy-man.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          }
        />

        {/* Small 2 */}
        <BentoCard
          name="Seamless Experience"
          description=""
          href="#"
          cta="Learn More"
          Icon={HandHeart}
          className="col-span-1 relative"
          background={
            <div className="absolute inset-0">
              <Image
                src="/bento/car-driving.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          }
        />
      </BentoGrid>
    </section>
  );
}
