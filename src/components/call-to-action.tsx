import { Button } from "@/components/ui/button";
import { Calendar, Pointer } from "lucide-react";

export function CallToAction() {
  return (
    <section
      id="call-to-action"
      className="w-full py-12 md:py-12 lg:py-12 bg-[#FAF9F5]"
    >
      <div className="container mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="neumorphic-container p-8 md:p-12 lg:p-16">
          <div className="flex justify-center w-full mb-8">
            <div className="inline-block rounded-full px-4 py-1 neumorphic-badge border-1  border-[#fbe6c7] ">
              <div className="flex items-center gap-2">
                <Pointer className="h-4 w-4 text-[#C1A265]" />
                <span className="text-[#C1A265] font-sans text-sm">
                  AI-Powered Solutions
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-left md:text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter sm:text-3xl  font-serif text-[#C1A265] mb-6">
              See What Our AI-Powered Hospitality Solutions Can Do for Your
              Business
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#fbe6c7] to-[#ebd3e4] rounded-full mb-6"></div>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-[#333333] font-sans text-lg">
                Ready to see real results? Schedule a demo today to explore how
                our innovative tools can streamline your operations, cut costs,
                improve guest satisfaction, retention, and revenue.
              </p>
              <p className="text-[#333333] font-sans text-lg">
                In just one session, you&apos;ll discover how our AI-driven
                technology simplifies daily tasks, enhances efficiency, and
                empowers your team to focus on what matters most—delivering
                unforgettable guest experiences.
              </p>
              <p className="text-[#333333] font-sans text-lg font-bold">
                Don&apos;t wait—availability for demos is limited. Take the
                first step toward transforming your hospitality business now!
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="bg-[#faf9f5] rounded-[1.5rem] p-4 md:p-8 w-full max-w-md relative overflow-hidden shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)]">
                <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-gradient pointer-events-none z-[1]" />
                <h3 className="font-serif text-2xl text-[#333333] mb-6 text-center relative z-[2]">
                  Schedule Your Demo
                </h3>
                <form className="space-y-4 relative z-[2]">
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-[#333333]"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="neumorphic-input w-full px-4 py-2 bg-[#FAF9F5] text-[#333333]"
                      placeholder="john@example.com"
                    />
                  </div>

                  <Button className=" bg-[#2C3E50] text-white font-sans w-full flex items-center justify-center gap-2 mt-6 rounded-lg">
                    <Calendar className="h-4 w-4" />
                    Schedule Demo
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
