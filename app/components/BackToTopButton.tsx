"use client";

export default function BackToTopButton() {
  return (
    <button
      id="back-to-top"
      className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] text-white rounded-full shadow-2xl opacity-0 pointer-events-none transition-all duration-300 hover:scale-110 z-40 flex items-center justify-center border-2 border-white"
      aria-label="Back to top"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 19V5M5 12l7-7 7 7"></path>
      </svg>
    </button>
  );
}
