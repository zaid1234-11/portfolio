import { motion } from "framer-motion";
import { timelineReveal, staggerChildren } from "@/components/animations";
import Parallax from "./ui/Parallax";

const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Delivered", value: "100+" },
  { label: "Clients", value: "30+" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* radial glow background with Parallax */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <Parallax offset={80} className="absolute inset-0">
          <div className="absolute inset-0 opacity-60"
               style={{
                 background:
                   "radial-gradient(circle at top, rgba(255,189,89,0.12) 0, transparent 55%)",
               }}
          />
        </Parallax>
      </div>

      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-10 lg:gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.1fr)] items-center"
        >
          {/* Left: portrait card with Parallax */}
          <motion.div
            variants={timelineReveal(0)}
            className="relative"
          >
            <Parallax offset={-40}>
              <div
                className="glass-card group relative aspect-[3/4] max-w-sm mx-auto overflow-hidden"
              >
                {/* portrait image (replace src) */}
                <div className="relative h-full w-full">
                  <img
                    src="\photo.jpeg"
                    alt="Portrait of Zaid Saifi"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out md:group-hover:scale-[1.03]"
                  />

                  {/* film grain overlay */}
                  <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-20">
                    <div
                      className="h-full w-full"
                      style={{
                        backgroundImage:
                          "url('https://grainy-gradients.vercel.app/noise.svg')",
                        backgroundSize: "cover",
                      }}
                    />
                  </div>

                  {/* gradient vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0)_0,_rgba(0,0,0,0.65)_60%)]" />

                  {/* identity tag */}
                  <div className="absolute left-4 bottom-4 md:left-6 md:bottom-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-xs md:text-sm text-foreground/80 backdrop-blur">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_rgba(255,189,89,0.8)]" />
                      <span className="font-medium tracking-wide">
                        Zaid Saifi • Video Editor
                      </span>
                    </div>
                  </div>
                </div>

                {/* light sweep on hover (desktop only) */}
                <div className="pointer-events-none absolute inset-0 hidden md:block">
                  <div className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/12 to-transparent opacity-0 md:group-hover:animate-light-sweep" />
                </div>
              </div>
            </Parallax>
          </motion.div>

          {/* Right: text + stats */}
          <motion.div
            variants={timelineReveal(0.08)}
            className="space-y-8"
          >
            <div className="space-y-3">
              <Parallax offset={20}>
                <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
                  About
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
                  Clean storytelling with{" "}
                  <span className="text-gradient-accent">
                    cinematic timing
                  </span>
                </h2>
              </Parallax>
            </div>

            <div className="space-y-4 text-sm md:text-base text-muted-foreground max-w-xl">
              <p>
                Zaid Saifi is a video editor with a little over two years of
                hands-on experience, focused on turning ideas into clear,
                structured stories on screen.
              </p>
              <p>
                The edit is built around clean pacing, sound selection, and
                composition so that cuts feel deliberate, not flashy for the
                sake of it.
              </p>
              <p>
                From short-form reels to long-form YouTube videos, each project
                is treated like a small film – with attention to rhythm, framing,
                and how every second lands with the viewer.
              </p>
            </div>

            <motion.div
              variants={staggerChildren}
              className="grid grid-cols-3 gap-4 max-w-md"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  variants={timelineReveal(idx * 0.04, 0.4)}
                  className="glass-card px-4 py-3 md:px-5 md:py-4 text-center"
                >
                  <div className="text-lg md:text-2xl font-semibold text-foreground">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[11px] md:text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

