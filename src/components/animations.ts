// src/components/animations.ts
import type { Variants, Easing } from "framer-motion";

export const cinematicEase: Easing = [0.22, 1, 0.36, 1];

export const timelineReveal = (
  delay: number = 0,
  duration: number = 0.6
): Variants => ({
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration,
      ease: cinematicEase,
      delay,
    },
  },
});

export const staggerChildren: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      when: "beforeChildren",
    },
  },
};
