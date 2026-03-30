import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyDrones from "@/components/WhyDrones";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import SafetyCompliance from "@/components/SafetyCompliance";
import Industries from "@/components/Industries";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyDrones />
        <Services />
        <HowItWorks />
        <SafetyCompliance />
        <Industries />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
