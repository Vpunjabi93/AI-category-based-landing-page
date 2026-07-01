export function TrustBar() {
  const items = [
    <><strong>#3 in India</strong> — NIRF 2025, Management (3 years running)</>,
    <><strong>#65 globally</strong> — FT Global MBA Rankings 2026</>,
    <><strong>EQUIS (EFMD) + AMBA (UK)</strong> accredited</>,
    <><strong>40+ live AI tools</strong></>,
    <><strong>18 modules + Capstone</strong></>
  ];

  return (
    <section className="bg-brand-purple-dark text-white py-6 sm:py-8 border-t-4 border-brand-blue relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-center sm:text-left text-sm sm:text-base font-medium">
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              <span>{item}</span>
              {index < items.length - 1 && (
                <span className="hidden sm:inline-block ml-6 text-white/30">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
