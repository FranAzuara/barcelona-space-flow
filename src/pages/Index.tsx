import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Activities from "@/components/Activities";
import Benefits from "@/components/Benefits";
import Calendar from "@/components/Calendar";
import Location from "@/components/Location";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Benefits />
      <Activities />
      <Features />
      <Calendar isLoggedIn={isLoggedIn} />
      <Pricing />
      <Location />
      <FAQ />
      <Footer onLoginStatusChange={setIsLoggedIn} />
    </main>
  );
};

export default Index;
