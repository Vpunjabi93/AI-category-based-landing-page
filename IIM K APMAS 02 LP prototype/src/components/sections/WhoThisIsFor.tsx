export function WhoThisIsFor() {
  const audience = [
    {
      title: "Marketing professionals",
      desc: "ready to move from managing campaigns to building AI-powered growth systems"
    },
    {
      title: "Sales & revenue professionals",
      desc: "who want to own customer intelligence, GTM and revenue growth — not just the pipeline"
    },
    {
      title: "Business managers",
      desc: "accountable for performance and outcomes"
    },
    {
      title: "Founders & entrepreneurs",
      desc: "who need to run growth lean, with AI and automation doing the heavy lifting"
    },
    {
      title: "Professionals future-proofing",
      desc: "for data- and AI-driven business environments"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6 uppercase tracking-tight">
            Built for professionals who plan to lead growth, not watch it happen.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {audience.map((item, i) => (
            <div key={i} className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-blue/30 hover:shadow-md transition-all">
              <div className="mt-1 flex-shrink-0 w-8 h-8 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mr-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl bg-brand-purple-light/50 border border-brand-purple-light rounded-xl p-6 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-blue"></div>
          <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed">
            <strong className="not-italic text-gray-900">You'll fit right in:</strong> in a recent cohort, 6 in 10 participants had 10–20 years of experience, across IT, Manufacturing, Services & Telecom, Healthcare, FMCG and BFSI.
          </p>
        </div>
      </div>
    </section>
  );
}
