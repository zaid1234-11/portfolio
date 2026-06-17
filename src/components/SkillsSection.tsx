import { motion } from "framer-motion";

const skills = [
  {
    name: "Adobe Premiere Pro",
    icon: "🎬",
    level: "Expert",
  },
  {
    name: "After Effects",
    icon: "✨",
    level: "Expert",
  },
  {
    name: "DaVinci Resolve",
    icon: "🎨",
    level: "Advanced",
  },
  {
    name: "Color Grading",
    icon: "🌈",
    level: "Expert",
  },
  {
    name: "Motion Graphics",
    icon: "🎭",
    level: "Advanced",
  },
  {
    name: "Beat Sync Editing",
    icon: "🎵",
    level: "Expert",
  },
  {
    name: "Sound Design",
    icon: "🔊",
    level: "Advanced",
  },
  {
    name: "Final Cut Pro",
    icon: "🍎",
    level: "Intermediate",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none bg-card/5" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
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
            Tools & Skills
          </motion.p>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My <span className="text-gradient-accent">Toolkit</span>
          </motion.h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative glass-card p-4 sm:p-5 md:p-6 text-center transition-all duration-500 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <span className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4 block">{skill.icon}</span>
              <h3 className="font-semibold text-xs sm:text-sm md:text-base text-foreground mb-0.5 sm:mb-1 group-hover:text-primary transition-colors">
                {skill.name}
              </h3>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">
                {skill.level}
              </span>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{
                  background:
                    "radial-gradient(circle at center, hsl(var(--glow-primary) / 0.15) 0%, transparent 70%)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
