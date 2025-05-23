"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CircleHelp, Mail } from "lucide-react";
import { ScrollButton } from "./ScrollButton";

export function Faq() {
  const faqs = [
    {
      question: "How quickly can we implement your system?",
      answer:
        "Most properties complete initial implementation within 1-2 weeks, achieving positive ROI within 30 days.",
    },
    {
      question: "Will this require extensive staff training?",
      answer:
        "Our intuitive interface requires minimal training. Most staff become proficient within hours.",
    },
    {
      question: "Can your system integrate with our existing software?",
      answer:
        "Yes! We've built compatibility with all major hospitality management platforms.",
    },
    {
      question: "What kind of ROI should we expect?",
      answer:
        "Properties typically see 15-30% operational efficiency improvements within six months, translating to 2-3% direct margin improvement—substantial in an industry with 3-5% average margins.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-12 lg:py-12 bg-[#FAF9F5] mt-16">
      <div className="container mx-auto max-w-[1400px] px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block neumorphic-badge mb-8 border-1 border-[#C1A265]">
                <div className="flex items-center gap-2">
                  <CircleHelp className="h-4 w-4 text-[#C1A265]" />
                  <span className="text-[#C1A265] font-sans text-sm">
                    Your Queries, Simplified
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif text-[#333333]">
                  Frequently Asked{" "}
                  <span className="text-[#C1A265]">Questions</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#fbe6c7] to-[#ebd3e4] rounded-full mt-4 mb-6"></div>
              </div>

              <p className="max-w-[700px] text-[#333333] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-sans">
                Find everything you need to know about Buildbility, from
                security to supported assets..
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full ">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index}>
                <AccordionItem
                  value={`item-${index}`}
                  className="neumorphic-accordion mb-4 "
                >
                  <AccordionTrigger className="text-left font-serif text-lg text-[#333333] px-6 py-4 cursor-pointer">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-[#333333]/80 font-sans">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center mt-12 text-center space-y-6">
              <div className="text-[#333333]/80 font-sans flex-col md:flex-row items-center gap-2 justify-center">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#C1A265]" />
                  Feel free to mail us for any enquiries:{" "}
                </div>
                <a
                  href="mailto:info@buildbility.com"
                  className="text-[#C1A265] hover:underline"
                >
                  info@buildbility.com
                </a>
              </div>
              <ScrollButton className="px-8 py-3 bg-[#C1A265] text-white rounded-lg hover:bg-[#a88a54] transition-colors duration-300 font-sans cursor-pointer">
                Contact Us
              </ScrollButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
