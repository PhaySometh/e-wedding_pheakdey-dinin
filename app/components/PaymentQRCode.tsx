"use client";

export default function PaymentQRCode() {
  return (
    <section
      id="payment"
      className="relative min-h-screen section-wrapper flex items-center justify-center"
      style={{
        backgroundImage: `url('/photos/qr-section-background.JPG')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-white/70 pointer-events-none" />

      <div className="relative z-10 container text-center fade-in flex flex-col items-center">
        {/* Header */}
        <div className="mb-8 md:mb-12 space-y-3 md:space-y-4 w-full">
        <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-khmer-display text-[#8B0000] mb-4 md:mb-6"
            style={{
              textShadow: "0 2px 8px rgba(139, 0, 0, 0.2)",
              lineHeight: "1.8",
              padding: "0.5rem 0",
            }}
          >
            ចំណងដៃមង្គលការជា QR Code
          </h2>
          <p
            className="font-khmer text-sm sm:text-base md:text-lg text-[#b8860b] mt-3 md:mt-4 leading-loose"
            style={{ lineHeight: "2" }}
            >
            លោកអ្នកអាចផ្តល់ចងដៃមង្គលការ
            <br />
            តាមរយៈ QR Code ខាងក្រោម
          </p>
        </div>

        {/* Groom Section */}
        <div className="w-full mb-12 md:mb-16 flex flex-col items-center">
          <h3
            className="font-khmer-display text-xl sm:text-2xl md:text-3xl text-[#b8860b] mb-6 md:mb-8"
            style={{ lineHeight: "1.8" }}
          >
            ចំណងដៃខាងកូនកម្លោះ
          </h3>
          
          {/* Groom's Two QR Codes */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-[50%]">
            {/* ABA Dollar QR Code */}
            <div className="qr-card text-center flex justify-center">
              <img
                src="/photos/qr-aba-dollar.png"
                alt="Groom ABA Bank USD QR Code"
                className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* ABA Riel QR Code */}
            <div className="qr-card text-center flex justify-center">
              <img
                src="/photos/qr-aba-riel.png"
                alt="Groom ABA Bank Riel QR Code"
                className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Bride Section */}
        <div className="w-full mb-12 md:mb-16 flex flex-col items-center">
          <h3
            className="font-khmer-display text-xl sm:text-2xl md:text-3xl text-[#b8860b] mb-6 md:mb-8"
            style={{ lineHeight: "1.8" }}
          >
            ចំណងដៃខាងកូនក្រមុំ
          </h3>
          
          {/* Bride's QR Code - Centered */}
          <div className="flex justify-center max-w-[25%]">
            <div className="qr-card text-center w-full">
              <img
                src="/photos/qr-aceleda.png"
                alt="Bride ACLEDA Bank QR Code"
                className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="mt-8 md:mt-12 space-y-2 w-full">
          <p
            className="font-khmer-display text-lg sm:text-xl md:text-2xl text-[#b8860b]"
            style={{ lineHeight: "1.8" }}
          >
            សូមអរគុណ!
          </p>
        </div>
      </div>
    </section>
  );
}
