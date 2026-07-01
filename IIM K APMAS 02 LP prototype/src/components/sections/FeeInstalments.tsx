export function FeeInstalments() {
  const schedule = [
    { stage: "Registration (application)", amount: "₹8,000", when: "At registration" },
    { stage: "Instalment 1", amount: "₹37,000", when: "Within a week of your offer" },
    { stage: "Instalment 2", amount: "₹50,000", when: "06 Dec 2026" },
    { stage: "Instalment 3", amount: "₹50,000", when: "06 Feb 2027" },
    { stage: "Instalment 4", amount: "₹50,000", when: "06 Apr 2027" },
    { stage: "Instalment 5", amount: "₹50,000", when: "06 Jun 2027" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6 uppercase tracking-tight">
            A capability, not a course. Paid in steps that fit a working professional.
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed">
            <strong>Total: ₹2,45,000 + GST.</strong> You start with just <strong>₹8,000</strong> to apply, then spread the rest across five instalments through the programme.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          {/* Desktop Table */}
          <div className="hidden md:block bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-4 sm:p-6 text-gray-500 font-semibold uppercase tracking-wider text-sm">Stage</th>
                  <th className="p-4 sm:p-6 text-gray-900 font-bold uppercase tracking-wider text-sm">Amount</th>
                  <th className="p-4 sm:p-6 text-gray-500 font-semibold uppercase tracking-wider text-sm">When</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {schedule.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 sm:p-6 font-medium text-gray-900">{row.stage}</td>
                    <td className="p-4 sm:p-6 font-bold text-brand-blue">{row.amount}</td>
                    <td className="p-4 sm:p-6 text-gray-600">{row.when}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Cards */}
          <div className="md:hidden space-y-4">
            {schedule.map((row, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex justify-between items-center">
                <div>
                  <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">{row.when}</div>
                  <div className="font-bold text-gray-900">{row.stage}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-brand-blue text-lg">{row.amount}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Yes, it costs more than a short strategy course. It also gives you three times the hours, a scope that spans marketing, analytics <em className="italic">and</em> sales, a real 2-day campus immersion, and a built project you can show — not just notes you'll forget.
          </p>
          
          <a href="#enquiry-form" className="inline-flex items-center justify-center font-semibold text-brand-blue hover:text-brand-blue/80 transition-colors group text-lg">
            Get Fee Details & Speak to a Counsellor 
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
