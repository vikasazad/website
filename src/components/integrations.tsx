"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import {
  BadgePercent,
  Clock3,
  Hotel,
  Layers,
  RefreshCw,
  SlidersHorizontal,
} from "lucide-react";
import Image from "next/image";
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiMapPin,
  PiWhatsappLogo,
} from "react-icons/pi";
import { TbMail } from "react-icons/tb";
import { LuConciergeBell } from "react-icons/lu";

export function Integrations() {
  const leftIcons = [
    {
      name: "Concierge Service",
      icon: <LuConciergeBell className="h-12 w-12 text-[#C1A265]" />,
      className: "self-start",
    },
    {
      name: "Google Maps",
      icon: <PiMapPin className="h-12 w-12 text-[#C1A265]" />,
      className: "self-end",
    },
    {
      name: "Bookings",
      icon: <Hotel className="h-12 w-12 text-[#C1A265]" />,
      className: "self-start",
    },

    {
      name: "Discount Offers",
      icon: <BadgePercent className="h-12 w-12 text-[#C1A265]" />,
      className: "self-end",
    },
  ];

  const rightIcons = [
    {
      name: "Facebook",
      icon: <PiFacebookLogo className="h-12 w-12 text-[#C1A265]" />,
      className: "self-end",
    },
    {
      name: "Instagram",
      icon: <PiInstagramLogo className="h-12 w-12 text-[#C1A265]" />,
      className: "self-start",
    },
    {
      name: "WhatsApp",
      icon: <PiWhatsappLogo className="h-12 w-12 text-[#C1A265]" />,
      className: "self-start",
    },
    {
      name: "Gmail",
      icon: <TbMail className="h-12 w-12 text-[#C1A265]" />,
      className: "self-end",
    },
  ];

  return (
    <section className="w-full py-12  bg-[#FAF9F5]">
      <div className="container mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="neumorphic-container p-8 md:p-12 lg:p-16 relative">
          <div className="absolute top-0 right-0 w-[120px] h-[120px] md:w-[220px] md:h-[220px]  bg-gradient pointer-events-none z-[1]" />
          <div className="flex justify-center w-full mb-8">
            <div className="inline-block rounded-full px-4 py-1 neumorphic-badge border-1 border-[#fbe6c7]">
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-[#C1A265]" />
                <span className="text-[#C1A265] font-sans text-sm">
                  Integrations
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif text-[#333333]">
              Integra <span className="text-[#C1A265]">tions</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#fbe6c7] to-[#ebd3e4] rounded-full mt-4 mb-4"></div>
            <p className="max-w-[700px] text-[#333333]/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-sans">
              Seamlessly integrate with your favorite&apos;s
            </p>
          </div>

          <div className="relative min-h-[400px] lg:min-h-[500px] max-w-5xl mx-auto">
            <div className="absolute inset-0">
              {/* SVG Lines Pattern */}
              <div className="w-full max-w-[100%] h-[200px] lg:h-[360px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 relative hidden lg:block">
                <Image
                  src="/images/lines2.svg"
                  alt="Lines Pattern"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Left side icons */}
              <div className="absolute left-1/4 lg:left-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 lg:gap-12 w-[120px]">
                {leftIcons.map((icon, index) => (
                  <ScrollReveal key={index}>
                    <div
                      className={`w-full flex ${
                        index % 2 === 0
                          ? "justify-start"
                          : "md:justify-start lg:justify-end"
                      }`}
                    >
                      <div className="w-18 h-18 bg-white rounded-lg flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                        {icon.icon}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Right side icons */}
              <div className="absolute right-0 md:right-1/4 lg:right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 lg:gap-12 w-[120px]">
                {rightIcons.map((icon, index) => (
                  <ScrollReveal key={index}>
                    <div
                      className={`w-full flex ${
                        index % 2 === 0
                          ? "md:justify-start lg:justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div className="w-18 h-18 bg-white rounded-lg flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                        {icon.icon}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Central Logo */}
              <div className="hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white neumorphic-card rounded-lg lg:flex items-center justify-center z-20 ">
                <Image
                  src="/images/logo2.svg"
                  alt="Buildbility Logo"
                  width={50}
                  height={50}
                  className="w-16 h-16"
                />
              </div>
            </div>
          </div>

          {/* Feature Labels */}
          <div className="flex flex-col items-center justify-center mt-6 w-full">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl w-full text-center">
              <div className="border-r-2 border-dashed border-[#C1A265] ">
                <div className="flex items-center gap-2">
                  <RefreshCw className="h-6 w-6 text-[#C1A265]" />
                  <h3 className="text-sm font-medium text-[#333333]">
                    Seamless Automation
                  </h3>
                </div>
              </div>
              <div className="border-r-2 border-dashed border-[#C1A265] ">
                <div className="flex items-center gap-2">
                  <Clock3 className="h-6 w-6 text-[#C1A265]" />
                  <h3 className="text-sm font-medium text-[#333333]">
                    Real-Time Data Sync
                  </h3>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="h-6 w-6 text-[#C1A265]" />
                  <h3 className="text-sm font-medium text-[#333333]">
                    Customizable Solutions
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
