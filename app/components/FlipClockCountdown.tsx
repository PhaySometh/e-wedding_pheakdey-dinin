"use client";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

export default function FlipClockCountdownSection() {
  // Wedding date: February 27, 2026 at 5:00 PM
  const weddingDate = new Date("2026-02-27T17:00:00").getTime();

  return (
    <section
      id="countdown"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#FFF8DC] to-[#F5E6D3] py-20 px-6"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" />

      <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <h2
            className="font-khmer-display text-3xl md:text-5xl text-[#b8860b]"
            style={{ lineHeight: "1.8" }}
          >
            រាប់ថយក្រោយរហូតដល់ថ្ងៃមង្គល
          </h2>
          <p className="font-eng text-xl md:text-2xl text-[#D4AF37] tracking-wide">
            Counting Down to Our Special Day
          </p>
        </div>

        {/* Flip Clock Display */}
        <div className="flip-clock-wrapper mb-8">
          <FlipClockCountdown
            to={weddingDate}
            labels={["ថ្ងៃ", "ម៉ោង", "នាទី", "វិនាទី"]}
            labelStyle={{
              fontSize: "1rem",
              fontWeight: 500,
              color: "#b8860b",
              textTransform: "uppercase",
              marginTop: "0.5rem",
            }}
            digitBlockStyle={{
              width: "3rem",
              height: "4.5rem",
              fontSize: "2.5rem",
              background: "linear-gradient(180deg, #3a3a3a 0%, #2c2c2c 50%, #1a1a1a 100%)",
              color: "#ffffff",
            }}
            dividerStyle={{ color: "#D4AF37", height: "1px" }}
            separatorStyle={{ color: "#D4AF37", size: "6px" }}
            duration={0.5}
          />
          
          {/* English Labels */}
          <div className="flex justify-center gap-4 md:gap-8 mt-2">
            <div className="font-eng text-xs md:text-sm text-[#8B4513] tracking-wider uppercase w-12 md:w-16">
              Days
            </div>
            <div className="font-eng text-xs md:text-sm text-[#8B4513] tracking-wider uppercase w-12 md:w-16">
              Hours
            </div>
            <div className="font-eng text-xs md:text-sm text-[#8B4513] tracking-wider uppercase w-12 md:w-16">
              Minutes
            </div>
            <div className="font-eng text-xs md:text-sm text-[#8B4513] tracking-wider uppercase w-12 md:w-16">
              Seconds
            </div>
          </div>
        </div>

        {/* Wedding Date */}
        <div className="text-[#b8860b] text-sm md:text-base font-eng tracking-wider">
          February 27, 2026 • 5:00 PM
        </div>
      </div>

      <style jsx global>{`
        .flip-clock-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        /* Responsive sizing for mobile */
        @media (max-width: 768px) {
          .flip-clock-wrapper .flip-clock-countdown {
            transform: scale(0.8);
          }
        }
        
        @media (max-width: 480px) {
          .flip-clock-wrapper .flip-clock-countdown {
            transform: scale(0.65);
          }
        }
      `}</style>
    </section>
  );
}
