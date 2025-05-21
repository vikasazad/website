import Image from "next/image";
import { ScrollButton } from "./ScrollButton";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="container flex h-15 items-center justify-center md:justify-between relative z-10">
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/images/logo.svg"
            width={200}
            height={50}
            alt="Buildbility Logo"
            className="h-11 md:h-12 lg:h-13 w-auto"
          />
        </div>

        <div className="hidden md:block">
          <ScrollButton
            className="rounded-lg px-6 py-5 transition-all duration-200 ease-in-out 
          bg-[#2C3E50] text-white text-lg tracking-normal font-sans flex items-center gap-2 
          box-shadow: 5px 5px 10px rgba(44, 62, 80, 0.3), -5px -5px 10px rgba(255, 255, 255, 0.1) cursor-pointer"
          >
            Try it free
          </ScrollButton>
        </div>
      </div>
    </header>
  );
}
