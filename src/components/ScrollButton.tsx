"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ScrollButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const handleScroll = () => {
    const element = document.getElementById("call-to-action");
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button className={className} onClick={handleScroll}>
        {children}
      </Button>
    </motion.div>
  );
}
