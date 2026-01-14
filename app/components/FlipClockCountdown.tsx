"use client";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

export default function FlipClockCountdownSection() {
  // Wedding date: February 27, 2026 at 5:00 PM
  const weddingDate = new Date("2026-02-27T17:00:00").getTime();

  return (
    <section
      id="countdown"
      className="relative min-h-screen section-wrapper flex items-center justify-center"
      style={{
        backgroundImage: `url('/photos/countdown-section-background.JPG')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-white/70 pointer-events-none" />

      <div className="relative z-10 text-center container">
        {/* Header */}
        <div className="mb-8 md:mb-12 space-y-3 md:space-y-4">
          <h2
            className="font-khmer-display text-xl sm:text-2xl md:text-3xl lg:text-5xl text-[#b8860b]"
            style={{ lineHeight: "1.8" }}
          >
            រាប់ថយក្រោយរហូតដល់ថ្ងៃមង្គល
          </h2>
          <p className="font-eng text-base sm:text-lg md:text-xl lg:text-2xl text-[#8B4513] tracking-wide">
            Counting Down to Our Special Day
          </p>
        </div>

        {/* Flip Clock Display */}
        <div className="flip-clock-wrapper mt-2 md:mt-4 lg:mt-6 overflow-hidden w-full flex justify-center items-center">
          <FlipClockCountdown
            to={weddingDate}
            labels={["ថ្ងៃ", "ម៉ោង", "នាទី", "វិនាទី"]}
            labelStyle={{
              fontSize: "clamp(0.5rem, 2vw, 1rem)",
              fontWeight: 500,
              color: "#b8860b",
              textTransform: "uppercase",
              marginTop: "0.3rem",
            }}
            digitBlockStyle={{
              width: "clamp(1.4rem, 8vw, 4rem)",
              height: "clamp(1.9rem, 10vw, 6rem)",
              fontSize: "clamp(0.8rem, 5vw, 3rem)",
              background:
                "linear-gradient(180deg, #3a3a3a 0%, #2c2c2c 50%, #1a1a1a 100%)",
              color: "#ffffff",
            }}
            dividerStyle={{ color: "#D4AF37", height: "1px" }}
            separatorStyle={{ color: "#D4AF37", size: "clamp(2px, 1vw, 8px)" }}
            duration={0.5}
          />
        </div>

        {/* Wedding Date */}
        <div className="text-[#b8860b] text-xs sm:text-sm md:text-base font-eng tracking-wider">
          February 27, 2026 • 5:00 PM
        </div>
      </div>

      <style jsx global>{`
        .flip-clock-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 0 1rem;
        }

        .flip-clock-wrapper > div {
          max-width: 100%;
        }

        /* Ensure proper scaling on all devices */
        .flip-clock-wrapper .flip-clock {
          max-width: 100%;
        }

        /* Fine-tune for very small screens */
        @media (max-width: 320px) {
          .flip-clock-wrapper {
            padding: 0 0.5rem;
          }
        }

        /* Fine-tune for medium screens */
        @media (min-width: 768px) and (max-width: 1024px) {
          .flip-clock-wrapper {
            padding: 0 2rem;
          }
        }

        /* Fine-tune for large screens */
        @media (min-width: 1024px) {
          .flip-clock-wrapper {
            padding: 0 3rem;
          }
        }
      `}</style>
    </section>
  );
}
