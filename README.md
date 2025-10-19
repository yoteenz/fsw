# Lobby Landing Page

A standalone React + Vite + TypeScript + Tailwind CSS project for the lobby landing page.

## Features

- Mobile-first responsive design
- Neon-themed UI elements
- Product display shelves
- Interactive navigation elements
- Optimized for mobile devices

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

## Project Structure

```
lobby-standalone/
├── public/
│   ├── assets/          # Image assets
│   └── index.html       # HTML template
├── src/
│   ├── App.tsx          # Main component
│   ├── main.tsx         # React entry point
│   └── index.css        # Global styles
├── package.json         # Dependencies
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## Assets

All required assets are included in the `public/assets/` directory:
- Background images
- Neon UI elements
- Product display images
- Icons and navigation elements
