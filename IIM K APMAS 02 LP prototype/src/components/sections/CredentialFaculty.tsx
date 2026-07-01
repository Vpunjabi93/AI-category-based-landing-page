export function CredentialFaculty() {
  const faculty = [
    {
      name: "Prof. M. Geetha",
      quals: "Ph.D (IIT Madras) — Associate Professor, Marketing.",
      desc: "Research in consumer behaviour, retailing and branding; published in the European Journal of Marketing, Journal of Retailing and Consumer Services and more.",
      img: "/faculty/geetha.jpg"
    },
    {
      name: "Dr Sreejesh S",
      quals: "Ph.D, M.Phil., MBA — Assistant Professor, Marketing.",
      desc: "Research in brand management, services and online marketing; published in leading journals and author with Pearson India and Springer.",
      img: "/faculty/sreejesh.jpg"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Credential */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6 uppercase tracking-tight">
            An IIM Kozhikode certificate — a signal of future-readiness, not a completion badge.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Complete the programme and earn a Professional Certificate from the <strong>Indian Institute of Management Kozhikode</strong> — ranked <strong>#3 in India</strong> (NIRF 2025, Management, three years running), <strong>#65 in the FT Global MBA Rankings 2026</strong>, and accredited by <strong>EQUIS (EFMD)</strong> and <strong>AMBA (UK)</strong>.
          </p>
        </div>

        {/* Faculty */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Learn from IIMK marketing faculty:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faculty.map((prof, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-6 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl bg-gray-200 overflow-hidden shrink-0 border border-gray-300">
                  {/* Placeholder for headshots */}
                  <img src={`/assets${prof.img}`} alt={prof.name} className="w-full h-full object-cover text-[10px] text-gray-400 flex items-center justify-center bg-gray-200" onError={(e) => {
                    e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3C/svg%3E`;
                  }} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">{prof.name}</h4>
                  <p className="text-sm font-medium text-brand-blue mb-3">{prof.quals}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{prof.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
