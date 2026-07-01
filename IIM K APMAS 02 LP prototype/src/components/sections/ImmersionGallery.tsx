import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export function ImmersionGallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // We'll use placeholders that the user will replace with actual images
  const images = [
    { src: "/assets/immersion/photo-1.jpg", alt: "Participants in session at IIM Kozhikode campus" },
    { src: "/assets/immersion/photo-2.jpg", alt: "Campus walkways at IIM Kozhikode" },
    { src: "/assets/immersion/photo-3.jpg", alt: "Group discussions during campus immersion" },
    { src: "/assets/immersion/photo-4.jpg", alt: "Classroom learning experience" },
    { src: "/assets/immersion/photo-5.jpg", alt: "Faculty interaction" },
    { src: "/assets/immersion/photo-6.jpg", alt: "Networking on campus" }
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-purple-dark text-white border-y-4 border-brand-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase tracking-tight">
            Where the cohort becomes a network.
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            The most valuable professional relationships are built through shared learning. Over two days on the IIM Kozhikode campus, discussions turn into collaborations, ideas turn into opportunities, and classmates turn into a long-term professional network.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div 
              key={i} 
              className="relative aspect-video bg-white/10 rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                onError={(e) => {
                  e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 24 24' fill='none' stroke='%234b5563' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'/%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'/%3E%3Cpolyline points='21 15 16 10 5 21'/%3E%3C/svg%3E`;
                }}
              />
              <div className="absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg className="w-8 h-8 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-white/50 mt-6">Campus immersion · IIM Kozhikode</p>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={images.map(img => ({ src: img.src }))}
        />
      </div>
    </section>
  );
}
