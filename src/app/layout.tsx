import type React from "react";
import "@/app/globals.css";
import { Inter, Cinzel, Open_Sans } from "next/font/google";
import Script from "next/script";
// import { AnimationWrapper } from "@/components/AnimationWrapper";

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
  icons: {
    icon: "/images/logo2.svg",
    apple: "/images/logo2.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5NC1EL3TNP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5NC1EL3TNP');
          `}
        </Script>
      </head>
      <body
        className={`${inter.className} ${cinzel.variable} ${openSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
