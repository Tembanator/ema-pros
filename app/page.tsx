import HowItWorks from "@/components/HowItWorks";
import TrustStats from "@/components/TrustStats";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTA";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
      {/* --- HERO SECTION --- */}
      <Hero />
      {/* --- TRUST STATS --- */}
      <TrustStats />

      {/* --- HOW IT WORKS --- */}
      <HowItWorks />

      {/* --- CTA SECTION --- */}
      <CTASection />

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
};

export default LandingPage;
