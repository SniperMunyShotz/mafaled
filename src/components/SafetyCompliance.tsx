import { Shield, Award, UserCheck, Leaf } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { SAFETY_ITEMS } from "@/lib/constants";

const iconMap = { Shield, Award, UserCheck, Leaf };

export default function SafetyCompliance() {
  return (
    <section id="safety" className="py-20 md:py-32 px-4 sm:px-6 bg-navy/50">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Safety & <span className="gradient-text">Compliance</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-accent to-cyan-accent mx-auto mb-6 rounded-full" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Your property and safety come first — always. We meet the highest
              standards in the industry.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAFETY_ITEMS.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="glass glass-hover rounded-2xl p-6 md:p-8 text-center transition-all duration-300 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-teal-accent/10 flex items-center justify-center mx-auto mb-5">
                    <Icon className="text-teal-accent" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
