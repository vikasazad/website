"use client";

import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import { ScrollButton } from "./ScrollButton";
import { ScrollReveal } from "./ScrollReveal";

export function Hero() {
  return (
    <section className="w-full relative py-4 md:py:8 lg:py-8 mb-0 pb-0">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-6">
          <ScrollReveal className="max-w-3xl mx-auto space-y-4 md:space-y-6  ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-[#C1A265] font-serif leading-tight ">
              Streamline Your Operations, Maximize Profits
            </h1>
            <p className="text-[#333333] text-base md:text-lg lg:text-xl font-sans max-w-[90%] md:max-w-[90%] mx-auto leading-relaxed">
              Struggling with high labor costs, bad reviews, or manual
              inefficiencies? Our AI-powered solutions reduce costs, boost
              productivity, and enhance guest experiences through seamless
              automation and personalization.
            </p>
            <div className="flex flex-col  items-center  gap-2">
              <ScrollButton className="bg-[#2C3E50] text-white font-sans text-lg px-8 py-5 rounded-lg cursor-pointer  ">
                Start for free <MoveUpRight className="h-4 w-4 ml-2 inline" />
              </ScrollButton>
              <p className="text-[#666666] text-sm ">
                Free to try. No credit card required
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="relative  flex justify-center">
          <div
            className="w-full relative max-w-6xl mx-auto"
            style={{ perspective: "1200px" }}
          >
            {/* Top quarter circle shape */}

            <div className="relative">
              <Image
                src="/images/dashboard.svg"
                width={1200}
                height={600}
                alt="Dashboard interface"
                className="object-cover rounded-lg w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
