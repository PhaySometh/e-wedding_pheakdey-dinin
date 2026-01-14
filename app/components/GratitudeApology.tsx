"use client";

export default function GratitudeApology() {
  return (
    <section
      id="gratitude-apology"
      className="relative min-h-screen section-wrapper flex items-center justify-center bg-gradient-to-b from-[#F5E6D3] to-[#FFF8DC]"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="floral-pattern"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="50" cy="50" r="3" fill="#D4AF37" />
                <path
                  d="M 50 30 Q 60 40, 50 50 Q 40 40, 50 30"
                  stroke="#D4AF37"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M 50 70 Q 60 60, 50 50 Q 40 60, 50 70"
                  stroke="#D4AF37"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M 30 50 Q 40 60, 50 50 Q 40 40, 30 50"
                  stroke="#D4AF37"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M 70 50 Q 60 60, 50 50 Q 60 40, 70 50"
                  stroke="#D4AF37"
                  strokeWidth="1"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#floral-pattern)" />
          </svg>
        </div>
      </div>

      <div className="container relative z-10 flex flex-col items-center">
        {/* Section Top Decoration */}
        <div className="text-center mb-12 fade-in mx-auto">
          <svg width="200" height="60" viewBox="0 0 200 60" className="mx-auto">
            <defs>
              <linearGradient id="goldGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#FFD700", stopOpacity: 1 }}
                />
                <stop
                  offset="50%"
                  style={{ stopColor: "#D4AF37", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#FFD700", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              d="M 10 30 Q 50 10, 100 30 Q 150 50, 190 30"
              stroke="url(#goldGrad1)"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="50" cy="22" r="4" fill="#FFD700" />
            <circle cx="100" cy="30" r="6" fill="#D4AF37" />
            <circle cx="150" cy="37" r="4" fill="#FFD700" />
          </svg>
        </div>

        {/* Main Content Card */}
        <div className="w-full bg-white rounded-2xl shadow-2xl border-2 border-amber-200 p-8 md:p-12 fade-in">
          {/* Gratitude Section */}
          <div className="text-center mb-12">
            <h2
              className="font-khmer-display text-3xl md:text-5xl text-[#8B0000] mb-6"
              style={{ lineHeight: "1.8" }}
            >
              សេចក្តីថ្លែងអំណរគុណ
            </h2>
            <p className="font-eng text-2xl md:text-3xl font-bold text-[#D4AF37] mb-8">
              Words of Gratitude
            </p>

            <div className="space-y-6 max-w-3xl mx-auto">
              <p
                className="font-khmer text-base md:text-lg text-[#8B4513] leading-relaxed"
                style={{ lineHeight: "2" }}
              >
                យើងខ្ញុំសូមថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅចំពោះលោកអ្នក ដែលបានរុករក
                និងចូលរួមក្នុងពិធីមង្គលការរបស់យើងខ្ញុំ។ ការចូលរួមរបស់លោកអ្នក
                នឹងធ្វើឱ្យថ្ងៃពិសេសរបស់យើងកាន់តែពេញលេញ និងមានអត្ថន័យជាងមុន។
              </p>
              <p className="font-eng text-sm md:text-base text-[#8B4513] leading-relaxed">
                We sincerely thank you for taking the time to view and join us
                in celebrating our wedding day. Your presence will make our
                special day even more complete and meaningful.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent my-12" />

          {/* Apology Section */}
          <div className="text-center">
            <h2
              className="font-khmer-display text-3xl md:text-5xl text-[#8B0000] mb-6"
              style={{ lineHeight: "1.8" }}
            >
              លិខិតសូមអភ័យទោស
            </h2>
            <p className="font-eng text-2xl md:text-3xl font-bold text-[#D4AF37] mb-8">
              Our Sincere Apologies
            </p>

            <div className="space-y-6 max-w-3xl mx-auto">
              <p
                className="font-khmer text-base md:text-lg text-[#8B4513] leading-relaxed"
                style={{ lineHeight: "2" }}
              >
                សូមអភ័យទោសជាមុន ប្រសិនបើមានកំហុសខុសឆ្គង ឬការខ្វះខាតណាមួយ
                ក្នុងពិធីនេះ។
                យើងខ្ញុំសូមអត់ទោសជាស្អីស្អាងសម្រាប់អវត្តមានណាមួយដែលអាចនឹងកើតមានឡើង។
              </p>
              <p className="font-eng text-sm md:text-base text-[#8B4513] leading-relaxed">
                We apologize in advance for any shortcomings or inconveniences
                during our ceremony. We sincerely ask for your understanding and
                forgiveness for any oversight that may occur.
              </p>
            </div>
          </div>

          {/* Decorative Corner Elements */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-amber-300 rounded-tl-lg opacity-40" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-amber-300 rounded-tr-lg opacity-40" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-amber-300 rounded-bl-lg opacity-40" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-amber-300 rounded-br-lg opacity-40" />
        </div>

        {/* Bottom Decoration */}
        <div className="text-center mt-12 fade-in">
          <svg width="150" height="40" viewBox="0 0 150 40" className="mx-auto">
            <path
              d="M 10 20 Q 40 35, 75 20 T 140 20"
              stroke="#D4AF37"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="40" cy="28" r="3" fill="#FFD700" />
            <circle cx="75" cy="20" r="5" fill="#D4AF37" />
            <circle cx="110" cy="28" r="3" fill="#FFD700" />
          </svg>
        </div>
      </div>
    </section>
  );
}
