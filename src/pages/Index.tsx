import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Activities from "@/components/Activities";
import Calendar from "@/components/Calendar";
import Location from "@/components/Location";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Activities />
      <Calendar />
      <Location />
      <Pricing />
      <Footer />
    </main>
  );
};

export default Index;
