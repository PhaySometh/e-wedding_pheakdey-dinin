"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import GateAnimation from "./components/GateAnimation";
import Hero from "./components/Hero";
import InvitationCard from "./components/InvitationCard";
import FlipClockCountdown from "./components/FlipClockCountdown";
import PaymentQRCode from "./components/PaymentQRCode";
import PhotoGallery from "./components/PhotoGallery";
import LocationSection from "./components/LocationSection";
import Timeline from "./components/Timeline";
import GratitudeApology from "./components/GratitudeApology";
import Footer from "./components/Footer";

export default function Home() {
  const [isGateOpen, setIsGateOpen] = useState(false);
  const [showGate, setShowGate] = useState(true);

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Back to top button functionality
    const backToTopButton = document.getElementById("back-to-top");

    if (backToTopButton) {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          gsap.to(backToTopButton, {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.3,
          });
        } else {
          gsap.to(backToTopButton, {
            opacity: 0,
            pointerEvents: "none",
            duration: 0.3,
          });
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    if (isGateOpen) {
      console.log("Gate opened state active");
      // Refresh ScrollTrigger to ensure calculations are correct after layout changes
      ScrollTrigger.refresh();

      // Animate main content entrance
      const mainContent = document.getElementById("main-content");
      if (mainContent) {
        console.log("Animating main content");
        gsap.to(mainContent, {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          onComplete: () => {
            console.log("Main content animation complete");
            // Remove the opacity-0 class to ensure visibility sticks
            mainContent.classList.remove("opacity-0");
            // After main content fades in, animate each section
            animateSections();
            // Refresh again after animations are set up
            ScrollTrigger.refresh();
          },
        });
      } else {
        console.error("Main content element not found");
      }
    }
  }, [isGateOpen]);

  const animateSections = () => {
    const sections = document.querySelectorAll("section, .section-animate");

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  };

  return (
    <>
      {/* Gate Animation */}
      {showGate && (
        <GateAnimation 
          onGateOpened={() => {
            setIsGateOpen(true);
            // Hide gate after a short delay to allow animation to complete
            setTimeout(() => setShowGate(false), 1500);
          }} 
        />
      )}

      {/* Main Content */}
      <main
        id="main-content"
        className="opacity-0"
      >
        {/* Hero Section */}
        <Hero />

        {/* Invitation Card Section */}
        <InvitationCard />

        {/* Flip Clock Countdown Section */}
        <FlipClockCountdown />

        {/* Location Section */}
        <LocationSection />

        {/* Timeline Section */}
        <Timeline />

        {/* Payment QR Code Section */}
        <PaymentQRCode />

        {/* Photo Gallery Section */}
        <PhotoGallery />

        {/* Gratitude & Apology Section */}
        <GratitudeApology />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
