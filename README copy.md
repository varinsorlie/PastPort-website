# PastPort – Next.js Landing Page

A modern, SEO-optimized landing page for **PastPort** (mobile app) and **PastHive** (knowledge platform).

## ✨ Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **Mobile-first design** with horizontally scrollable cards
- **SEO optimized** with:
  - Comprehensive meta tags
  - Open Graph & Twitter Cards
  - JSON-LD structured data (Organization, SoftwareApplication, WebSite)
  - Dynamic sitemap.xml
  - robots.txt
- **Performance optimized** with Next.js Image component
- **Accessible** navigation with mobile hamburger menu

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles + Tailwind
│   ├── layout.tsx       # Root layout + SEO metadata
│   ├── page.tsx         # Home page
│   ├── sitemap.ts       # Dynamic sitemap generation
│   └── robots.ts        # Robots.txt configuration
├── components/
│   ├── Header.tsx       # Fixed navigation
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About/intro section
│   ├── Features.tsx     # App features (scrollable cards)
│   ├── Platform.tsx     # PastHive platform section
│   ├── Team.tsx         # Team members (scrollable cards)
│   ├── CTA.tsx          # Call to action
│   └── Footer.tsx       # Footer
public/
├── images/              # Static images
│   ├── team/            # Team member photos
│   └── ...
├── favicon.svg          # Site favicon
└── manifest.json        # PWA manifest
```

## 🎨 Design Changes from Original

1. **Shorter, punchier text** - Reduced content for better mobile experience
2. **Horizontally scrollable cards** on mobile for Features and Team sections
3. **Improved visual hierarchy** with consistent spacing and typography
4. **Enhanced hover effects** and micro-interactions
5. **Mobile hamburger menu** for navigation

## 🔍 SEO Features

- **Meta tags**: Title, description, keywords, authors
- **Open Graph**: Full social sharing support
- **Twitter Cards**: Large image cards
- **JSON-LD Structured Data**:
  - Organization schema
  - SoftwareApplication schema (for the app)
  - WebSite schema with search action
- **Automatic sitemap.xml** generation
- **Configurable robots.txt**

## 🛠️ Development

```bash
# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```

## 📦 Deployment

The site is ready for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **Firebase Hosting**
- Any Node.js hosting

### Vercel Deployment

```bash
npm i -g vercel
vercel
```

## 📄 License

© 2026 PastPort. All rights reserved.
