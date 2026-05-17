import { motion } from "framer-motion";
import { timelineReveal, staggerChildren } from "@/components/animations";

export default function ContactCta() {
  return (
    <section className="relative py-20 md:py-24 bg-background">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,189,89,0.2) 0, transparent 55%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-10 max-w-4xl">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="glass-card relative px-6 py-8 md:px-10 md:py-10 text-center md:text-left"
        >
          <motion.p
            variants={timelineReveal(0)}
            className="text-xs md:text-sm uppercase tracking-[0.24em] text-muted-foreground mb-3"
          >
            Have a project in mind?
          </motion.p>

          <motion.h2
            variants={timelineReveal(0.05)}
            className="text-2xl md:text-3xl font-semibold text-foreground mb-4"
          >
            Let&apos;s turn your ideas into motion.
          </motion.h2>

          <motion.p
            variants={timelineReveal(0.1)}
            className="text-sm md:text-base text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0"
          >
            Whether it&apos;s a series of reels, a YouTube video, or a full
            campaign, share a few details and we&apos;ll explore what the edit
            could look and feel like together.
          </motion.p>

          <motion.div
            variants={timelineReveal(0.15)}
            className="flex flex-col items-center md:flex-row md:items-center gap-4 md:gap-6 justify-center md:justify-between"
          >
            <button
              className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium text-background bg-primary shadow-[0_0_30px_rgba(255,189,89,0.45)] hover:shadow-[0_0_45px_rgba(255,189,89,0.7)] transition-shadow duration-300"
            >
              Contact Zaid
            </button>
            <span className="text-xs md:text-sm text-muted-foreground">
              Prefer email? You can also reach out with a brief and timeline.
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
