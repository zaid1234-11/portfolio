import { motion } from "framer-motion";
import { Eye, Video, Users, Award } from "lucide-react";

const stats = [
  {
    icon: Video,
    value: "100+",
    label: "Videos Edited",
  },
  {
    icon: Eye,
    value: "5M+",
    label: "Total Views",
  },
  {
    icon: Users,
    value: "30+",
    label: "Clients Worked With",
  },
  {
    icon: Award,
    value: "2+",
    label: "Years Experience",
  },
];

const StatsSection = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-primary/10 text-primary shadow-[0_18px_40px_rgba(0,0,0,0.6)]"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </motion.div>

              <motion.p
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-1 sm:mb-2"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 + 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {stat.value}
              </motion.p>

              <p className="text-muted-foreground text-xs sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
