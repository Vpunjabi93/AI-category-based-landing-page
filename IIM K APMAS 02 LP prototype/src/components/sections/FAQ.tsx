export function FAQ() {
  const faqs = [
    {
      q: "Do I have time for this alongside a full-time job?",
      a: "It's built for one: 3 hours a week, Saturday evenings, live online, over 12 months. Steady and additive — not a sprint that wrecks your quarter."
    },
    {
      q: "Will an online certificate actually carry weight?",
      a: "This is a live, cohort-based IIM Kozhikode programme with faculty-led sessions, a 2-day campus immersion and a graded Capstone — not passive recorded content. The credential is from a top-3 (NIRF 2025) institute."
    },
    {
      q: "I'm in sales, not marketing. Is this too marketing-heavy?",
      a: "No. Dedicated modules cover sales analytics, lead scoring, revenue enablement and go-to-market. Integrating sales with marketing and analytics is the whole point."
    },
    {
      q: "Another IIM has a cheaper AI-marketing course. Why this one?",
      a: "Those typically teach you to think strategically about AI in 4–6 months. This is 12 months and 120 hours of actually building, deploying and automating a growth engine — and it includes sales and GTM, not just marketing. Different depth, different outcome."
    },
    {
      q: "Will the tools be outdated by the time I finish?",
      a: "You learn tool-agnostic frameworks (5A, full-funnel, GTM) taught through a current, faculty-updated stack — so you learn to choose and route tools, not memorise one that changes next quarter."
    },
    {
      q: "Am I eligible?",
      a: "You need a graduate degree plus either 2 years in a marketing/sales function or 5 years in a managerial role. Not sure how your profile fits? Ask a counsellor when you enquire."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-10 text-center uppercase tracking-tight">
          FAQ
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-white rounded-xl border border-gray-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-gray-900 font-bold text-lg">
                <span>{faq.q}</span>
                <span className="shrink-0 rounded-full bg-white sm:p-3">
                  <svg className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed text-base border-t border-gray-100 pt-4">
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
