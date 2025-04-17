import { Button } from "@/components/ui/button";
import {
  Building,
  Utensils,
  Smartphone,
  Bot,
  Settings,
  Palette,
} from "lucide-react";

export function ServicesList() {
  const services = [
    {
      title: "Hotel & Restaurant Management",
      description:
        "Effortlessly oversee rooms, staffing, inventory, and even social media through a single, intuitive dashboard.",
      icon: <Building className="h-8 w-8 text-[#C1A265]" />,
    },
    {
      title: "Food Order App",
      description:
        "Simplify the dining experience with QR code-based ordering for dine-in, takeaway, and room service. Minimize errors and reduce waiting times while improving overall efficiency.",
      icon: <Utensils className="h-8 w-8 text-[#C1A265]" />,
    },
    {
      title: "Concierge App",
      description:
        "Empower your guests to book services, order food, or report concerns from the convenience of their mobile devices, offering a frictionless experience that enhances satisfaction.",
      icon: <Smartphone className="h-8 w-8 text-[#C1A265]" />,
    },
    {
      title: "AI Assistants",
      description:
        "Harness the power of intelligent agents to handle routine operations, analyze key data, and enable smarter decision-making, giving your team more time to focus on what matters most.",
      icon: <Bot className="h-8 w-8 text-[#C1A265]" />,
    },
    {
      title: "Automation Services",
      description:
        "Save valuable time and resources by automating repetitive tasks, from inventory tracking to employee scheduling, ensuring operations run smoothly and efficiently.",
      icon: <Settings className="h-8 w-8 text-[#C1A265]" />,
    },
    {
      title: "Design Services",
      description:
        "Elevate your brand identity with professionally crafted digital materials like infographics, menus, and other marketing assets tailored to your business's unique needs.",
      icon: <Palette className="h-8 w-8 text-[#C1A265]" />,
    },
  ];

  return (
    <section className="w-full py-12 md:py-12 lg:py-12 bg-[#FAF9F5]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block mb-4 bg-[#FAF9F5] rounded-full px-4 py-1 neumorphic-badge">
              <span className="text-[#C1A265] font-sans text-sm">
                AI-Powered Solutions
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif text-[#333333]">
              Smart Solutions for{" "}
              <span className="text-[#C1A265]">Hospitality Operations</span>
            </h2>
            <p className=" text-[#333333] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-sans">
              Transform the way you operate and deliver unforgettable guest
              experiences with our suite of advanced hospitality solutions. From
              streamlining daily operations to creating personalized guest
              journeys, we are here to help your business thrive.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="neumorphic-card flex flex-col h-full">
              <div className="neumorphic-icon-container mb-6">
                {service.icon}
              </div>
              <h3 className="font-bold text-xl text-[#333333] font-serif mb-3">
                {service.title}
              </h3>
              <p className="text-[#333333]/80 font-sans mb-6 flex-grow">
                {service.description}
              </p>
              <Button className="neumorphic-button bg-[#FAF9F5] text-[#C1A265] cursor-pointer">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
