import { motion } from "framer-motion";
import { Instagram, Youtube, Twitter, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 sm:py-10 md:py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <motion.div
          className="flex flex-col items-center gap-6 sm:gap-8 md:flex-row md:justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-lg sm:text-xl font-bold text-foreground mb-1">
              Video<span className="text-primary">Editor</span>
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Crafting Visual Stories
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <link.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-muted-foreground text-center">
            © {currentYear} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
