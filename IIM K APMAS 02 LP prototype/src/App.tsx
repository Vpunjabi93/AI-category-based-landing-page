import { Hero } from './components/Hero';
import { TrustBar } from './components/sections/TrustBar';
import { TheShift } from './components/sections/TheShift';
import { WhatYouBecome } from './components/sections/WhatYouBecome';
import { WhatMakesThisDifferent } from './components/sections/WhatMakesThisDifferent';
import { ProgrammeAtAGlance } from './components/sections/ProgrammeAtAGlance';
import { WhoThisIsFor } from './components/sections/WhoThisIsFor';
import { WhatYouLearn } from './components/sections/WhatYouLearn';
import { CredentialFaculty } from './components/sections/CredentialFaculty';
import { ImmersionGallery } from './components/sections/ImmersionGallery';
import { FeeInstalments } from './components/sections/FeeInstalments';
import { AdmissionDates } from './components/sections/AdmissionDates';
import { FAQ } from './components/sections/FAQ';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-brand-blue/20">
      <main>
        <Hero />
        <TrustBar />
        <TheShift />
        <WhatYouBecome />
        <WhatMakesThisDifferent />
        <ProgrammeAtAGlance />
        <WhoThisIsFor />
        <WhatYouLearn />
        <CredentialFaculty />
        <ImmersionGallery />
        <FeeInstalments />
        <AdmissionDates />
        <FAQ />
        <FinalCTA />
      </main>
      
      <Footer />
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] lg:hidden z-50">
        <a 
          href="#enquiry-form" 
          className="block w-full text-center bg-brand-blue text-white font-semibold py-3 px-6 rounded-full hover:bg-brand-blue/90 transition-colors shadow-lg shadow-brand-blue/30"
        >
          Get the Brochure
        </a>
      </div>
    </div>
  )
}

export default App;
