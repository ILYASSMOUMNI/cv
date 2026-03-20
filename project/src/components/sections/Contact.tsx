import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Send, MapPin, Github, CheckCircle, AlertCircle, Sparkles } from "lucide-react";
import { AnimatedSection } from "../ui/AnimatedSection";
import { GlassCard, GradientText, SectionHeader } from "../ui/GlassCard";
import { profile } from "../../data/profile";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200 font-mono text-sm";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate API call (replace with real endpoint later)
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // In production: POST to /api/contact
    // const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            tag="Contact"
            title={
              <>
                Let's build something{" "}
                <GradientText gradient="from-indigo-400 to-violet-400">great</GradientText>
              </>
            }
            subtitle="Open to full-time roles, freelance projects, and interesting collaborations. Let's talk."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Left — Info */}
          <AnimatedSection direction="left" className="lg:col-span-2 space-y-6">
            {/* Contact cards */}
            {[
              {
                icon: Mail,
                label: "Email",
                value: profile.email,
                href: `mailto:${profile.email}`,
                color: "from-blue-500 to-indigo-600",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "ilyass-moumni",
                href: profile.linkedinUrl,
                color: "from-blue-600 to-blue-700",
              },
              {
                icon: Github,
                label: "GitHub",
                value: "ILYASSMOUMNI",
                href: profile.githubUrl,
                color: "from-slate-600 to-slate-700",
              },
              {
                icon: MapPin,
                label: "Location",
                value: `${profile.location} · ${profile.timezone}`,
                href: null,
                color: "from-emerald-500 to-teal-600",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              const content = (
                <GlassCard
                  className="p-4 flex items-center gap-4"
                  hover={!!item.href}
                  gradient={item.color}
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-mono">{item.label}</p>
                    <p className="text-white text-sm font-mono font-medium">{item.value}</p>
                  </div>
                </GlassCard>
              );

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}

            {/* Availability note */}
            <GlassCard className="p-5" gradient="from-emerald-500 to-teal-600">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm mb-1">Available for opportunities</p>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Currently open to full-time positions, internships, and freelance projects in software engineering and AI/data roles.
                  </p>
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>

          {/* Right — Form */}
          <AnimatedSection direction="right" delay={0.15} className="lg:col-span-3">
            <GlassCard className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                  <Send size={14} className="text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg">Send a message</h3>
              </div>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-4">
                      <CheckCircle size={28} className="text-emerald-400" />
                    </div>
                    <h4 className="text-white text-xl font-bold mb-2">Message sent!</h4>
                    <p className="text-slate-400 font-mono text-sm">
                      Thanks for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-400 text-xs font-mono mb-2 uppercase tracking-wider">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-slate-400 text-xs font-mono mb-2 uppercase tracking-wider">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-400 text-xs font-mono mb-2 uppercase tracking-wider">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      >
                        <option value="" disabled>Select a topic...</option>
                        <option value="job">Job / Internship Opportunity</option>
                        <option value="freelance">Freelance Project</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-400 text-xs font-mono mb-2 uppercase tracking-wider">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell me about your project or opportunity..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {status === "error" && (
                      <div className="flex items-center gap-2 text-red-400 text-sm font-mono">
                        <AlertCircle size={14} />
                        Something went wrong. Please try again.
                      </div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={status === "submitting"}
                      whileHover={{ scale: status === "submitting" ? 1 : 1.02 }}
                      whileTap={{ scale: status === "submitting" ? 1 : 0.98 }}
                      className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-medium font-mono transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-indigo-500/25"
                    >
                      {status === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Sparkles size={16} />
                          Send Message
                        </>
                      )}
                    </motion.button>

                    <p className="text-slate-600 text-xs font-mono text-center">
                      Or email directly at{" "}
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        {profile.email}
                      </a>
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
