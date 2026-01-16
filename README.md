# PastPort Website

Landing page for PastPort - built with React + Next.js.

## 🚀 Quick Start

### Prerequisites

- Node.js
- npm
- Firebase CLI (`npm install -g firebase-tools`)

### Installation

```bash
npm install
```

### Development

Start the local development server with hot reload:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Deploy to Firebase Hosting

1. **Build and deploy:**
   ```bash
   npm run build && firebase deploy --only hosting
   ```

2. **Your site will be live at:** https://pastport-482001.web.app

### Automatic Deployments

GitHub Actions are configured to automatically deploy:
- **On PR:** Creates a preview deployment
- **On merge to main:** Deploys to production

## 📁 Project Structure

```
PastPort-website/
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

## 🛠 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `firebase deploy --only hosting` | Deploy to Firebase |

## 🔗 Links

- **Live Site:** https://pastport.no or https://pastport-482001.web.app
- **Firebase Console:** https://console.firebase.google.com/project/pastport-482001
