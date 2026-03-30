import { Building2, Sparkles, Sun, Factory, Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { SERVICES } from "@/lib/constants";

const iconMap = { Building2, Sparkles, Sun, Factory };

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-accent to-cyan-accent mx-auto mb-6 rounded-full" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From glass towers to solar farms, we deliver spotless results at
              any height.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <ScrollReveal key={service.title} delay={i * 100}>
                <div className="glass rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(20,184,166,0.12)] h-full group">
                  {/* Gradient accent bar */}
                  <div className="h-1 bg-gradient-to-r from-teal-accent to-cyan-accent" />
                  <div className="p-6 md:p-8">
                    <div className="w-14 h-14 rounded-xl bg-teal-accent/10 flex items-center justify-center mb-6 group-hover:bg-teal-accent/20 transition-colors">
                      <Icon className="text-teal-accent" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-5 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-gray-300"
                        >
                          <Check
                            className="text-teal-accent flex-shrink-0"
                            size={16}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
