"use client";

export default function Footer() {
  return (
    <footer className="relative section-wrapper border-t-4 border-[#D4AF37] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/photos/footer-section-background.jpg')",
        }}
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="container flex flex-col items-center relative z-10">
        {/* Decorative Top */}
        <div className="text-center mb-8 fade-in">
          <svg width="200" height="60" viewBox="0 0 200 60" className="mx-auto">
            <path
              d="M 20 30 Q 60 15, 100 30 T 180 30"
              stroke="#D4AF37"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="60" cy="22" r="4" fill="#FFD700" />
            <circle cx="100" cy="30" r="6" fill="#D4AF37" />
            <circle cx="140" cy="22" r="4" fill="#FFD700" />
            <path
              d="M 90 30 L 95 42 L 100 30 L 105 42 L 110 30"
              stroke="#B8860B"
              strokeWidth="2"
              fill="none"
            />
            <ellipse
              cx="100"
              cy="30"
              rx="15"
              ry="8"
              fill="none"
              stroke="#8B4513"
              strokeWidth="1"
            />
            <ellipse
              cx="100"
              cy="30"
              rx="10"
              ry="5"
              fill="none"
              stroke="#8B4513"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Main Thank You Message */}
        <div className="text-center mb-8 fade-in">
          <h2
            className="copy-block text-3xl md:text-5xl font-khmer-display text-white mb-4"
            style={{
              textShadow:
                "0 4px 20px rgba(0, 0, 0, 0.95), 0 2px 10px rgba(0, 51, 102, 0.8), 0 0 30px rgba(0, 51, 102, 0.6), 2px 2px 4px rgba(0, 0, 0, 1)",
              WebkitTextStroke: "0.5px rgba(0, 51, 102, 0.5)",
              lineHeight: "1.8",
            }}
          >
            សូមអរគុណ
          </h2>
          <div className="flex flex-col items-center gap-3">
            <p className="copy-block text-base md:text-lg font-khmer text-white leading-relaxed">
              ការចូលរួមរបស់លោកអ្នក នឹងធ្វើឱ្យថ្ងៃរបស់យើងកាន់តែពិសេស
            </p>
          </div>
        </div>

        {/* Couple Names Signature Style */}
        <div className="text-center mb-8 fade-in">
          <div className="inline-block">
            <div className="flex items-center justify-center space-x-4 md:space-x-6">
              <div className="text-right">
                <p
                  className="text-xl md:text-2xl font-khmer-display text-white"
                  style={{
                    textShadow:
                      "0 4px 20px rgba(0, 0, 0, 0.95), 0 2px 10px rgba(0, 51, 102, 0.8), 0 0 30px rgba(0, 51, 102, 0.6), 2px 2px 4px rgba(0, 0, 0, 1)",
                    WebkitTextStroke: "0.5px rgba(0, 51, 102, 0.5)",
                    lineHeight: "1.8",
                  }}
                >
                  ភក្តី
                </p>
              </div>

              <div className="text-3xl md:text-4xl text-[#D4AF37]">❖</div>

              <div className="text-left">
                <p
                  className="text-xl md:text-2xl font-khmer-display text-white"
                  style={{
                    textShadow:
                      "0 4px 20px rgba(0, 0, 0, 0.95), 0 2px 10px rgba(0, 51, 102, 0.8), 0 0 30px rgba(0, 51, 102, 0.6), 2px 2px 4px rgba(0, 0, 0, 1)",
                    WebkitTextStroke: "0.5px rgba(0, 51, 102, 0.5)",
                    lineHeight: "1.8",
                  }}
                >
                  ឌីនីន
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Date Reminder */}
        <div className="text-center mb-8 fade-in">
          <div className="inline-block bg-white/80 backdrop-blur-sm px-6 md:px-8 py-4 rounded-lg border-2 border-[#D4AF37] shadow-lg">
            <p className="text-base md:text-lg font-khmer text-[#003366] mb-1">
              ថ្ងៃសុក្រ ទី២៧ ខែកុម្ភៈ ឆ្នាំ២០២៦
            </p>
            <p className="text-sm md:text-base font-eng text-[#8B4513]">
              Friday, February 27th, 2026
            </p>
            <p className="text-xs md:text-sm font-eng text-[#D2691E] mt-2">
              5:00 PM onwards
            </p>
          </div>
        </div>

        {/* Copyright/Credits */}
        <div className="text-center text-xs md:text-sm text-white fade-in">
          <p className="font-eng mb-1">With Love, Pheakdey & Dinin © 2026</p>
          <p className="font-eng">Phnom Penh, Cambodia</p>
        </div>
      </div>
    </footer>
  );
}
