import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Lightfall from "./ui/Lightfall";

const GlobalBackground = () => {
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 1000
  );

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Avoid the hero section: remain 0 opacity until scrolling past 70% of the first viewport
  const opacity = useTransform(
    scrollY,
    [0, windowHeight * 0.7, windowHeight],
    [0, 0, 1]
  );

  // Subtle Parallax translation mapping (moves up slightly as you scroll down)
  const y = useTransform(scrollY, [0, windowHeight * 5], [0, -150]);

  return (
    <motion.div
      className="fixed inset-x-0 z-[-1] pointer-events-none"
      style={{
        // Oversize the container slightly to hide edges during parallax movement
        top: "-10vh",
        bottom: "-10vh",
        opacity,
        y,
      }}
    >
      <Lightfall
        colors={["#A6C8FF", "#5227FF", "#FF9FFC"]}
        backgroundColor="#0A29FF"
        speed={0.3}
        streakCount={2}
        streakWidth={0.2}
        streakLength={3}
        glow={0.2}
        density={0.6}
        twinkle={0.85}
        zoom={1}
        backgroundGlow={0}
        opacity={1}
        mouseInteraction={true}
        mouseStrength={0.7}
        mouseRadius={0.7}
      />
    </motion.div>
  );
};

export default GlobalBackground;
