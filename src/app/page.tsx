import { Hero } from "@/components/hero";
import { ServicesList } from "@/components/services-list";
import { CallToAction } from "@/components/call-to-action";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Faq } from "@/components/faq";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F5] px-4 md:px-20">
      <Header />
      <Hero />
      <ServicesList />
      <CallToAction />
      <Faq />
      <Footer />
    </main>
  );
}
