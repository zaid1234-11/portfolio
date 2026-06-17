import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import GradualBlur from "./ui/GradualBlur";

const navLinks = [
  { label: "Work", href: "#work", page: "/work" },
  { label: "Services", href: "#services", page: null },
  { label: "About", href: "#about", page: null },
  { label: "Skills", href: "#skills", page: null },
  { label: "Contact", href: "#contact", page: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (isHomePage) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <GradualBlur
        preset="page-header"
        height="8rem"
        strength={3}
        opacity={isScrolled ? 1 : 0}
        animated
        duration="0.5s"
        zIndex={40}
      />
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-background/80 backdrop-blur-xl border-b border-border/50"
            : "py-6 bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="text-xl font-bold text-foreground"
              whileHover={{ scale: 1.05 }}
            >
              Video<span className="text-primary">Editor</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                link.page && !isHomePage ? (
                  <Link
                    key={link.label}
                    to={link.page}
                    className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => isHomePage ? scrollToSection(link.href) : window.location.href = `/${link.href}`}
                    className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </button>
                )
              ))}
              <Link
                to="/contact"
                className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Hire Me
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-6">
              {navLinks.map((link, index) => (
                link.page ? (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      to={link.page}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.button
                    key={link.label}
                    onClick={() => isHomePage ? scrollToSection(link.href) : (window.location.href = `/${link.href}`)}
                    className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {link.label}
                  </motion.button>
                )
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 px-8 py-4 rounded-full bg-primary text-primary-foreground text-lg font-semibold inline-block"
                >
                  Hire Me
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
