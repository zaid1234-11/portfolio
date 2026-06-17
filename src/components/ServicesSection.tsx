import { motion } from "framer-motion";
import { Film, Youtube, Plane, Megaphone, Sparkles } from "lucide-react";
import Parallax from "./ui/Parallax";

const services = [
  {
    icon: Film,
    title: "Short-Form Reels & Shorts",
    description:
      "Scroll-stopping content optimized for Instagram, TikTok, and YouTube Shorts with dynamic pacing and trending formats.",
  },
  {
    icon: Youtube,
    title: "YouTube Video Editing",
    description:
      "Full-length content with engaging hooks, smooth transitions, and retention-boosting cuts that keep viewers watching.",
  },
  {
    icon: Plane,
    title: "Cinematic & Travel Edits",
    description:
      "Breathtaking travel films and cinematic storytelling with color grading, ambient sound design, and seamless flow.",
  },
  {
    icon: Megaphone,
    title: "Promotional & Brand Videos",
    description:
      "Professional commercials, product launches, and brand films that communicate your message with impact.",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics & Transitions",
    description:
      "Custom animations, logo reveals, lower thirds, and unique transitions that elevate your visual identity.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      {/* Ambient Glow with Parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Parallax offset={100} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className="w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--glow-primary) / 0.2) 0%, transparent 60%)",
            }}
          />
        </Parallax>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Header with Parallax */}
        <Parallax offset={25}>
          <motion.div
            className="text-center mb-10 sm:mb-14 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Services
            </motion.p>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              What I <span className="text-gradient-accent">Create</span>
            </motion.h2>
          </motion.div>
        </Parallax>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group glass-card p-5 sm:p-6 md:p-8 transition-all duration-500 hover:scale-[1.02]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 sm:mb-6 inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow">
                <service.icon className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
