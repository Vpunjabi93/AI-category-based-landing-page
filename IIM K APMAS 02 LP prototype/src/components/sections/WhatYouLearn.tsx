export function WhatYouLearn() {
  const modules = [
    { title: "Foundations & strategy", desc: "AI-native digital marketing, full-funnel and OPE strategy, AI-assisted KPI and campaign planning" },
    { title: "AI fundamentals & research", desc: "prompt engineering, responsible AI, AI-powered market and consumer research" },
    { title: "Design, build & deploy", desc: "AI design thinking, prompt-based websites and funnels, hosting, deployment and cloud basics" },
    { title: "Data & backend", desc: "databases, data capture, APIs, webhooks and no-code/low-code backends for marketers" },
    { title: "Acquisition", desc: "AI SEO, SEM and search strategy; content marketing and storytelling; social, influencer and community" },
    { title: "Lifecycle & automation", desc: "email and lifecycle journeys; end-to-end marketing automation and AI agents (MCP-enabled workflows)" },
    { title: "Analytics & intelligence", desc: "web and product analytics, customer analytics, marketing and campaign intelligence, consumer behaviour and neuromarketing" },
    { title: "Sales, revenue & GTM", desc: "sales analytics, lead scoring, revenue enablement and go-to-market strategy" },
    { title: "Capstone", desc: "build a website/funnel, deploy it, automate the workflows, market it, capture data, analyse performance and present your recommendations", highlight: true },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4 uppercase tracking-tight">
            18 modules. One complete growth engine. Built by you.
          </h2>
          <p className="text-lg text-gray-700">
            From strategy to deployment to measurement — the full stack, hands-on:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {modules.map((mod, i) => (
            <div key={i} className={`p-6 rounded-2xl border ${mod.highlight ? 'bg-brand-purple-light/50 border-brand-purple-dark text-gray-900 shadow-sm' : 'bg-white border-gray-200'}`}>
              <h3 className="font-bold text-lg mb-2 flex items-center">
                <span className="w-6 h-6 rounded bg-gray-100 text-gray-500 text-xs flex items-center justify-center mr-3 shrink-0">
                  {i + 1}
                </span>
                {mod.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed ml-9">{mod.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 mb-10 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-3 text-lg">Tools you'll actually use:</h3>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Claude, ChatGPT, Gemini, Perplexity, n8n, Make, Zapier, Firebase, Supabase, Airtable, GA4, Google Tag Manager, Power BI, PostHog, Mixpanel, ahrefs, and 25+ more — every one either free, free-tier, or provided through the programme's Claude access.
          </p>
        </div>

        <div className="text-center">
          <a href="#enquiry-form" className="inline-flex items-center justify-center font-semibold text-brand-blue hover:text-brand-blue/80 transition-colors group text-lg">
            See the Full Module List in the Brochure
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
