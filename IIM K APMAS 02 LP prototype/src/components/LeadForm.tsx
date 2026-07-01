import { useState, type FormEvent } from 'react';

export function LeadForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const endpoint = import.meta.env.VITE_FORM_ENDPOINT;
      
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error('Form submission failed');
        }
      } else {
        // Simulate network request if no endpoint configured
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Form data:', data);
      }

      // Handle successful submission
      setStatus('success');
      
      // Fire tracking events
      if (typeof window !== 'undefined') {
        // GA4
        // @ts-ignore
        if (window.gtag) {
          // @ts-ignore
          window.gtag('event', 'generate_lead', {
            event_category: 'engagement',
            event_label: 'brochure_form'
          });
        }
        
        // Meta Pixel
        // @ts-ignore
        if (window.fbq) {
          // @ts-ignore
          window.fbq('track', 'Lead');
        }

        // Google Ads
        // @ts-ignore
        if (window.gtag && import.meta.env.VITE_GADS_ID) {
          // @ts-ignore
          window.gtag('event', 'conversion', {
            'send_to': `${import.meta.env.VITE_GADS_ID}/${import.meta.env.VITE_GADS_LABEL}`
          });
        }
      }

    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thanks — your brochure is on its way</h3>
        <p className="text-gray-600">and a counsellor will reach out shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100" id="enquiry-form">
      <div className="mb-6">
        <h3 className="text-2xl font-bold font-display tracking-tight text-gray-900 mb-2">Get the Brochure & Fee Details</h3>
        <p className="text-sm text-gray-600">Join professionals from IT, FMCG, BFSI, Manufacturing and more who've taken the first step.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors"
            placeholder="john@company.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            required 
            inputMode="numeric"
            pattern="[\+]?[0-9\s-]{10,15}"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors"
            placeholder="+91 9876543210"
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
          <input 
            type="text" 
            id="city" 
            name="city" 
            required 
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors"
            placeholder="Mumbai"
          />
        </div>

        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
          <select 
            id="experience" 
            name="experience" 
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors bg-white"
          >
            <option value="" disabled selected>Select experience</option>
            <option value="0-2">0–2 years</option>
            <option value="3-5">3–5 years</option>
            <option value="6-10">6–10 years</option>
            <option value="11-15">11–15 years</option>
            <option value="16-20">16–20 years</option>
            <option value="20+">20+ years</option>
          </select>
        </div>

        {status === 'error' && (
          <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
            {errorMessage}
          </div>
        )}

        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className="w-full bg-brand-blue text-white font-semibold py-4 px-6 rounded-full hover:bg-brand-blue/90 transition-all shadow-lg shadow-brand-blue/30 disabled:opacity-70 flex items-center justify-center min-h-[56px] mt-2"
        >
          {status === 'submitting' ? 'Submitting...' : 'Get the Brochure'}
        </button>
      </form>

      <p className="mt-4 text-xs text-gray-500 text-center leading-relaxed">
        We respect your privacy. Your details are used only to send the brochure and arrange a counsellor call.
      </p>
    </div>
  );
}
