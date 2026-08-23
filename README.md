# KITADEMO: VANGUARD — Commercial Fit-Out & Renovation Contractors Template

A production-grade, high-conversion commercial fit-out landing page architecture engineered by **[KitaBuild LLP](https://kitabuild.com/)**. 

Designed as a capability showcase archetype for **Vanguard CIDB Grade G4 Commercial Contractors** operating across Sabah and East Malaysia, specializing in fast-track mall fit-outs, F&B outlets, and corporate headquarters.

---

## 🌟 Key Highlights & UX Architecture

- **Unified Master Header**: Streamlined single-navbar design featuring live status pulse indicator, `KITADEMO` / `VANGUARD` brand identity, quick section jumps (`SERVICES`, `PORTFOLIO`, `CREDENTIALS`), interactive `✦ TECH BLUEPRINT` drawer modal trigger, and high-contrast `SUBMIT RFP` CTA button.
- **Cinematic Video Hero**: Ambient background video reel showcasing commercial construction with zero layout shift, credential badging, and immediate dual CTAs.
- **Quantitative Proof Matrix**: High-visibility executive metrics (150,000+ SQFT delivered, 100% on-time completion, RM 3.0M single-contract capability, full statutory authority clearance).
- **Commercial Case Studies**: Structured breakdown of commercial projects highlighting night-shift execution, square footage, scope of work, and city locations.
- **Verified Operational Footage**: Dual-reel video showcase illustrating mall fit-out night-shift compliance, scaffolding safety, and on-site engineering consultations.
- **Compliance & Credentialing**: CIDB Malaysia (B04, B24, CE21), RM 5.0M Contractor's All Risks (CAR) insurance protection, and downloadable corporate profile.
- **Interactive RFP Intake Simulator**: 6-field commercial project intake funnel with preliminary BOQ calculation state simulation.
- **Interactive Tech Blueprint Modal**: Slide-over drawer detailing frontend stack performance, UX conversion strategy, and localized construction standards.
- **KitaBuild Engineering Signature**: Comprehensive agency attribution with performance metrics and direct contact badges (Email, WhatsApp, Website).

---

## 🛠️ Technology Stack & Zero-Bloat Philosophy

Built with a **zero-framework bloat** approach to achieve near-instant First Contentful Paint (<0.6s) and maximum Lighthouse scores:

- **Markup**: Semantic HTML5 with strict heading hierarchy and ARIA accessibility roles.
- **Styling**: Vanilla CSS3 Custom Properties (Design Tokens), Flexbox, and CSS Grid layouts. No heavy CSS utility frameworks required.
- **Motion & Smooth Scroll**:
  - [Lenis](https://github.com/darkroomengineering/lenis) for physics-based inertial scrolling.
  - [GSAP](https://greensock.com/gsap/) (GreenSock) + `ScrollTrigger` for choreography, split-line masked reveals, and image parallax.
  - Complete `prefers-reduced-motion` safety support.
- **Tooling & Bundling**: [Vite](https://vitejs.dev/) for instant HMR and optimized production asset minification.

---

## 🚀 Quick Start & Development

### 1. Clone the Repository
```bash
git clone https://github.com/yck30/KitaDemo-Construction.git
cd KitaDemo-Construction
```

### 2. Install Dependencies
```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install
```

### 3. Run Local Development Server
```bash
pnpm dev
# or: npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
pnpm build
# or: npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 5. Preview Production Build
```bash
pnpm preview
# or: npm run preview
```

---

## 📁 Project Structure

```text
Template-Construction-And-Renovation-Contractors/
├── index.html              # Main HTML document with semantic structure & modal
├── public/                 # Static assets
│   ├── footage/            # High-definition video clips (Hero & Operational reels)
│   │   ├── 14055246-uhd_3840_2160_25fps.mp4
│   │   ├── 14791456_2160_3840_30fps.mp4
│   │   └── 7817213-hd_1080_1920_25fps.mp4
│   └── img/                # Optimized project photography & case study images
│       ├── fnb_fitout.jpg
│       ├── hero_commercial.jpg
│       └── hq_office_fitout.jpg
├── src/
│   ├── main.js             # GSAP choreography, Lenis smooth scroll, modal & RFP handlers
│   └── style.css           # Vanilla CSS design tokens, components & responsive queries
├── package.json            # Node.js scripts and dependencies
├── README.md               # Project documentation
└── vite.config.js          # Vite build configuration (if customized)
```

---

## 🎨 Customization Guide

### 1. Brand Tokens & Colors
All design tokens are centralized in `:root` inside [`src/style.css`](file:///src/style.css):
```css
:root {
  --accent: #ea580c;        /* Primary brand orange */
  --accent-hover: #c2410c;  /* Button hover state */
  --bg-dark: #0f172a;       /* Dark slate background */
  --emerald: #10b981;       /* Live pulse & verification green */
  --sans: "Inter", sans-serif;
  --mono: "JetBrains Mono", monospace;
}
```

### 2. Swapping Imagery & Videos
- Replace video files in `public/footage/` keeping the filenames or updating `<video><source src="..." /></video>` paths in `index.html`.
- Replace images in `public/img/` for case study cards and background posters.

### 3. Modifying Contact & RFP Details
- Update the action target and contact numbers in the RFP section in `index.html`.
- Update agency links in the attribution signature section.

---

## 📄 License & Attribution

Crafted with precision by **[KitaBuild LLP](https://kitabuild.com/)**. 
Demonstration archetype created for commercial fit-out contractors and Malaysian enterprise web platforms.
