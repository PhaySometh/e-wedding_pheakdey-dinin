"use client";

export default function LocationSection() {
  return (
    <section
      id="location"
      className="relative min-h-screen section-wrapper flex items-center justify-center bg-gradient-to-b from-[#FFF8DC] to-[#F5E6D3]"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" />

      <div className="relative z-10 container-lg text-center fade-in">
        {/* Header */}
        <div className="mb-8 md:mb-12 space-y-3 md:space-y-4">
        <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-khmer-display text-[#8B0000] mb-4 md:mb-6"
            style={{
              textShadow: "0 2px 8px rgba(139, 0, 0, 0.2)",
              lineHeight: "1.8",
              padding: "0.5rem 0",
            }}
          >
            ទីតាំងពិធីមង្គលការ
          </h2>
          <div className="mt-4 md:mt-6 space-y-2">
            <p
              className="font-khmer text-sm sm:text-base md:text-lg text-[#b8860b] leading-loose"
              style={{ lineHeight: "2" }}
            >
              នៅ <b>គេហដ្ឋានខាងស្រី</b> ស្ថិតនៅ
              <br />
              ភូមិកោះដាច់ សង្កាត់កោះដាច់ ខណ្ឌជ្រោយចង្វារ រាជធានីភ្នំពេញ
            </p>
          </div>
        </div>

        {/* Maps Container */}
        <div className="space-y-8 md:space-y-12">
          {/* Physical Map (Drawn Map) - No Container */}
          <div className="map-image-container overflow-hidden flex justify-center">
            <img
              src="/photos/physical_map.jpg"
              alt="Hand-drawn wedding venue map"
              className="w-64 sm:w-72 md:w-80 lg:w-96 xl:w-104 max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Google Map Header - Separate */}
          <div className="text-center mb-6 md:mb-8">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-khmer-display text-[#8B0000] mb-4 md:mb-6"
            style={{
              textShadow: "0 2px 8px rgba(139, 0, 0, 0.2)",
              lineHeight: "1.8",
              padding: "0.5rem 0",
            }}
          >
            ផែនទីនៅលើ Google Maps
          </h2>
          </div>

          {/* Google Map - No Container */}
          <div className="map-container relative w-full overflow-hidden rounded-lg shadow-2xl" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5901.799446485226!2d104.9480299762391!3d11.676385095157785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDQwJzMyLjYiTiAxMDTCsDU3JzA2LjUiRQ!5e0!3m2!1sen!2skh!4v1768289855200!5m2!1sen!2skh"
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Get Directions Button */}
          <div className="flex justify-start">
            <a
              href="https://www.google.com/maps/dir//11.675722,104.951806/@11.6199681,104.9135942,12z?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center justify-center rounded-lg md:rounded-xl shadow-lg border-2 border-[#D4AF37] bg-white px-2 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2 md:py-3 lg:py-4 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-khmer font-bold text-[#8B4513] text-center" style={{ lineHeight: "1.6" }}>
                ទទួលបានការណែនាំផ្លូវទៅគេហដ្ឋានខាងស្រី
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
