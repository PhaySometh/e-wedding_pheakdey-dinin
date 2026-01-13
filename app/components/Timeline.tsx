"use client";

export default function Timeline() {
  const timelineEvents = {
    day1: [
      {
        time: "3:00 PM",
        timeKhmer: "ម៉ោង ៣:០០ រសៀល",
        eventKhmer: "ពិធីសែនក្រុងពាលី",
        eventEnglish: "Sen Krong Peali Ceremony",
      },
      {
        time: "4:00 PM",
        timeKhmer: "ម៉ោង ៤:០០ រសៀល",
        eventKhmer: "ពិធីសូត្រមន្តចម្រើនព្រះបរិត្ត",
        eventEnglish: "Buddhist Chanting Ceremony",
      },
      {
        time: "6:30 PM",
        timeKhmer: "ម៉ោង ៦:៣០ រសៀល",
        eventKhmer: "អញ្ជើញភ្ញៀវពិសាអាហារពេលល្ងាច",
        eventEnglish: "Evening Dinner Reception",
      },
    ],
    day2: [
      {
        time: "7:00 AM",
        timeKhmer: "ម៉ោង ៧:០០ ព្រឹក",
        eventKhmer: "ពិធីហែរជំនូនចូលរោងជ័យ",
        eventEnglish: "Groom's Procession Ceremony",
      },
      {
        time: "8:00 AM",
        timeKhmer: "ម៉ោង ៨:០០ ព្រឹក",
        eventKhmer: "ពិធីកាត់សក់បង្កក់សិរី",
        eventEnglish: "Hair Cutting Ceremony",
      },
      {
        time: "9:00 AM",
        timeKhmer: "ម៉ោង ៩:០០ ព្រឹក",
        eventKhmer: "ពិធីសែនកង្កែប និងពាក់ខ្សែដៃ",
        eventEnglish: "Sen Kangkeb & Blessing Ceremony",
      },
      {
        time: "11:00 AM",
        timeKhmer: "ម៉ោង ១១:០០ ព្រឹក",
        eventKhmer: "អញ្ជើញភ្ញៀវពិសាអាហារថ្ងៃត្រង់",
        eventEnglish: "Lunch Reception",
      },
      {
        time: "5:00 PM",
        timeKhmer: "ម៉ោង ៥:០០ ល្ងាច",
        eventKhmer: "អញ្ជើញភ្ញៀវពិសាអាហារល្ងាច",
        eventEnglish: "Evening Wedding Reception & Dinner",
        isMain: true,
      },
    ],
  };

  return (
    <section
      id="timeline"
      className="relative flex items-center justify-center bg-gradient-to-b from-[#FFF8DC] to-[#F5E6D3] py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20 fade-in w-full max-w-4xl mx-auto px-4">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-khmer-display text-[#8B0000] mb-4 md:mb-6"
            style={{
              textShadow: "0 2px 8px rgba(139, 0, 0, 0.2)",
              lineHeight: "1.8",
              padding: "0.5rem 0",
            }}
          >
            កម្មវិធីសិរីមង្គលអាពាហ៍ពិពាហ៍
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-eng font-bold text-[#D4AF37] tracking-wider">
            WEDDING CEREMONY SCHEDULE
          </p>
          <div className="mt-6 md:mt-8">
            <svg
              width="150"
              height="40"
              viewBox="0 0 150 40"
              className="mx-auto w-32 sm:w-40 md:w-44 lg:w-48"
            >
              <path
                d="M 10 20 Q 40 10, 75 20 T 140 20"
                stroke="#D4AF37"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="40" cy="15" r="3" fill="#FFD700" />
              <circle cx="75" cy="20" r="5" fill="#D4AF37" />
              <circle cx="110" cy="15" r="3" fill="#FFD700" />
            </svg>
          </div>
        </div>

        {/* DAY 1 Header */}
        <div className="text-center mb-10 md:mb-14 fade-in w-full flex justify-center">
          <div className="inline-block bg-gradient-to-r from-[#8B0000] to-[#DC143C] px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-lg shadow-xl">
            <h3
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-khmer text-white mb-1"
              style={{ lineHeight: "1.8" }}
            >
              ថ្ងៃព្រហស្បតិ៍ ទី២៦ ខែកុម្ភៈ ឆ្នាំ២០២៦
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-eng text-white/90">
              Thursday, February 26th, 2026
            </p>
          </div>
        </div>

        {/* Day 1 Timeline */}
        <div className="mb-16 md:mb-20 lg:mb-24 w-full flex justify-center">
          <div className="w-full max-w-3xl lg:max-w-4xl mx-auto px-4">
            <div className="space-y-8 md:space-y-12">
              {timelineEvents.day1.map((event, index) => (
                <TimelineItem key={`day1-${index}`} event={event} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* DAY 2 Header */}
        <div className="text-center mb-10 md:mb-14 fade-in w-full flex justify-center">
          <div className="inline-block bg-gradient-to-r from-[#8B0000] to-[#DC143C] px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-lg shadow-xl">
            <h3
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-khmer text-white mb-1"
              style={{ lineHeight: "1.8" }}
            >
              ថ្ងៃសុក្រ ទី២៧ ខែកុម្ភៈ ឆ្នាំ២០២៦
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-eng text-white/90">
              Friday, February 27th, 2026
            </p>
          </div>
        </div>

        {/* Day 2 Timeline */}
        <div className="mb-16 md:mb-20 w-full flex justify-center">
          <div className="w-full max-w-3xl lg:max-w-4xl mx-auto px-4">
            <div className="space-y-8 md:space-y-12">
              {timelineEvents.day2.map((event, index) => (
                <TimelineItem key={`day2-${index}`} event={event} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Thank You Note */}
        <div className="text-center fade-in w-full flex justify-center">
          <div className="inline-block bg-gradient-to-r from-[#FFD700]/20 via-[#D4AF37]/20 to-[#FFD700]/20 px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-7 rounded-lg border-2 border-[#D4AF37]">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-khmer text-[#8B0000] mb-1">សូមអរគុណ!</p>
            <p className="text-xs sm:text-sm md:text-base font-eng text-[#8B4513] italic">Thank You!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ event, index }: { event: any; index: number }) {
  const isMain = event.isMain;

  return (
    <div className="timeline-item fade-in">
      <div className="flex flex-row items-stretch gap-2 sm:gap-4 md:gap-6 lg:gap-8">
        {/* Time Block - Left Side */}
        <div className="w-[35%] sm:w-[38%] md:w-[35%] lg:w-1/3 flex justify-end">
          <div
            className={`inline-flex flex-col items-center justify-center rounded-lg md:rounded-xl shadow-lg border-2 px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4 md:py-5 lg:py-6 w-full ${
              isMain
                ? "bg-gradient-to-br from-[#FFD700] to-[#D4AF37] border-[#8B0000]"
                : "bg-white border-[#D4AF37]"
            }`}
          >
            <p
              className={`text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-eng font-bold leading-tight ${
                isMain ? "text-white" : "text-[#D4AF37]"
              }`}
            >
              {event.time}
            </p>
            <p
              className={`text-[10px] sm:text-sm md:text-base lg:text-lg font-khmer mt-0.5 sm:mt-1 ${
                isMain ? "text-white" : "text-[#8B4513]"
              }`}
              style={{ lineHeight: "1.6" }}
            >
              {event.timeKhmer}
            </p>
            {isMain && (
              <p className="text-[8px] sm:text-[10px] md:text-xs font-eng text-white mt-1 sm:mt-2 tracking-wide">
                ⭐ MAIN EVENT ⭐
              </p>
            )}
          </div>
        </div>

        {/* Event Details Block - Right Side */}
        <div className="w-[65%] sm:w-[62%] md:w-[65%] lg:w-2/3 flex items-center">
          <div
            className={`rounded-lg md:rounded-xl shadow-lg border-2 p-3 sm:p-5 md:p-6 lg:p-8 w-full ${
              isMain
                ? "bg-gradient-to-br from-white to-[#FFF8DC] border-[#8B0000]"
                : "bg-white border-[#D4AF37]"
            }`}
          >
            <h3
              className={`text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-niradei mb-1.5 sm:mb-2 md:mb-3 pl-3 sm:pl-4 md:pl-5 lg:pl-6 ${
                isMain ? "text-[#8B0000]" : "text-[#8B0000]"
              }`}
              style={{ lineHeight: "1.8", padding: "0.25rem 0" }}
            >
              {event.eventKhmer}
            </h3>
            <p
              className={`text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-eng font-semibold pl-3 sm:pl-4 md:pl-5 lg:pl-6 ${
                isMain ? "text-[#DC143C]" : "text-[#D2691E]"
              }`}
            >
              {event.eventEnglish}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
