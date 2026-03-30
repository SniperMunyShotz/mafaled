import ScrollReveal from "./ScrollReveal";
import { INDUSTRIES } from "@/lib/constants";

export default function Industries() {
  return (
    <section id="industries" className="py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Industries We <span className="gradient-text">Serve</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-accent to-cyan-accent mx-auto mb-6 rounded-full" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Trusted across sectors that demand the highest standards of
              cleanliness and safety.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3">
            {INDUSTRIES.map((industry) => (
              <span
                key={industry}
                className="px-5 py-2.5 rounded-full glass text-sm font-medium text-gray-300 hover:border-teal-accent/50 hover:bg-teal-accent/10 hover:text-white transition-all duration-300 cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
