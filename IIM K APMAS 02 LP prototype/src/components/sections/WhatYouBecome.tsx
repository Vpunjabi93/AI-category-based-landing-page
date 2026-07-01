export function WhatYouBecome() {
  const framework = [
    { title: "Attract", desc: "generate demand through AI-assisted content, search and campaigns" },
    { title: "Acquire", desc: "turn interest into leads, opportunities and customers" },
    { title: "Activate", desc: "design experiences and journeys that convert" },
    { title: "Automate", desc: "scale execution with AI, workflows and intelligent systems" },
    { title: "Amplify", desc: "use analytics to optimise performance and compound growth" }
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-purple-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6 uppercase tracking-tight">
            Become an AI-Powered Growth Professional.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Not an "AI strategist" who can only describe what should happen. An operator who can make it happen — someone who combines strategic thinking with execution, customer understanding with analytics, and technology with real business outcomes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-center font-bold text-gray-900 mb-8 text-xl">
            You'll learn to move through the full growth stack using one systematic method — the <span className="text-brand-blue">5A Framework</span>:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {framework.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-blue/30 transition-colors flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-brand-purple-light text-brand-blue rounded-xl flex items-center justify-center font-bold text-xl mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
