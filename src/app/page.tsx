"use client";

import { useRef } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { SocialProof } from "./components/SocialProof";
import { HowItWorks } from "./components/HowItWorks";
import { RegisterSection } from "./components/RegisterSection";
import Benefits from "./components/Benefits";
import AnnouncementBar from "./components/AnnouncementBar";
import EventDetails from "./components/EventDetails";
import FAQ from "./components/FAQ";
import PainPoints from "./components/PainPoints";
import WhoShouldAttend from "./components/WhoShouldAttend";
import Testimonials from "./components/Testimonials";
import StickyCTA from "./components/StickyCTA";
import ParentsNote from "./components/ParentsNote";

const Home = () => {
  const registerRef = useRef<HTMLDivElement>(null);

  const scrollToRegister = () => {
    registerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <StickyCTA />
      <AnnouncementBar />
      <Navbar onRegisterClick={scrollToRegister} />
      <HeroSection onRegisterClick={scrollToRegister} />
      <SocialProof />
      <PainPoints />
      <Benefits />
      <WhoShouldAttend />
      <HowItWorks />
      <Testimonials />
      <EventDetails />
      <FAQ />

      <div ref={registerRef}>
        <RegisterSection />
      </div>

      <ParentsNote onRegisterClick={scrollToRegister} />
    </div>
  );
};

export default Home;
