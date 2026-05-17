import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AmbientBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Very subtle film grain effect
    const renderGrain = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const grain = (Math.random() - 0.5) * 15; // Very subtle grain
        data[i] = grain;     // R
        data[i + 1] = grain; // G
        data[i + 2] = grain; // B
        data[i + 3] = 8;     // Very low alpha (opacity ~3%)
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const animate = () => {
      time += 0.005; // Very slow animation

      // Clear with very low opacity to create trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.02)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Render subtle grain
      renderGrain();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {/* Film grain canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
      />

      {/* Slow-moving ambient light gradients */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Primary warm glow */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(35 100% 55% / 0.03) 0%, transparent 70%)",
            left: "10%",
            top: "20%",
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary cool glow */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(200 80% 50% / 0.02) 0%, transparent 70%)",
            right: "15%",
            bottom: "25%",
          }}
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 50, -20, 0],
            scale: [1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Tertiary accent glow */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(35 80% 45% / 0.02) 0%, transparent 70%)",
            left: "50%",
            top: "60%",
            transform: "translateX(-50%)",
          }}
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -40, 30, 0],
            opacity: [0.5, 0.8, 0.4, 0.5],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

export default AmbientBackground;
