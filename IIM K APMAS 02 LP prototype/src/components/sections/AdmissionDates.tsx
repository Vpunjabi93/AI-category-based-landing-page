export function AdmissionDates() {
  const steps = [
    { title: "Apply", desc: "submit your application with the ₹8,000 registration fee" },
    { title: "Get your offer", desc: "eligibility confirmed against your qualification and experience" },
    { title: "Enrol", desc: "pay your first instalment within a week and join Batch 03" }
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-purple-light/30 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4 uppercase tracking-tight">
            Batch 03 is open. Orientation begins <span className="text-brand-blue">08 Nov 2026</span>.
          </h2>
        </div>

        <div className="max-w-5xl mx-auto mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-brand-blue/10 shadow-sm relative text-center flex flex-col items-center">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-blue text-white font-bold flex items-center justify-center border-4 border-white">
                  {i + 1}
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3 mt-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center bg-yellow-50 text-yellow-800 p-4 rounded-xl border border-yellow-200">
          <p className="font-medium">
            Seats and cohort quality are finite, and the instalment calendar is fixed to the batch. Applying early keeps your options open.
          </p>
        </div>
      </div>
    </section>
  );
}
