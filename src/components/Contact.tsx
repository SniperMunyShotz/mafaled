"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { CONTACT_INFO } from "@/lib/constants";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputStyles =
    "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-teal-accent focus:ring-1 focus:ring-teal-accent outline-none transition-all duration-200";

  const contactCards = [
    { icon: Phone, label: "Phone", value: CONTACT_INFO.phone },
    { icon: Mail, label: "Email", value: CONTACT_INFO.email },
    {
      icon: MapPin,
      label: "Location",
      value: `${CONTACT_INFO.address}\n${CONTACT_INFO.city}`,
    },
    { icon: Clock, label: "Hours", value: CONTACT_INFO.hours },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Get a <span className="gradient-text">Free Quote</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-accent to-cyan-accent mx-auto mb-6 rounded-full" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to clean smarter? Tell us about your project and we&apos;ll
              get back to you within 24 hours.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <ScrollReveal>
            <div className="glass rounded-2xl p-6 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-teal-accent/20 flex items-center justify-center mb-4">
                    <Send className="text-teal-accent" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Quote Request Sent!
                  </h3>
                  <p className="text-gray-400">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-teal-accent hover:underline text-sm"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={inputStyles}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={inputStyles}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputStyles}
                    />
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className={inputStyles}
                    >
                      <option value="" disabled>
                        Select Service
                      </option>
                      <option value="building">
                        Building & Façade Cleaning
                      </option>
                      <option value="window">Window Cleaning</option>
                      <option value="solar">Solar Panel Cleaning</option>
                      <option value="industrial">
                        Industrial & Commercial
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputStyles} resize-none`}
                  />
                  <button
                    type="submit"
                    className="w-full btn-gradient py-4 rounded-lg text-white font-semibold text-lg flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Request a Quote
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Contact Info Cards */}
          <ScrollReveal delay={200}>
            <div className="space-y-4">
              {contactCards.map((card) => (
                <div
                  key={card.label}
                  className="glass glass-hover rounded-xl p-5 flex items-start gap-4 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-accent/10 flex items-center justify-center flex-shrink-0">
                    <card.icon className="text-teal-accent" size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{card.label}</p>
                    <p className="font-medium whitespace-pre-line">
                      {card.value}
                    </p>
                  </div>
                </div>
              ))}

              {/* CTA card */}
              <div className="glass rounded-xl p-6 mt-6 bg-gradient-to-br from-teal-accent/10 to-cyan-accent/5 border-teal-accent/20">
                <h3 className="font-semibold text-lg mb-2">
                  Need an urgent cleaning?
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Call us directly for same-day assessment availability.
                </p>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/[^\d]/g, "")}`}
                  className="inline-flex items-center gap-2 text-teal-accent font-semibold hover:underline"
                >
                  <Phone size={16} />
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
