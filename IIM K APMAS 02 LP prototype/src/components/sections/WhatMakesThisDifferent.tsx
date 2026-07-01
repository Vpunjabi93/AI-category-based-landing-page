export function WhatMakesThisDifferent() {
  const comparison = [
    { label: "Focus", others: "Strategy & concepts", us: "Strategy + you actually build it" },
    { label: "Length", others: "6 months / 18 weeks", us: "12 months · 120 hours" },
    { label: "Scope", others: "Marketing (or analytics) alone", us: "Marketing + analytics + sales + automation" },
    { label: "Sales & GTM", others: "Rarely included", us: "Dedicated modules (sales analytics, GTM, revenue enablement)" },
    { label: "Tools", others: "A handful", us: "40+ live tools across 18 modules" },
    { label: "You leave with", others: "Notes and frameworks", us: "A built, deployed, automated growth project" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6 uppercase tracking-tight">
            Most programmes teach AI in marketing. This one teaches you to build with it — across marketing, analytics <em className="text-brand-blue">and</em> sales.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Look closely at the options and a pattern appears. Most are shorter and more conceptual: 4–6 months of learning to <em>think about</em> AI and <em>decide with</em> it. Very few hand you the keys and say "now build the whole thing."
            <br/><br/>
            <strong>This one does.</strong>
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="w-1/4 p-6 bg-gray-50 border-b border-gray-200"></th>
                  <th className="w-1/3 p-6 bg-gray-50 text-gray-500 font-semibold border-b border-gray-200 text-lg">Typical AI-marketing certificate</th>
                  <th className="w-5/12 p-6 bg-brand-blue text-white font-bold border-b border-brand-blue text-xl shadow-inner">This programme</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-semibold text-gray-900 bg-gray-50/50">{row.label}</td>
                    <td className="p-6 text-gray-600">{row.others}</td>
                    <td className="p-6 font-bold text-gray-900 bg-brand-purple-light/30">
                      {row.us.split('+').map((part, index) => 
                        index === 0 ? part : <span key={index}><span className="text-brand-blue font-black mx-1">+</span>{part}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Stacked Cards */}
        <div className="md:hidden space-y-6">
          {comparison.map((row, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <div className="p-4 bg-gray-50 border-b border-gray-100 font-bold text-gray-900 text-center">
                {row.label}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-100">
                <div className="p-4 text-center">
                  <div className="text-xs text-gray-500 font-semibold mb-2 uppercase tracking-wider">Others</div>
                  <div className="text-sm text-gray-600">{row.others}</div>
                </div>
                <div className="p-4 text-center bg-brand-purple-light/50">
                  <div className="text-xs text-brand-blue font-bold mb-2 uppercase tracking-wider">This Programme</div>
                  <div className="text-sm font-bold text-gray-900">{row.us}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            By the end, you won't just understand the growth engine. You'll have built one — a website or funnel you deployed, automated, marketed, measured and presented as a Capstone.
          </p>
        </div>
      </div>
    </section>
  );
}
