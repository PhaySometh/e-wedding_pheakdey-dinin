"use client";

export default function InvitationCard() {
  return (
    <section
      id="invitation-card"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F5E6D3] to-[#FFF8DC] py-20 px-6"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto p-8 md:p-12 bg-[#fdfbf7] shadow-2xl border border-amber-200 text-[#b8860b] text-center rounded-lg">
        {/* Khmer Section (Top) */}
        <div className="mb-12 space-y-6">
          <h2
            className="font-khmer-display text-3xl md:text-5xl mb-8"
            style={{ lineHeight: "1.8" }}
          >
            សិរីសួស្តីមង្គលអាពាហ៍ពិពាហ៍
          </h2>

          {/* Parents Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 font-khmer text-lg md:text-xl leading-loose"
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
            className="font-khmer-display text-xl md:text-2xl my-6"
            style={{ lineHeight: "1.8" }}
          >
            មានកិត្តិយសសូមគោរពអញ្ជើញ
          </div>

          {/* Invitation Body */}
          <p
            className="copy-block font-khmer leading-relaxed text-base md:text-lg"
            style={{ lineHeight: "2" }}
          >
            ឯកឧត្តម លោកជំទាវ លោកឧកញ៉ា លោក លោកស្រី អ្នកនាងកញ្ញា
            អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយសក្នុង
            ពិធីសិរីមង្គលអាពាហ៍ពិពាហ៍ កូនប្រុស-កូនស្រី របស់យើងខ្ញុំ
          </p>

          {/* The Couple (Khmer) */}
          <div className="py-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 font-khmer-display text-2xl md:text-4xl">
            <div className="flex flex-col">
              <span
                className="text-sm font-khmer mb-2"
                style={{ lineHeight: "1.8" }}
              >
                កូនប្រុសនាម
              </span>
              <span style={{ lineHeight: "1.8" }}>ល្មុត ភក្តី</span>
            </div>
            <div
              className="text-xl font-khmer opacity-80"
              style={{ lineHeight: "1.8" }}
            >
              ជាគូនឹង
            </div>
            <div className="flex flex-col">
              <span
                className="text-sm font-khmer mb-2"
                style={{ lineHeight: "1.8" }}
              >
                កូនស្រីនាម
              </span>
              <span style={{ lineHeight: "1.8" }}>ស្រន់ ឌីនីន</span>
            </div>
          </div>

          {/* Event Details (Khmer) */}
          <p
            className="font-khmer leading-loose text-base md:text-lg"
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
            className="font-khmer-display text-xl md:text-2xl mt-4"
            style={{ lineHeight: "1.8" }}
          >
            សូមអរគុណ!
          </p>
        </div>

        {/* Decorative Divider */}
        <div className="w-full mx-auto h-px bg-amber-300 my-10" />

        {/* English Section (Bottom) */}
        <div className="space-y-6 font-eng tracking-wide">
          {/* Parents Grid (English) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 uppercase text-sm md:text-base font-bold">
            <div className="text-center md:text-right">
              <p>Mr. LMUT SOMKA</p>
              <p>Mrs. SUK SENGTEANG</p>
            </div>
            <div className="text-center md:text-left">
              <p>Mr. SET NARITH</p>
              <p>Mrs. SIV SITHA</p>
            </div>
          </div>

          {/* Invitation Header (English) */}
          <div className="copy-block text-xs md:text-sm py-4 leading-relaxed">
            REQUEST THE PLEASURE OF YOUR PRESENCE ON THE AUSPICIOUS OCCASION OF
            THE WEDDING OF OUR CHILDREN
          </div>

          {/* The Couple (English) */}
          <div className="font-serif italic text-4xl md:text-6xl py-6 text-[#D4AF37]">
            Lmut Pheakdey <span className="text-2xl align-middle mx-2">&</span>{" "}
            Srorn Dinin
          </div>

          {/* Event Details (English) */}
          <div className="text-xs md:text-sm leading-loose uppercase font-bold">
            WHICH WILL BE HELD ON FRIDAY 27TH FEBRUARY 2026, AT 5:00 PM
            <br />
            AT THE{" "}
            <span className="text-base md:text-lg">BRIDE&apos;S HOUSE</span>
            <br />
            KOH DACH VILLAGE, SANG KAT KOH DACH,
            <br />
            KHAN CHROY CHANGVAR, PHNOM PENH.
          </div>

          <div className="text-lg md:text-xl font-bold mt-6">THANK YOU!</div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-amber-300 rounded-tl-lg opacity-40" />
        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-amber-300 rounded-tr-lg opacity-40" />
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-amber-300 rounded-bl-lg opacity-40" />
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-amber-300 rounded-br-lg opacity-40" />
      </div>
    </section>
  );
}
