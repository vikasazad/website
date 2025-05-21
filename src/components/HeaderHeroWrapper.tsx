"use client";
import React from "react";
import { Header } from "./header";
import { Hero } from "./hero";
import { ShootingStarField } from "./ShootingStar";

export function HeaderHeroWrapper() {
  return (
    <div
      className="w-full mt-4 mb-0 px-8 lg:px-27 lg:pb-0 lg:pt-4   pt-4  relative"
      style={{
        borderRadius: "15px",
        background: "url('/images/background.avif') center/cover no-repeat",
        overflow: "hidden",
      }}
    >
      <ShootingStarField starCount={15} />
      <Header />
      <Hero />
      <div className="z-10 absolute bottom-0 left-0 right-0 h-30 bg-gradient-to-b from-[#FAF9F5]/0 to-[#FAF9F5]/500 "></div>
    </div>
  );
}
