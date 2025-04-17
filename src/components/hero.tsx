import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full  bg-[#FAF9F5] relative">
      <div className="container  relative">
        <div className="relative flex justify-center">
          <div className="neumorphic-image-container w-full relative">
            <Image
              src="/images/hero.png"
              width={1200}
              height={600}
              alt="Minimal elegant workspace"
              className="object-cover rounded-2xl w-full h-[calc(90vh-4rem)] md:h-[calc(90vh-6rem)]"
              priority
            />
            <div className="absolute inset-0 rounded-2xl">
              <div className=" absolute top-[50%]  -translate-y-1/2 left-3 md:left-12 max-w-lg z-10 space-y-4 md:space-y-6 p-4 md:p-0">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#C1A265] font-serif leading-tight">
                  Streamline Your Operations, Maximize Profits
                </h1>
                <p className="text-[#333333] text-base md:text-lg lg:text-xl font-sans max-w-[90%] md:max-w-[100%] leading-relaxed">
                  Struggling with high labor costs, bad reviews, or manual
                  inefficiencies? Our AI-powered solutions reduce costs, boost
                  productivity, and enhance guest experiences through seamless
                  automation and personalization.
                </p>
                <div className="pt-2 flex justify-center md:pt-4 md:justify-start">
                  <Button className="neumorphic-button-primary bg-[#2C3E50] text-white font-sans text-lg px-8 py-6 cursor-pointer">
                    Start for free <MoveUpRight className="h-4 w-4 " />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
