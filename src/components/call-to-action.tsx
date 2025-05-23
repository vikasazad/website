"use client";
import { Button } from "@/components/ui/button";
import { Pointer, Send } from "lucide-react";
import { useState } from "react";
import { SuccessPopup } from "./success-popup";

export function CallToAction() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState({ email: "", website: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateWebsite = (website: string) => {
    try {
      new URL(website);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { email: "", website: "" };
    let isValid = true;

    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!website) {
      newErrors.website = "Website is required";
      isValid = false;
    } else if (!validateWebsite(website)) {
      newErrors.website = "Please enter a valid website URL";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      console.log("Email:", email);
      console.log("Website:", website);
      setIsSubmitting(true);
      const result = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, website }),
      });
      if (result) {
        setIsSubmitting(false);
        if (result.ok) {
          setEmail("");
          setWebsite("");
          setShowSuccessPopup(true);
        } else {
          console.log("Failed to send email");
        }
      }
    }
  };

  return (
    <section
      id="call-to-action"
      className="w-full py-12 md:py-12 lg:py-12 bg-[#FAF9F5]"
    >
      <SuccessPopup
        isOpen={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
      />
      <div className="container mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="neumorphic-container p-6 md:p-12 lg:p-16">
          <div className="flex justify-center w-full mb-8">
            <div className="inline-block rounded-full px-0 py-1 neumorphic-badge border-1  border-[#fbe6c7] ">
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
                Imagine running your hotel or restaurant at peak efficiency—no
                more wasted inventory, no more understaffed shifts, no more
                missed upsell opportunities. Without Buildbility, you&apos;re
                leaving profits on the table and drowning in repetitive tasks.
              </p>
              <p className="text-[#333333] font-sans text-lg">
                At Buildbility, we&apos;ll craft a step-by-step AI roadmap
                tailored to your unique challenges. No cookie-cutter solutions—
                only a clear plan showing exactly how to streamline operations,
                cut costs, and elevate guest experiences.
              </p>
              <p className="text-[#333333] font-sans text-lg font-bold">
                Simply share a few details about your property, and we&apos;ll
                send you a concise, actionable strategy on how Buildbility can
                maximize your margins and empower your team.
              </p>
              <p className="text-[#333333] font-sans text-lg italic">
                &quot;Stop settling for &quot;good enough.&quot; See how fast,
                efficient, and profitable your operation can become&quot;.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="bg-[#faf9f5] rounded-[1.5rem] p-4 md:p-8 w-full max-w-md relative overflow-hidden shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)]">
                <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-gradient pointer-events-none z-[1]" />
                <h3 className="font-serif text-2xl text-[#333333] mb-6 text-center relative z-[2]">
                  Let&apos;s get started
                </h3>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 relative z-[2]"
                >
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`neumorphic-input w-full px-4 py-2 bg-[#FAF9F5] text-[#333333] ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="website"
                      className="text-sm font-medium text-[#333333]"
                    >
                      Business Website
                    </label>
                    <input
                      type="text"
                      id="website"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className={`neumorphic-input w-full px-4 py-2 bg-[#FAF9F5] text-[#333333] ${
                        errors.website ? "border-red-500" : ""
                      }`}
                      placeholder="https://www.yourbusinesswebsite.com"
                    />
                    {errors.website && (
                      <p className="text-red-500 text-sm">{errors.website}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="bg-[#2C3E50] text-white font-sans w-full flex items-center justify-center gap-2 mt-6 rounded-lg cursor-pointer"
                    disabled={isSubmitting}
                  >
                    <Send className="h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send"}
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
