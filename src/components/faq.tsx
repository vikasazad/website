import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section className="w-full py-12 md:py-12 lg:py-12 bg-[#FAF9F5]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block neumorphic-badge mb-4">
              <span className="text-[#C1A265] font-sans text-sm">
                Common Questions
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif text-[#333333]">
                Frequently Asked{" "}
                <span className="text-[#C1A265]">Questions</span>
              </h2>
              <div className="w-24 h-1 bg-[#C1A265]/30 rounded-full mt-4 mb-6"></div>
            </div>

            <p className="max-w-[700px] text-[#333333] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-sans">
              Get answers to the most common questions about our hospitality
              solutions.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="neumorphic-accordion mb-4"
              >
                <AccordionTrigger className="text-left font-serif text-lg text-[#333333] px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-[#333333]/80 font-sans">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
