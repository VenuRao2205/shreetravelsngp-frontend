import React from "react";
import Hero from "./home/Hero";
import Features from "./home/Features";
import About from "./home/About";
import ServicesSection from "./home/Services";
import CTA from "./home/CTA";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <About />
      <ServicesSection />
      <CTA />
    </div>
  );
};

export default Home;