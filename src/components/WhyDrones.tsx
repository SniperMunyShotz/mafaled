import {
  ShieldOff,
  VolumeX,
  Zap,
  DollarSign,
  Leaf,
  Building2,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { BENEFITS } from "@/lib/constants";

const iconMap = {
  ScaffoldingOff: ShieldOff,
  VolumeX,
  Zap,
  DollarSign,
  Leaf,
  Building2,
};

export default function WhyDrones() {
  return (
    <section id="why-drones" className="py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why <span className="gradient-text">Drone Cleaning</span>?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-accent to-cyan-accent mx-auto mb-6 rounded-full" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Drone cleaning isn&apos;t the future — it&apos;s happening now.
              Here&apos;s why businesses are making the switch.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {BENEFITS.map((benefit, i) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap];
            return (
              <ScrollReveal key={benefit.title} delay={i * 100}>
                <div className="glass glass-hover rounded-2xl p-6 md:p-8 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-teal-accent/10 flex items-center justify-center mb-5">
                    <Icon className="text-teal-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
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
