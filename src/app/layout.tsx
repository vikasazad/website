import type React from "react";
import "@/app/globals.css";
import { Inter, Cinzel, Open_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
});

export const metadata = {
  title:
    "Buildbility - Streamline Your Hospitality Operations, Maximize Profits",
  description:
    "Streamline hospitality operations with cutting-edge AI for improved hotel and restaurant management and expense reduction.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${cinzel.variable} ${openSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
