"use client";

export default function InvitationCard() {
  return (
    <section
      id="invitation-card"
      className="relative min-h-[70vh] md:min-h-screen section-wrapper flex items-center justify-center bg-gradient-to-b from-[#F5E6D3] to-[#FFF8DC]"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" />

      <div className="relative z-10 container p-6 sm:p-8 md:p-10 lg:p-12 bg-[#fdfbf7] shadow-2xl border border-amber-200 text-[#b8860b] text-center rounded-lg">
        {/* Khmer Section (Top) */}
        <div className="mb-6 md:mb-12 space-y-3 md:space-y-6">
          <h2
            className="font-khmer-display text-xl sm:text-2xl md:text-3xl lg:text-5xl mb-3 md:mb-8"
            style={{ lineHeight: "1.8" }}
          >
            សិរីសួស្តីមង្គលអាពាហ៍ពិពាហ៍
          </h2>

          {/* Parents Grid - Always 2 columns */}
          <div
            className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-8 font-khmer text-xs sm:text-sm md:text-lg lg:text-xl leading-loose"
            style={{ lineHeight: "2" }}
          >
            <div className="text-center md:text-right">
              <p>
                លោក <span className="font-bold">ល្មុត សំកា</span>
              </p>
              <p>
                លោកស្រី <span className="font-bold">ស៊ុក សេងទៀង</span>
              </p>
            </div>
            <div className="text-center md:text-left">
              <p>
                លោក <span className="font-bold">សេត ណារិទ្ធ</span>
              </p>
              <p>
                លោកស្រី <span className="font-bold">ស៊ីវ ស៊ីថា</span>
              </p>
            </div>
          </div>

          {/* Invitation Header */}
          <div
            className="font-khmer-display text-sm sm:text-base md:text-xl lg:text-2xl my-2 md:my-6"
            style={{ lineHeight: "1.8" }}
          >
            មានកិត្តិយសសូមគោរពអញ្ជើញ
          </div>

          {/* Invitation Body */}
          <p
            className="copy-block font-khmer leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg"
            style={{ lineHeight: "2" }}
          >
            ឯកឧត្តម លោកជំទាវ លោកឧកញ៉ា លោក លោកស្រី អ្នកនាងកញ្ញា
            អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយសក្នុង
            ពិធីសិរីមង្គលអាពាហ៍ពិពាហ៍ កូនប្រុស-កូនស្រី របស់យើងខ្ញុំ
          </p>

          {/* The Couple (Khmer) - Keep horizontal layout */}
          <div className="py-3 md:py-8 flex flex-row items-center justify-center gap-2 sm:gap-4 md:gap-8 lg:gap-12 font-khmer-display text-base sm:text-lg md:text-2xl lg:text-4xl">
            <div className="flex flex-col">
              <span
                className="text-[10px] sm:text-xs md:text-sm font-khmer mb-1 md:mb-2"
                style={{ lineHeight: "1.8" }}
              >
                កូនប្រុសនាម
              </span>
              <span style={{ lineHeight: "1.8" }}>ល្មុត ភក្តី</span>
            </div>
            <div
              className="text-xs sm:text-sm md:text-xl font-khmer opacity-80"
              style={{ lineHeight: "1.8" }}
            >
              ជាគូនឹង
            </div>
            <div className="flex flex-col">
              <span
                className="text-[10px] sm:text-xs md:text-sm font-khmer mb-1 md:mb-2"
                style={{ lineHeight: "1.8" }}
              >
                កូនស្រីនាម
              </span>
              <span style={{ lineHeight: "1.8" }}>ស្រន់ ឌីនីន</span>
            </div>
          </div>

          {/* Event Details (Khmer) */}
          <p
            className="font-khmer leading-loose text-xs sm:text-sm md:text-base lg:text-lg"
            style={{ lineHeight: "2" }}
          >
            និងពិសារភោជនាហារដែលនឹងប្រព្រឹត្តទៅនៅ{" "}
            <span className="font-bold">ថ្ងៃសុក្រ ទី២៧ ខែកុម្ភៈ ឆ្នាំ២០២៦</span>
            <br />
            ត្រូវនឹងថ្ងៃ ១១កើត ខែផល្គុន ឆ្នាំម្សាញ់ សប្តស័ក ព.ស ២៥៦៩
            <br />
            <span className="font-bold">វេលាម៉ោង ៥:០០នាទីល្ងាច</span> នៅ{" "}
            <span className="font-bold">គេហដ្ឋានខាងស្រី</span>
            <br />
            ស្ថិតនៅ ភូមិកោះដាច់ សង្កាត់កោះដាច់ ខណ្ឌជ្រោយចង្វារ រាជធានីភ្នំពេញ
            ដោយមេត្រីភាព ។
          </p>
          <p
            className="font-khmer-display text-base sm:text-lg md:text-xl lg:text-2xl mt-2 md:mt-4"
            style={{ lineHeight: "1.8" }}
          >
            សូមអរគុណ!
          </p>
        </div>

        {/* Decorative Divider */}
        <div className="w-full mx-auto h-px bg-amber-300 my-6 md:my-10" />

        {/* English Section (Bottom) */}
        <div className="space-y-3 md:space-y-6 font-eng tracking-wide">
          {/* Parents Grid (English) - Always 2 columns */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-8 uppercase text-[10px] sm:text-xs md:text-sm lg:text-base font-bold">
            <div className="text-center md:text-right">
              <p>MR. LMUT SOMKA</p>
              <p>MRS. SUK SENGTEANG</p>
            </div>
            <div className="text-center md:text-left">
              <p>MR. SET NARITH</p>
              <p>MRS. SIV SITHA</p>
            </div>
          </div>

          {/* Invitation Header (English) */}
          <div className="copy-block text-[10px] sm:text-xs md:text-sm py-3 md:py-4 leading-relaxed">
            REQUEST THE PLEASURE OF YOUR PRESENCE ON THE AUSPICIOUS OCCASION OF
            THE WEDDING OF OUR CHILDREN
          </div>

          {/* The Couple (English) */}
          <div className="font-serif italic text-xl sm:text-2xl md:text-4xl lg:text-6xl py-3 md:py-6 text-[#D4AF37]">
            Lmut Pheakdey <span className="text-base sm:text-lg md:text-2xl align-middle mx-1 md:mx-2">&</span>{" "}
            Srorn Dinin
          </div>

          {/* Event Details (English) */}
          <div className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm leading-loose uppercase font-bold">
            WHICH WILL BE HELD ON FRIDAY 27TH FEBRUARY 2026, AT 5:00 PM
            <br />
            AT THE{" "}
            <span className="text-xs sm:text-sm md:text-base lg:text-lg">BRIDE&apos;S HOUSE</span>
            <br />
            KOH DACH VILLAGE, SANG KAT KOH DACH,
            <br />
            KHAN CHROY CHANGVAR, PHNOM PENH.
          </div>

          <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mt-3 md:mt-6">THANK YOU!</div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-2 left-2 md:top-4 md:left-4 w-8 h-8 md:w-12 md:h-12 border-t-2 border-l-2 border-amber-300 rounded-tl-lg opacity-40" />
        <div className="absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 md:w-12 md:h-12 border-t-2 border-r-2 border-amber-300 rounded-tr-lg opacity-40" />
        <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 w-8 h-8 md:w-12 md:h-12 border-b-2 border-l-2 border-amber-300 rounded-bl-lg opacity-40" />
        <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-8 h-8 md:w-12 md:h-12 border-b-2 border-r-2 border-amber-300 rounded-br-lg opacity-40" />
      </div>
    </section>
  );
}
