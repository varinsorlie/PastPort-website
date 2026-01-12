# PastPort Website

Landing page for PastPort - built with React + Vite.

## 🚀 Quick Start

### Prerequisites

- Node.js (v20.19+ or v22.12+)
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

Open http://localhost:5173 in your browser.

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
├── src/
│   ├── components/     # React components
│   ├── assets/         # Images and static assets
│   ├── App.jsx         # Main App component
│   ├── App.css         # App styles
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static files
├── dist/               # Production build (generated)
├── firebase.json       # Firebase Hosting config
├── .firebaserc         # Firebase project settings
└── vite.config.js      # Vite configuration
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

- **Live Site:** https://pastport-482001.web.app
- **Firebase Console:** https://console.firebase.google.com/project/pastport-482001
