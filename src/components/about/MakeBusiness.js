"use client";
import BadgeBlue from "../common/BadgeBlue";

const content = [
  {
    title: "Discover & Strategy",
    number: "1",
    text: "Uncover insights, craft vision—we turn discovery into actionable strategy for measurable growth.",
    isHighlighted: false,
  },
  {
    title: "Customer Service",
    number: "2",
    text: "Friendly, fast, and solution-focused—we turn every customer interaction into a positive, lasting experience.",
    isHighlighted: true,
  },
  {
    title: "Back Office Support",
    number: "3",
    text: "Streamlined, reliable back-office solutions—freeing your team to focus on growth and customer success.",
    isHighlighted: false,
  },
  {
    title: "Trust and Safety",
    number: "4",
    text: "Protecting users, ensuring integrity—we build secure environments where trust and safety come first.",
    isHighlighted: false,
  },
  {
    title: "Compliance and Fraud",
    number: "5",
    text: "Preventing fraud, ensuring compliance—we protect your business with smart safeguards and airtight protocols.",
    isHighlighted: true,
  },
  {
    title: "Quality Assurance",
    number: "6",
    text: "Precision testing, flawless results—we ensure excellence at every stage so your product performs perfectly.",
    isHighlighted: false,
  },
];

export default function MakeBusiness() {
  return (
    <div>
      {/* Make Business Section */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <BadgeBlue className="mx-auto">We've got your back</BadgeBlue>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Make your business <br />
              better with Aceworks
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {content.map((item, idx) => (
              <div key={idx} className="group">
                <div
                  className={`p-8 rounded-2xl shadow-md border border-[#F1F2F9] h-full ${
                    item.isHighlighted
                      ? "bg-[#2B5A8C] text-white"
                      : "bg-white text-primary"
                  }`}
                >
                  {/* Number Badge */}
                  <div
                    className={`inline-flex items-center justify-center w-10 h-8 rounded-full text-sm font-medium mb-4 ${
                      item.isHighlighted
                        ? "bg-white/20 text-white"
                        : "bg-orange-500 text-white"
                    }`}
                  >
                    {item.number}
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-medium mb-3">{item.title}</h4>

                  {/* Description */}
                  <p
                    className={`text-sm md:text-base leading-relaxed ${
                      item.isHighlighted ? "text-white" : "text-description"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="inline-flex items-center gap-2 bg-secondary text-white text-base font-bold px-8 py-4 rounded-full">
              See All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
