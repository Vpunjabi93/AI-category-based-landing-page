import { LeadForm } from './LeadForm';

export function Hero() {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-brand-purple-light">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-brand-gradient opacity-10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center lg:items-start justify-between">
          
          {/* Left Column - Copy */}
          <div className="w-full lg:w-7/12 xl:w-3/5 text-center lg:text-left pt-4">
            <span className="inline-block text-brand-blue font-bold tracking-wider uppercase text-sm mb-4">
              Professional Certificate Programme · IIM Kozhikode
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-[1.1] mb-6 uppercase tracking-tight">
              Yesterday's marketers managed campaigns. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-brand-gradient">Tomorrow's marketers build growth systems.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              A 12-month, hands-on IIM Kozhikode programme that turns marketing, sales and business professionals into AI-Powered Growth Professionals — people who don't just <em className="italic font-medium">talk about</em> AI, but build, automate and measure a complete growth engine.
            </p>
            
            <div className="bg-white/60 backdrop-blur-sm border border-brand-blue/10 rounded-xl p-4 inline-flex flex-col sm:flex-row items-center gap-4 shadow-sm mb-8">
              <div className="flex items-center justify-center shrink-0 w-12 h-12 bg-white rounded-lg shadow-sm p-2">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-brand-blue" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor"/></svg>
              </div>
              <div className="text-sm sm:text-base text-gray-800 font-medium text-center sm:text-left">
                <strong>IIM Kozhikode</strong> <span className="mx-1.5 text-gray-400">·</span> Ranked #3 in India (NIRF 2025, Management) <span className="mx-1.5 text-gray-400">·</span> EQUIS & AMBA accredited
              </div>
            </div>

            {/* Mobile CTA (Scrolls to form, hidden on LG) */}
            <div className="lg:hidden mt-2">
              <a 
                href="#enquiry-form" 
                className="inline-flex items-center justify-center w-full sm:w-auto bg-brand-blue text-white font-semibold py-4 px-8 rounded-full hover:bg-brand-blue/90 transition-all shadow-lg shadow-brand-blue/30 text-lg"
              >
                Get the Brochure & Fee Details
              </a>
              <p className="mt-3 text-sm text-gray-600 font-medium">
                Apply for just ₹8,000. 6 easy instalments. <br className="sm:hidden" /> Batch 03 orientation: 08 Nov 2026.
              </p>
            </div>
            
          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-5/12 xl:w-2/5 max-w-md mx-auto lg:mx-0">
            <LeadForm />
          </div>

        </div>
      </div>
    </section>
  );
}
