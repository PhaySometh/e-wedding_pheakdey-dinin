"use client";

export default function LocationSection() {
  return (
    <section
      id="location"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#FFF8DC] to-[#F5E6D3] py-12 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto text-center fade-in">
        {/* Header */}
        <div className="mb-8 md:mb-12 space-y-3 md:space-y-4 px-2">
          <h2
            className="font-khmer-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#b8860b]"
            style={{ lineHeight: "1.8" }}
          >
            ទីតាំងពិធីមង្គលការ
          </h2>
          <p className="font-eng text-lg sm:text-xl md:text-2xl text-[#D4AF37] tracking-wide">
            Wedding Location
          </p>
          <div className="mt-4 md:mt-6 space-y-2 px-2">
            <p
              className="font-khmer text-sm sm:text-base md:text-lg text-[#b8860b] leading-loose"
              style={{ lineHeight: "2" }}
            >
              គេហដ្ឋានខាងស្រី
              <br />
              ភូមិកោះដាច់ សង្កាត់កោះដាច់ ខណ្ឌជ្រោយចង្វារ រាជធានីភ្នំពេញ
            </p>
            <p className="font-eng text-xs sm:text-sm md:text-base text-[#b8860b] opacity-80">
              Bride&apos;s House
              <br />
              Koh Dach Village, Sang Kat Koh Dach,
              <br />
              Khan Chroy Changvar, Phnom Penh
            </p>
          </div>
        </div>

        {/* Maps Container */}
        <div className="space-y-8 md:space-y-12 px-2">
          {/* Physical Map (Drawn Map) */}
          <div className="map-card bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border-2 border-amber-200 hover:shadow-2xl transition-all duration-300">
            <div className="mb-4 md:mb-6">
              <h3
                className="font-khmer-display text-lg sm:text-xl md:text-2xl text-[#b8860b] mb-2"
                style={{ lineHeight: "1.8" }}
              >
                ផែនទីណែនាំ
              </h3>
              <p className="font-eng text-sm sm:text-base md:text-lg text-[#D4AF37]">
                Illustrated Map
              </p>
            </div>
            <div className="map-image-container overflow-hidden rounded-lg flex justify-center">
              <img
                src="/photos/physical_map.jpg"
                alt="Hand-drawn wedding venue map"
                className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Google Map */}
          <div className="map-card bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border-2 border-amber-200 hover:shadow-2xl transition-all duration-300">
            <div className="mb-4 md:mb-6">
              <h3
                className="font-khmer-display text-lg sm:text-xl md:text-2xl text-[#b8860b] mb-2"
                style={{ lineHeight: "1.8" }}
              >
                ផែនទី Google
              </h3>
              <p className="font-eng text-sm sm:text-base md:text-lg text-[#D4AF37]">
                Google Maps
              </p>
            </div>
            <div className="map-container relative w-full overflow-hidden rounded-lg" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5901.799446485226!2d104.9480299762391!3d11.676385095157785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDQwJzMyLjYiTiAxMDTCsDU3JzA2LjUiRQ!5e0!3m2!1sen!2skh!4v1768289855200!5m2!1sen!2skh"
                className="absolute top-0 left-0 w-full h-full shadow-md"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-4 md:mt-6">
              <a
                href="https://www.google.com/maps/place/11%C2%B040'32.6%22N+104%C2%B057'06.5%22E/@11.6763851,104.9480299,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#b8860b] text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-eng font-bold text-sm sm:text-base tracking-wide hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 md:mt-12 p-4 sm:p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-amber-200 mx-2">
          <div className="space-y-2 md:space-y-3">
            <p
              className="font-khmer text-sm sm:text-base md:text-lg text-[#b8860b] leading-loose"
              style={{ lineHeight: "2" }}
            >
              📍 ពិធីមង្គលការនឹងប្រព្រឹត្តទៅនៅគេហដ្ឋានខាងស្រី
            </p>
            <p className="font-eng text-xs sm:text-sm md:text-base text-[#b8860b] opacity-80">
              📍 The wedding ceremony will be held at the bride&apos;s house
            </p>
            <p className="font-eng text-xs sm:text-sm md:text-base text-[#D4AF37] font-bold">
              🕔 February 27, 2026 at 5:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
