import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface ParallaxProps {
  children: React.ReactNode;
  offset?: number; // Distance in pixels to translate on scroll (positive or negative)
  className?: string;
  fadeIn?: boolean; // Smoothly fade in/out near viewport edges
  direction?: "up" | "down" | "left" | "right";
}

export function Parallax({
  children,
  offset = 50,
  className = "",
  fadeIn = false,
  direction = "up"
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Track scroll progress of the container relative to the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Calculate translation range based on scroll progress
  const transformRange = [-offset, offset];
  const translationValue = useTransform(scrollYProgress, [0, 1], transformRange);

  // Calculate opacity based on scroll progress to fade in/out
  const opacityValue = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    fadeIn ? [0, 1, 1, 0] : [1, 1, 1, 1]
  );

  // Avoid parallax translation if reduced motion is requested
  const x = !shouldReduceMotion && (direction === "left" || direction === "right")
    ? (direction === "left" ? translationValue : useTransform(scrollYProgress, [0, 1], [offset, -offset]))
    : 0;

  const y = !shouldReduceMotion && (direction === "up" || direction === "down")
    ? (direction === "up" ? translationValue : useTransform(scrollYProgress, [0, 1], [offset, -offset]))
    : 0;

  return (
    <motion.div
      ref={ref}
      style={{
        x,
        y,
        opacity: opacityValue,
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default Parallax;
