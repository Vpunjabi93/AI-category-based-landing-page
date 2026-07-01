export function ProgrammeAtAGlance() {
  const specs = [
    { label: "Duration", value: "12 months · 120 hours" },
    { label: "Schedule", value: "Live online · Saturdays, 6:45–9:45 pm · 3 hours/week" },
    { label: "Immersion", value: "2-day campus immersion at IIM Kozhikode" },
    { label: "Format", value: "18 modules · 40+ AI tools · Capstone project" },
    { label: "Fee", value: "₹2,45,000 + GST · from ₹8,000 to apply · 6 instalments" },
    { label: "Eligibility", value: "Graduate + 2 yrs in Marketing/Sales or 5 yrs in a managerial role" },
    { label: "Batch", value: "03 · Orientation 08 Nov 2026" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-10 text-center uppercase tracking-tight">
          Programme at a Glance
        </h2>

        <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden mb-10">
          <ul className="divide-y divide-gray-100">
            {specs.map((item, i) => (
              <li key={i} className="flex flex-col sm:flex-row p-4 sm:p-6 hover:bg-gray-50 transition-colors">
                <div className="sm:w-1/3 font-bold text-gray-900 mb-1 sm:mb-0 uppercase text-sm tracking-wider flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mr-3 hidden sm:block"></span>
                  {item.label}
                </div>
                <div className="sm:w-2/3 text-gray-700 font-medium">{item.value}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <a href="#enquiry-form" className="inline-flex items-center justify-center font-semibold text-brand-blue hover:text-brand-blue/80 transition-colors group">
            Get the Full Brochure 
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
