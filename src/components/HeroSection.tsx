import { motion } from "framer-motion";
import { Play, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import Parallax from "./ui/Parallax";
import TextPressure from "./ui/TextPressure";
import GradualBlur from "./ui/GradualBlur";

const HeroSection = () => {
  const scrollToWork = () => {
    const workSection = document.getElementById("work");
    workSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Parallax */}
      <div className="absolute inset-0 z-0">
        <Parallax offset={-80} className="h-full w-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-[120%] w-full object-cover opacity-40 -translate-y-[10%]"
          >
            <source
              src="v1.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </Parallax>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      {/* Ambient Glow Effects with Parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Parallax offset={100} className="absolute top-1/3 left-1/4">
          <div
            className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--glow-primary) / 0.3) 0%, transparent 70%)",
            }}
          />
        </Parallax>
        <Parallax offset={-60} className="absolute bottom-1/4 right-1/3">
          <div
            className="w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[400px] md:h-[400px] rounded-full opacity-15"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--glow-secondary) / 0.2) 0%, transparent 70%)",
            }}
          />
        </Parallax>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-20 text-center max-w-5xl mx-auto w-full">
        <Parallax offset={30}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Video Editor & Motion Designer
              </span>
            </motion.div>

            {/* Interactive Text Pressure Heading */}
            <motion.div
              className="mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative h-[80px] sm:h-[100px] md:h-[130px] lg:h-[160px] xl:h-[190px] w-full flex items-center justify-center">
                <TextPressure
                  text="CINEMATIC"
                  flex
                  alpha={false}
                  stroke={false}
                  width
                  weight
                  italic
                  textColor="hsl(var(--foreground))"
                  minFontSize={36}
                />
              </div>
              <div className="relative h-[60px] sm:h-[80px] md:h-[100px] lg:h-[120px] xl:h-[140px] w-full flex items-center justify-center -mt-2 sm:-mt-4">
                <TextPressure
                  text="VIDEO EDITOR"
                  flex
                  alpha={false}
                  stroke={false}
                  width
                  weight
                  italic
                  textColor="hsl(var(--primary))"
                  minFontSize={28}
                />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-gradient-accent mt-4">
                for Reels, YouTube & Brands
              </div>
            </motion.div>

            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 px-2 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Transforming raw footage into compelling stories that captivate audiences 
              and elevate brands through masterful editing and motion design.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                to="/work"
                className="group relative overflow-hidden rounded-full bg-primary px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:shadow-glow hover:scale-105 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                  View Work
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>

              <Link
                to="/contact"
                className="group rounded-full border border-border bg-card/30 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-foreground transition-all hover:bg-card/50 hover:border-primary/50 w-full sm:w-auto text-center"
              >
                Hire Me
              </Link>
            </motion.div>
          </motion.div>
        </Parallax>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToWork}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <span className="text-[10px] sm:text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.div>
      </motion.button>

      {/* Gradual Blur Bottom Fade */}
      <GradualBlur
        target="parent"
        position="bottom"
        height="8rem"
        strength={2.5}
        divCount={8}
        curve="bezier"
        exponential
        opacity={1}
      />
    </section>
  );
};

export default HeroSection;
