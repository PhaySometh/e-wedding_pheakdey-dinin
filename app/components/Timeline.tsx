"use client";

export default function Timeline() {
  const timelineEvents = {
    day1: [
      {
        timeKhmer: "ម៉ោង ៣:០០ រសៀល",
        eventKhmer: "ពិធីសែនក្រុងពាលី",
      },
      {
        timeKhmer: "ម៉ោង ៤:០០ រសៀល",
        eventKhmer: "ពិធីសូត្រមន្តចម្រើនព្រះបរិត្ត",
      },
      {
        timeKhmer: "ម៉ោង ៦:៣០ រសៀល",
        eventKhmer: "អញ្ជើញភ្ញៀវកិត្តិយសពិសាអាហារពេលល្ងាច",
      },
    ],
    day2: [
      {
        timeKhmer: "ម៉ោង ៦:៣០ ព្រឹក",
        eventKhmer: "ជួបជុំភ្ញៀវកិត្តិយសទាំងអស់ដើម្បីរៀបចំហែជំនូន",
      },
      {
        timeKhmer: "ម៉ោង ៧:០០ ព្រឹក",
        eventKhmer: "ពិធីហែជំនូនកំណត់ចូលរោងជ័យ",
      },
      {
        timeKhmer: "ម៉ោង ៧:៣០ ព្រឹក",
        eventKhmer:
          "ពិធីចៅមហានិយាយជើងការ សែនព្រេន <br />​រៀបរាប់ផ្លែឈើនិងពិសាអាហារពេលព្រឹក",
      },
      {
        timeKhmer: "ម៉ោង 9:០០ ព្រឹក",
        eventKhmer: "ពិធីកាត់សក់បង្កក់សិរី កូនប្រុស-កូនស្រី",
      },
      {
        timeKhmer: "ម៉ោង ១០:៣០ ព្រឹក",
        eventKhmer: "ពិធីសែនកុងម៉ា",
      },
      {
        timeKhmer: "ម៉ោង ១១:០០ ព្រឹក",
        eventKhmer: "ពិធីសំពះផ្ទឹមចងដៃ បង្វិលពពិល <br />​និងព្រះថោងតោងស្បៃ",
      },
      {
        timeKhmer: "ម៉ោង ១២:០០ ថ្ងៃត្រង់",
        eventKhmer: "អញ្ជើញភ្ញៀវកិត្តិយសពិសាអាហារថ្ងៃត្រង់",
      },
      {
        timeKhmer: "ម៉ោង ៥:០០ ល្ងាច",
        eventKhmer: "អញ្ជើញភ្ញៀវកិត្តិយស ពិសាភោជនាហារ",
        isMain: true,
      },
    ],
  };

  return (
    <section
      id="timeline"
      className="relative section-wrapper flex items-center justify-center bg-gradient-to-b from-[#FFF8DC] to-[#F5E6D3]"
    >
      <div className="container-lg flex flex-col items-center gap-0">
        {/* Section Header */}
        <div className="text-center mb-2 md:mb-4 lg:mb-6 fade-in w-full">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-khmer-display text-[#003366] mb-4 md:mb-6"
            style={{
              textShadow: "0 2px 8px rgba(0, 51, 102, 0.2)",
              lineHeight: "1.8",
              padding: "0.5rem 0",
            }}
          >
            កម្មវិធីសិរីមង្គលអាពាហ៍ពិពាហ៍
          </h2>
          {/* Ornamental Divider */}
          <div className="flex items-center justify-center">
            <svg
              width="200"
              height="60"
              viewBox="0 0 200 60"
              className="mx-auto"
            >
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
        </div>

        {/* DAY 1 Header */}
        <div className="text-center fade-in w-full flex justify-center">
          <div className="inline-block bg-gradient-to-r from-[#003366] to-[#004d99] px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-lg shadow-xl mb-2 md:mb-4 lg:mb-6">
            <h3
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-khmer text-white "
              style={{ lineHeight: "1" }}
            >
              ថ្ងៃព្រហស្បតិ៍ ទី២៦ ខែកុម្ភៈ ឆ្នាំ២០២៦
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-eng text-white/90">
              Thursday, February 26th, 2026
            </p>
          </div>
        </div>

        {/* Day 1 Timeline */}
        <div className="mb-4 md:mb-6 lg:mb-8 w-full flex justify-center mt-0">
          <div className="w-full max-w-3xl lg:max-w-4xl mx-auto">
            <div className="space-y-2 md:space-y-4">
              {timelineEvents.day1.map((event, index) => (
                <TimelineItem
                  key={`day1-${index}`}
                  event={event}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* DAY 2 Header */}
        <div className="text-center fade-in w-full flex justify-center">
          <div className="inline-block bg-gradient-to-r from-[#003366] to-[#004d99] px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-lg shadow-xl mb-2 md:mb-4 lg:mb-6">
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
        <div className="mb-4 md:mb-6 lg:mb-8 w-full flex justify-center mt-0">
          <div className="w-full max-w-3xl lg:max-w-4xl mx-auto">
            <div className="space-y-2 md:space-y-4">
              {timelineEvents.day2.map((event, index) => (
                <TimelineItem
                  key={`day2-${index}`}
                  event={event}
                  index={index}
                />
              ))}
            </div>
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
            className={`inline-flex flex-col items-center justify-center rounded-lg md:rounded-xl shadow-lg border-2 w-full ${
              isMain
                ? "bg-gradient-to-br from-[#FFD700] to-[#D4AF37] border-[#003366]"
                : "bg-white border-[#D4AF37]"
            }`}
          >
            <p
              className={`text-[10px] sm:text-sm md:text-base lg:text-lg font-khmer font-bold ${
                isMain ? "text-white" : "text-[#8B4513]"
              }`}
              style={{ lineHeight: "1.6" }}
            >
              {event.timeKhmer}
            </p>
          </div>
        </div>

        {/* Event Details Block - Right Side */}
        <div className="w-[65%] sm:w-[62%] md:w-[65%] lg:w-2/3 flex items-center">
          <div
            className={`rounded-lg md:rounded-xl shadow-lg border-2 w-full ${
              isMain
                ? "bg-gradient-to-br from-white to-[#FFF8DC] border-[#003366]"
                : "bg-white border-[#D4AF37]"
            }`}
          >
            <h3
              className={`text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-niradei ${
                isMain ? "text-[#003366]" : "text-[#003366]"
              }`}
              style={{
                lineHeight: "1.8",
                paddingTop: "0.25rem",
                paddingBottom: "0.25rem",
                paddingLeft: "0.5rem",
              }}
              dangerouslySetInnerHTML={{ __html: event.eventKhmer }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
