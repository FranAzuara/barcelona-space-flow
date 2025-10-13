import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Activities from "@/components/Activities";
import Calendar from "@/components/Calendar";
import Location from "@/components/Location";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Activities />
      <Calendar />
      <Location />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
