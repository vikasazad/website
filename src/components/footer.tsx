import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-8 bg-[#FAF9F5] border-t border-[#C1A265]/10">
      <div className="container mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image
              src="/images/logo.svg"
              width={150}
              height={45}
              alt="Buildbility Logo"
              className="h-8 w-auto"
            />
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://www.instagram.com/buildbility/"
              target="_blank"
              className="neumorphic-icon-button"
            >
              <Instagram className="h-5 w-5 text-[#C1A265]" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
        <div className="mt-6 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <Link
              href="/terms"
              className="text-[#333333]/70 hover:text-[#C1A265] text-sm"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-[#333333]/70 hover:text-[#C1A265] text-sm"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="text-[#333333]/50 font-sans text-sm">
            © {new Date().getFullYear()} Buildbility. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
