// src/components/ContactSection.tsx
import { motion } from "framer-motion";
import {
  Mail,
  Instagram,
  MessageCircle,
  Send,
  ArrowRight,
  Loader2,
  Check,
} from "lucide-react";
import { toast } from "sonner";

import { useContactForm } from "../useContactForm";
import { getContactLinks } from "../config/contactLinks";
import { PROJECT_TYPES } from "../config/projectTypes";

const ContactSection = () => {
  const {
    formData,
    setFormData,
    errors,
    clearError,
    isSubmitting,
    isSubmitted,
    submitForm,
  } = useContactForm(() => {
    toast.success("✓ Message sent successfully! Check your email for confirmation.");
  });

  const contactLinks = getContactLinks();

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  await submitForm(async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL || ""}/contact`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.project,
          message: formData.message,
        }),
      }
    );

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      throw new Error(data?.error || "Failed to send message");
    }
  });
};


  const handleFieldChange = (field: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      clearError(field);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primary/10 via-transparent to-transparent opacity-40" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary/10 via-transparent to-transparent opacity-40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] items-start">
          {/* Left: header + quick links */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary mb-4">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl">
              Ready to elevate your content? Share a bit about your project and
              let&apos;s explore how the edit can bring your story to life.
            </p>

            {/* Contact links */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="glass-card group px-4 py-3 rounded-2xl flex items-center gap-3 border border-border/80 hover:border-primary/50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.08 * index,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {link.icon === "mail" && <Mail className="w-4 h-4" />}
                    {link.icon === "instagram" && (
                      <Instagram className="w-4 h-4" />
                    )}
                    {link.icon === "whatsapp" && (
                      <MessageCircle className="w-4 h-4" />
                    )}
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {link.label}
                    </p>
                    <p className="text-sm text-foreground">{link.value}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground opacity-70 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-3xl p-6 md:p-8 space-y-6 border border-border/80"
            >
              {/* Name */}
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleFieldChange("name", e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-secondary/50 border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all ${
                    errors.name
                      ? "border-red-500/50 focus:ring-red-500/30 focus:border-red-500"
                      : "border-border focus:ring-primary/50 focus:border-primary"
                  }`}
                  placeholder="Your name"
                  required
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleFieldChange("email", e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-secondary/50 border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all ${
                    errors.email
                      ? "border-red-500/50 focus:ring-red-500/30 focus:border-red-500"
                      : "border-border focus:ring-primary/50 focus:border-primary"
                  }`}
                  placeholder="your@email.com"
                  required
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-xs text-red-400">{errors.email}</p>
                )}
              </div>

              {/* Project Type */}
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Project Type
                </label>
                <select
                  value={formData.project}
                  onChange={(e) => handleFieldChange("project", e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-secondary/50 border text-foreground focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer ${
                    errors.project
                      ? "border-red-500/50 focus:ring-red-500/30 focus:border-red-500"
                      : "border-border focus:ring-primary/50 focus:border-primary"
                  }`}
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Select project type</option>
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.project && (
                  <p className="text-xs text-red-400">{errors.project}</p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleFieldChange("message", e.target.value)}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl bg-secondary/50 border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message
                      ? "border-red-500/50 focus:ring-red-500/30 focus:border-red-500"
                      : "border-border focus:ring-primary/50 focus:border-primary"
                  }`}
                  placeholder="Tell me about your project..."
                  required
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative inline-flex items-center justify-center w-full gap-2 rounded-2xl bg-primary text-background py-3.5 text-sm font-medium tracking-[0.2em] uppercase overflow-hidden group disabled:opacity-60"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-full" />
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
