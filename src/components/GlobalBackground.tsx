import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Silk from "./ui/Silk";

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
      className="fixed inset-x-0 z-0 pointer-events-none"
      style={{
        // Oversize the container slightly to hide edges during parallax movement
        top: "-10vh",
        bottom: "-10vh",
        opacity,
        y,
      }}
    >
      <Silk
        speed={3.1}
        scale={1.1}
        color="#bc9876"
        noiseIntensity={1.6}
        rotation={0}
      />
    </motion.div>
  );
};

export default GlobalBackground;
