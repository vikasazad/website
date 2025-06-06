"use client";

import { ScrollButton } from "@/components/ScrollButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Building,
  Utensils,
  Smartphone,
  Bot,
  Settings,
  Palette,
  Bell,
  Coffee,
  CheckCircle2,
  Cpu,
} from "lucide-react";
// linear-gradient(265deg, #fbe6c7, #ebd3e4)
export function ServicesList() {
  const services = [
    {
      title: "Hotel Management",
      description:
        "Centralized control for bookings, housekeeping, maintenance, and guest services—optimized with automation.",
      icon: <Building className="h-8 w-8 text-[#C1A265]" />,

      features: [
        "Automated check-in/check-out",
        "Housekeeping task scheduling",
        "Real-time occupancy & revenue tracking",
        "Maintenance alerts and tasking",
      ],
    },
    {
      title: "Restaurant Management",
      description:
        "Digitally streamline your front and back of house—from reservations to kitchen inventory and staff performance.",
      icon: <Utensils className="h-8 w-8 text-[#C1A265]" />,
      features: [
        "Smart table & reservation management",
        "Live kitchen order tracking",
        "Menu engineering with cost insights",
        "Shift planning & staff productivity tools",
      ],
    },
    {
      title: "Food Order App",
      description:
        "Contactless QR-based ordering for dine-in, takeaway, and room service with payment integration and real-time updates.",
      icon: <Smartphone className="h-8 w-8 text-[#C1A265]" />,
      features: [
        "Multi-mode ordering (dine-in, takeaway, room)",
        "Live kitchen status display",
        "Integrated digital payments",
        "Customizable digital menus",
      ],
    },
    {
      title: "Concierge App",
      description:
        "Empower guests to book services, order amenities, or request assistance through a digital concierge platform.",
      icon: <Bell className="h-8 w-8 text-[#C1A265]" />,
      features: [
        "In-app amenity and service booking",
        "Local recommendations & itineraries",
        "Live chat and chatbot support",
        "Room upgrade and late checkout requests",
      ],
    },
    {
      title: "Guest Experience",
      description:
        "Create tailored guest journeys with smart profiles, loyalty insights, and personalized in-stay recommendations.",
      icon: <Coffee className="h-8 w-8 text-[#C1A265]" />,
      features: [
        "Personalized guest profiling",
        "Loyalty program integration",
        "Automated upselling prompts",
        "Real-time feedback and response",
      ],
    },
    {
      title: "AI Assistants & Dashboards",
      description:
        "Intelligent insights, real-time alerts, and decision-making tools for data-driven hotel and restaurant leadership.",
      icon: <Bot className="h-8 w-8 text-[#C1A265]" />,
      features: [
        "Real-time performance dashboards",
        "AI-powered business insights",
        "Dynamic pricing recommendations",
        "Occupancy and trend forecasting",
      ],
    },
    {
      title: "Automation Hub",
      description:
        "Automate routine tasks like inventory checks, shift schedules, and maintenance workflows with zero manual effort.",
      icon: <Settings className="h-8 w-8 text-[#C1A265]" />,
      features: [
        "Automated inventory reordering",
        "Predictive maintenance scheduling",
        "Shift & rota generation",
        "Compliance and checklist automation",
      ],
    },
    {
      title: "Design Studio",
      description:
        "Premium digital designs for your hospitality brand—menus, posters, signage, and more—done fast, done right.",
      icon: <Palette className="h-8 w-8 text-[#C1A265]" />,
      features: [
        "Custom menu design",
        "Branded marketing collateral",
        "Digital signage and screens",
        "Event promotions and flyers",
      ],
    },
  ];

  return (
    <section className="w-full py-12 md:py-15 lg:py-15">
      <div className="container mx-auto max-w-[1400px] px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block mb-4 rounded-full px-4 py-1 neumorphic-badge border-1  border-[#fbe6c7]">
                <div className="flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-[#C1A265]" />
                  <span className="text-[#C1A265] font-sans text-sm">
                    AI-Powered Solutions
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center text-center mt-5">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif text-[#333333]">
                  Smart Solutions for{" "}
                  <span className="text-[#C1A265]">Hospitality Operations</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#fbe6c7] to-[#ebd3e4] rounded-full mt-4 mb-6"></div>
              </div>

              <p className="text-[#333333] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-sans">
                Transform the way you operate and deliver unforgettable guest
                experiences with our suite of advanced hospitality solutions.
                From streamlining daily operations to creating personalized
                guest journeys, we are here to help your business thrive.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index}>
              <div className="neumorphic-card flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-gradient pointer-events-none z-[1]" />
                <div className="neumorphic-icon-container mb-6 relative z-[2]">
                  {service.icon}
                </div>
                <h3 className="font-bold text-xl text-[#333333] font-serif mb-3">
                  {service.title}
                </h3>
                <p className="text-[#333333]/80 font-sans mb-6 flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6 flex-grow">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#C1A265] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-charcoal/90 font-sans text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <ScrollButton className="neumorphic-button bg-[#2C3E50] text-white cursor-pointer">
                  Learn More
                </ScrollButton>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
