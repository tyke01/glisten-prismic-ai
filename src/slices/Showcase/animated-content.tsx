"use client";

import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface AnimatedContentProps {
  children: React.ReactNode;
}

const AnimatedContent = ({ children }: AnimatedContentProps) => {
  const container = useRef(null);

  const prefersReducedMotion = usePrefersReducedMotion();

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(container.current, { y: 0 });
      }

      gsap.fromTo(
        container.current,
        { y: 100 },
        {
          y: 0,
          ease: "power2.inOut",
          duration: 1,
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom-=40%",
            toggleActions: "play pause resume reverse",
          },
        },
      );
    },
    { scope: container },
  );

  return <div ref={container}>{children}</div>;
};

export default AnimatedContent;
