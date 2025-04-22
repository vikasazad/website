import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF9F5] py-4">
      <div className="container flex h-15 items-center justify-between ">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.svg"
            width={200}
            height={60}
            alt="Buildbility Logo"
            className="h-12 md:h-15 w-auto"
          />
        </div>
        <div>
          <Button
            className="rounded-xl px-6 py-3 transition-all duration-200 ease-in-out 
          bg-[#2C3E50] text-white font-sans flex items-center gap-2 
          box-shadow: 5px 5px 10px rgba(44, 62, 80, 0.3), -5px -5px 10px rgba(255, 255, 255, 0.1) cursor-pointer"
          >
            Start for free
            <MoveUpRight className="h-4 w-4 " />
          </Button>
        </div>
      </div>
    </header>
  );
}
