"use client";

export default function PaymentQRCode() {
  return (
    <section
      id="payment"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F5E6D3] to-[#FFF8DC] py-12 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" />

      <div className="relative z-10 w-full mx-auto text-center fade-in flex flex-col items-center">
        {/* Header */}
        <div className="mb-8 md:mb-12 space-y-3 md:space-y-4 w-full max-w-4xl mx-auto px-2">
          <h2
            className="font-khmer-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#b8860b]"
            style={{ lineHeight: "1.8" }}
          >
            អំណោយមង្គលការ
          </h2>
          <p className="font-eng text-lg sm:text-xl md:text-2xl text-[#D4AF37] tracking-wide">
            Wedding Gift
          </p>
          <p
            className="font-khmer text-sm sm:text-base md:text-lg text-[#b8860b] mt-3 md:mt-4 leading-loose px-2"
            style={{ lineHeight: "2" }}
          >
            ប្រសិនបើអ្នកចង់ផ្តល់អំណោយមង្គលការ
            <br />
            សូមស្កេនកូដ QR ខាងក្រោម
          </p>
          <p className="font-eng text-xs sm:text-sm md:text-base text-[#b8860b] opacity-80 mt-2 px-2">
            If you would like to give a wedding gift,
            <br />
            please scan the QR code below
          </p>
        </div>

        {/* QR Codes Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 w-full max-w-4xl mx-auto px-2">
          {/* ABA Dollar QR Code */}
          <div className="qr-card text-center">
            <div className="mb-3 md:mb-4">
              <div className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#b8860b] text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm lg:text-base font-eng font-bold tracking-wide">
                ABA Bank - USD
              </div>
            </div>
            <div className="qr-image-container mb-3 md:mb-4 flex justify-center">
              <img
                src="/photos/qr-dollar.JPG"
                alt="ABA Bank USD QR Code"
                className="w-full max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px] h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="font-eng text-[10px] sm:text-xs md:text-sm text-[#b8860b] font-medium">
              Scan for USD Payment
            </p>
          </div>

          {/* ACLEDA QR Code */}
          <div className="qr-card text-center">
            <div className="mb-3 md:mb-4">
              <div className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#b8860b] text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm lg:text-base font-eng font-bold tracking-wide">
                ACLEDA Bank
              </div>
            </div>
            <div className="qr-image-container mb-3 md:mb-4 flex justify-center">
              <img
                src="/photos/qr-aceleda.JPG"
                alt="ACLEDA Bank QR Code"
                className="w-full max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px] h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="font-eng text-[10px] sm:text-xs md:text-sm text-[#b8860b] font-medium">
              Scan for KHR Payment
            </p>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="mt-8 md:mt-12 space-y-2 w-full max-w-4xl mx-auto px-2">
          <p
            className="font-khmer-display text-lg sm:text-xl md:text-2xl text-[#b8860b]"
            style={{ lineHeight: "1.8" }}
          >
            សូមអរគុណជាខ្លាំង!
          </p>
          <p className="font-eng text-base sm:text-lg md:text-xl text-[#D4AF37] tracking-wide">
            Thank You Very Much!
          </p>
        </div>
      </div>
    </section>
  );
}
