import { ClipboardCheck, Plane, Droplets, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { PROCESS_STEPS } from "@/lib/constants";

const iconMap = { ClipboardCheck, Plane, Droplets, CheckCircle };

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 px-4 sm:px-6 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-accent/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-accent to-cyan-accent mx-auto mb-6 rounded-full" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A simple, seamless process from assessment to spotless results.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-teal-accent/20 via-teal-accent to-cyan-accent/20" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap];
              return (
                <ScrollReveal key={step.title} delay={i * 150}>
                  <div className="flex flex-col items-center text-center relative">
                    {/* Step number circle */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-accent to-cyan-accent flex items-center justify-center mb-5 relative z-10 shadow-lg shadow-teal-accent/20">
                      <Icon className="text-white" size={24} />
                    </div>
                    {/* Step number badge */}
                    <span className="absolute -top-1 -right-1 md:top-0 md:right-auto md:left-[calc(50%+12px)] w-6 h-6 rounded-full bg-dark-bg border-2 border-teal-accent text-xs font-bold flex items-center justify-center z-20">
                      {step.step}
                    </span>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
