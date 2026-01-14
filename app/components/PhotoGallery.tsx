"use client";

import { useState } from "react";

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    {
      src: "/photos/display-img-1.JPG",
      alt: "Couple Photo 1",
    },
    {
      src: "/photos/display-img-2.JPG",
      alt: "Couple Photo 2",
    },
    {
      src: "/photos/display-img-3.JPG",
      alt: "Couple Photo 3",
    },
    {
      src: "/photos/display-img-4.JPG",
      alt: "Couple Photo 4",
    },
    {
      src: "/photos/display-img-5.JPG",
      alt: "Couple Photo 5",
    },
    {
      src: "/photos/display-img-6.JPG",
      alt: "Couple Photo 6",
    },
  ];

  return (
    <section
      id="gallery"
      className="relative section-wrapper bg-gradient-to-b from-[#FFF8DC] to-[#F5E6D3]"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-khmer-display text-[#003366] mb-4 md:mb-6"
            style={{
              textShadow: "0 2px 8px rgba(0, 51, 102, 0.2)",
              lineHeight: "1.8",
            }}
          >
            រូបភាពដ៏មានអត្ថន័យរបស់យើង
          </h2>
          <p className="font-eng text-base sm:text-lg md:text-xl text-[#8B4513] tracking-wide">
            Our Precious Moments Together
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-[3/4]"
              onClick={() => setSelectedImage(photo.src)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-[#FFD700] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Enlarged photo"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Decorative elements */}
      <div
        className="absolute top-10 left-10 text-4xl text-[#FFD700] opacity-20 animate-pulse"
        style={{ animationDuration: "3s" }}
      >
        ❀
      </div>
      <div
        className="absolute bottom-10 right-10 text-4xl text-[#D4AF37] opacity-20 animate-pulse"
        style={{ animationDuration: "4s", animationDelay: "1s" }}
      >
        ❀
      </div>
    </section>
  );
}
