import { HeaderHeroWrapper } from "@/components/HeaderHeroWrapper";
import { ServicesList } from "@/components/services-list";
import { CallToAction } from "@/components/call-to-action";
import { Footer } from "@/components/footer";
import { Faq } from "@/components/faq";
import { Integrations } from "@/components/integrations";

export default function Home() {
  return (
    <div className="min-h-screen px-4 ">
      <HeaderHeroWrapper />
      <main className="min-h-screen px-4 md:px-20">
        <ServicesList />
        <Integrations />
        <CallToAction />
        <Faq />
        <Footer />
      </main>
    </div>
  );
}
