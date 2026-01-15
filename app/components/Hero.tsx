"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full section-wrapper flex items-center justify-center"
      style={{ minHeight: "calc(100vh - 0px)" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hero-pattern"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="100"
                cy="100"
                r="60"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="3"
              />
              <path
                d="M 100 40 L 100 160 M 40 100 L 160 100"
                stroke="#D4AF37"
                strokeWidth="2"
              />
              <circle
                cx="100"
                cy="100"
                r="30"
                fill="none"
                stroke="#B8860B"
                strokeWidth="2"
              />
              <path
                d="M 70 70 L 130 130 M 130 70 L 70 130"
                stroke="#FFD700"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="800" height="800" fill="url(#hero-pattern)" />
        </svg>
      </div>

      {/* Floating Couple Images - Left Side (Desktop only) */}
      <div className="hidden lg:block absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 z-20">
        <Image
          src="/photos/couple-1.png"
          alt="Couple 1"
          width={384}
          height={512}
          className="w-80 xl:w-96 2xl:w-104 h-auto object-contain"
          style={{
            filter:
              "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.4)) drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))",
          }}
          priority
        />
      </div>

      {/* Floating Couple Images - Right Side (Desktop only) */}
      <div className="hidden lg:block absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 z-20">
        <Image
          src="/photos/couple-2.png"
          alt="Couple 2"
          width={384}
          height={512}
          className="w-80 xl:w-96 2xl:w-104 h-auto object-contain"
          style={{
            filter:
              "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.4)) drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))",
          }}
          priority
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center container-lg w-full">
        {/* Invitation Title in Khmer */}
        <div className="mb-8 md:mb-10 lg:mb-12 xl:mb-14" id="hero-title">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-khmer-display text-[#B8860B] mb-4"
            style={{ textShadow: "0 4px 12px rgba(184, 134, 11, 0.3)" }}
          >
            សិរីសួស្តីអាពាហ៍ពិពាហ៍
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-eng text-[#8B4513] tracking-widest">
            WEDDING INVITATION
          </p>
        </div>

        {/* Monogram/Logo Image */}
        <div className="my-6 md:my-8 lg:my-10 xl:my-12" id="hero-monogram">
          <div className="inline-block relative">
            <Image
              src="/photos/initial_text_with_frame.png"
              alt="Couple Monogram"
              width={224}
              height={224}
              className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Couple Names */}
        <div className="mb-6 md:mb-8 lg:mb-10" id="hero-names">
          {/* First Person */}
          <h2
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-khmer-display text-[#003366] mb-2"
            style={{
              textShadow: "0 2px 8px rgba(0, 51, 102, 0.3)",
              lineHeight: "1.8",
              padding: "0.5rem 0",
            }}
          >
            ល្មុត ភក្តី
          </h2>
          <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-eng font-medium text-[#8B4513] tracking-wide mb-6 md:mb-8">
            Lmut Pheakdey
          </h3>

          {/* Divider */}
          <div className="flex items-center justify-center my-6 md:my-8">
            <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="mx-3 text-2xl md:text-3xl text-[#D4AF37]">❖</span>
            <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          {/* Second Person */}
          <h2
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-khmer-display text-[#003366] mb-2 mt-6 md:mt-8"
            style={{
              textShadow: "0 2px 8px rgba(0, 51, 102, 0.3)",
              lineHeight: "1.8",
              padding: "0.5rem 0",
            }}
          >
            ស្រន់ ឌីនីន
          </h2>
          <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-eng font-medium text-[#8B4513] tracking-wide pb-6 md:pb-8">
            Srorn Dinin
          </h3>
        </div>

        {/* Ornamental Divider */}
        <div className="my-6 md:my-8 lg:my-10 flex items-center justify-center">
          <svg width="200" height="60" viewBox="0 0 200 60" className="mx-auto">
            <path
              d="M 20 30 Q 50 15, 100 30 T 180 30"
              stroke="#D4AF37"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="50" cy="22" r="4" fill="#FFD700" />
            <circle cx="100" cy="30" r="6" fill="#D4AF37" />
            <circle cx="150" cy="37" r="4" fill="#FFD700" />
          </svg>
        </div>

        {/* Couple Images for Mobile - After Names, Before Date */}
        <div className="lg:hidden mt-8 mb-12 sm:mb-14 md:mb-16 flex gap-4 sm:gap-6 md:gap-8 justify-center items-center px-4">
          <img
            src="/photos/couple-1.png"
            alt="Couple 1"
            className="w-44 sm:w-56 md:w-64 h-auto object-contain max-w-[45%]"
            style={{
              filter:
                "drop-shadow(0 15px 30px rgba(0, 0, 0, 0.4)) drop-shadow(0 8px 15px rgba(0, 0, 0, 0.3))",
            }}
          />
          <img
            src="/photos/couple-2.png"
            alt="Couple 2"
            className="w-44 sm:w-56 md:w-64 h-auto object-contain max-w-[45%]"
            style={{
              filter:
                "drop-shadow(0 15px 30px rgba(0, 0, 0, 0.4)) drop-shadow(0 8px 15px rgba(0, 0, 0, 0.3))",
            }}
          />
        </div>

        {/* Date */}
        <div className="mt-8 md:mt-10 lg:mt-12" id="hero-date">
          <div className="inline-block bg-white/80 backdrop-blur-sm px-4 md:px-6 md:py-4 rounded-lg shadow-2xl border-2 border-[#D4AF37]">
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-khmer text-[#003366] mb-2">
              ថ្ងៃសុក្រ ទី២៧ ខែកុម្ភៈ ឆ្នាំ២០២៦
            </p>
            <div className="mt-4 pt-4 border-t border-[#D4AF37]">
              <p className="text-sm md:text-base lg:text-lg xl:text-xl font-khmer text-[#D2691E]">
                ម៉ោង ៥:០០នាទីល្ងាច
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 sm:mt-12 md:mt-16 flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center items-center">
          {/* Countdown Button */}
          <button
            onClick={() => {
              document.getElementById("countdown")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="group relative px-2 sm:px-3 md:px-5 py-1.5 sm:py-2 md:py-3 bg-gradient-to-r from-[#003366] to-[#004d99] text-white rounded-md md:rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-xs sm:text-sm md:text-base"
          >
            <span className="font-khmer-display whitespace-nowrap">
              រាប់ថយក្រោយ
            </span>
            <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>

          {/* Location/Map Button */}
          <button
            onClick={() => {
              document.getElementById("location")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="group relative px-2 sm:px-3 md:px-5 py-1.5 sm:py-2 md:py-3 bg-gradient-to-r from-[#003366] to-[#004d99] text-white rounded-md md:rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-xs sm:text-sm md:text-base"
          >
            <span className="font-khmer-display whitespace-nowrap">
              ទីតាំងពិធីមង្គលការ
            </span>
            <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>

          {/* QR Code Button */}
          <button
            onClick={() => {
              document.getElementById("payment")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="group relative px-2 sm:px-3 md:px-5 py-1.5 sm:py-2 md:py-3 bg-gradient-to-r from-[#003366] to-[#004d99] text-white rounded-md md:rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-xs sm:text-sm md:text-base"
          >
            <span className="font-khmer-display whitespace-nowrap">
              ចំណងដៃ QR Code
            </span>
            <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div
        className="absolute top-10 left-10 text-4xl md:text-6xl text-[#FFD700] opacity-20 animate-pulse"
        style={{ animationDuration: "3s" }}
      >
        ✦
      </div>
      <div
        className="absolute top-20 right-16 text-3xl md:text-5xl text-[#D4AF37] opacity-20 animate-pulse"
        style={{ animationDuration: "4s", animationDelay: "1s" }}
      >
        ❖
      </div>
      <div
        className="absolute bottom-32 left-20 text-5xl md:text-7xl text-[#FFD700] opacity-20 animate-pulse"
        style={{ animationDuration: "5s", animationDelay: "0.5s" }}
      >
        ✦
      </div>
      <div
        className="absolute bottom-20 right-10 text-4xl md:text-6xl text-[#D4AF37] opacity-20 animate-pulse"
        style={{ animationDuration: "3.5s", animationDelay: "1.5s" }}
      >
        ❖
      </div>
    </section>
  );
}
