import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Gradient mesh background */}
        <div
          className="absolute inset-0 animate-gradient-shift"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(20, 184, 166, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(20, 184, 166, 0.08) 0%, transparent 50%)",
            backgroundSize: "200% 200%",
          }}
        />
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-teal-accent/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-accent/8 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-teal-accent/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="animate-fade-in-up">
          <p className="text-teal-accent font-semibold text-sm sm:text-base tracking-widest uppercase mb-6">
            Professional Drone Cleaning Services
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6">
            Safer. Faster.
            <br />
            <span className="gradient-text">Smarter.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Cutting-edge drone technology to clean buildings, windows, solar
            panels, and industrial structures — without scaffolding, lifts, or
            risk to people.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="btn-gradient px-8 py-4 rounded-full text-lg font-semibold text-white animate-glow-pulse"
            >
              Get a Free Quote
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-full text-lg font-semibold text-teal-accent border border-teal-accent/30 hover:bg-teal-accent/10 transition-all duration-300"
            >
              See Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <a href="#why-drones" className="text-gray-500 hover:text-teal-accent transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
}
