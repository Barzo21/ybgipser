You are a senior frontend engineer and UI/UX designer.

Build a modern, production-ready **one-page electrician website** using **Nuxt 3 + Nuxt UI** that can be easily deployed on Vercel.

### Core Requirements:
- Framework: Nuxt 3
- UI Library: Nuxt UI
- Styling: TailwindCSS (via Nuxt UI)
- Language: German (ALL texts must be in German)
- Architecture: Clean, scalable, component-based
- SEO-friendly structure
- Ready for Vercel deployment

---

### 🎯 Concept:
This is a **modern electrician website** with a strong visual identity based on:
- **Electric wires**
- **Energy flow animations**
- Subtle glowing effects (like electricity running through cables)

Design should feel:
- Minimal
- Premium
- Technical
- Smooth and animated

---

### 🧠 Layout (One Page with Infinite Scroll Feel):

Create smooth scrolling between sections (like infinite flow):

1. **Hero Section**
   - Strong headline (German)
   - Subheadline
   - CTA button (e.g. "Kontakt aufnehmen")
   - Animated wires in background (SVG or canvas)
   - Subtle glowing electric flow animation

2. **Über uns (Who we are)**
   - Short introduction text in German
   - Image or illustration
   - Clean card layout

3. **Unsere Leistungen (What we do)**
   - Grid of services:
     - Elektroinstallation
     - Wartung
     - Smart Home
     - Reparaturen
   - Icons (use Nuxt UI icons or Heroicons)
   - Hover animations

4. **Warum wir?**
   - 3–4 highlight points
   - With animated elements (fade-in, slide-up)

5. **Kontakt Section**
   - Placeholder for:
     - Telefonnummer
     - Adresse
     - Email
   - Simple form UI (non-functional is OK)
   - CTA emphasis

6. **Footer**
   - Minimal
   - Social links placeholders
   - Legal links (Impressum / Datenschutz)

---

### ⚡ Animations (IMPORTANT):
- Use:
  - Framer Motion (if compatible) OR
  - VueUse Motion OR
  - CSS animations

Include:
- Smooth scroll transitions
- Fade-in on scroll
- Wire animation:
  - SVG lines that animate like electricity flowing
  - Pulsing glow effect
- Hover micro-interactions

---

### 🎨 Design System:
- Colors:
  - Dark background (#0f172a or similar)
  - Electric blue / neon accents
  - Soft gradients
- Typography:
  - Modern sans-serif
- Spacing:
  - Clean and breathable

---

### 🧱 Components:
Structure the project into reusable components:
- HeroSection.vue
- AboutSection.vue
- ServicesSection.vue
- FeaturesSection.vue
- ContactSection.vue
- Footer.vue
- AnimatedWire.vue (IMPORTANT)

---

### ⚙️ Technical Requirements:
- Use `<script setup>`
- Use composables if needed
- Lazy loading where possible
- Clean folder structure
- No unnecessary dependencies

---

### 🚀 Deployment:
Ensure the project:
- Runs with `npm install && npm run dev`
- Works with `npm run build`
- Is fully compatible with **Vercel deployment**

---

### 📌 Extra:
- Use placeholder German text but realistic
- Make it visually impressive
- Focus on smooth UX and animation quality
- No lorem ipsum — real German content

---

Output:
- Full project structure
- All necessary files
- Key components with code
- Brief explanation of how to run & deploy
