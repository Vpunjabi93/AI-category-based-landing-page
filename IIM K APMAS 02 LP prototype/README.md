# IIM Kozhikode: AI Powered Marketing, Analytics & Sales — Landing Page

This is the prototype landing page built with React, TypeScript, Vite, and Tailwind CSS.

## Features
- **High-conversion UI:** Optimised for Form Fill Rate and Mobile UI.
- **Fast:** Lightweight framework, lazy-loaded images.
- **Form:** 5-field enquiry form with client-side validation and simulated/actual POST request.
- **SEO Ready:** Open Graph tags, FAQ JSON-LD, and semantic HTML built-in.
- **Tracking Ready:** Hooks in place for GA4, Meta Pixel, Google Ads, and VWO.

## Setup & Running

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run locally:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready static files will be in the `dist/` directory.

## Assets
Please drop the required assets into the `public/assets/` folder (or `src/assets/` if imported):
- `logos/` — `iimk.svg/png`, `equis.png`, `amba.png`
- `immersion/` — 4–6 real campus-immersion photos for Section 7B
- `faculty/` — `geetha.jpg`, `sreejesh.jpg`
- `hero/` — a hero visual (the AI-tiles/hand image or an abstract gradient)

## Environment Variables
Copy `.env.example` to `.env.local` and populate the fields to activate tracking and form submission.

- `VITE_FORM_ENDPOINT` - The webhook or API endpoint for the form submit (e.g. Zapier, Make, custom CRM webhook).
- `VITE_GA4_ID` - Google Analytics 4 Measurement ID.
- `VITE_META_PIXEL_ID` - Meta Pixel ID.
- `VITE_GADS_ID` - Google Ads Conversion ID.
- `VITE_GADS_LABEL` - Google Ads Conversion Label.
- `VITE_VWO_ID` - VWO Account ID.

## Deployment
This is a standard Vite SPA. It can be deployed directly to:
- **Netlify / Cloudflare Pages / Vercel:** Connect the repository and set the build command to `npm run build` and publish directory to `dist`.
- **GitHub Pages:** Create a deploy action using `npm run build` and deploying the `dist` folder.
