# Wetterstation V2.0

A modern weather application with AI-powered weather insights and analysis.

## Features

- **City Search**: Search for weather data by city name
- **Weather Display**: Real-time weather information display
- **AI Analysis**: AI-powered weather insights using Google GenAI
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Mobile-friendly interface with Bootstrap 5

## Tech Stack

- **React** 19.2.0 - UI library
- **Vite** 7.2.4 - Build tool and dev server
- **Bootstrap** 5.3.8 - CSS framework
- **Google GenAI** - AI integration for weather analysis
- **React Markdown** - Markdown rendering for AI responses

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_GOOGLE_API_KEY=your_google_genai_api_key_here
VITE_WEATHER_API_KEY=your_weather_api_key_here
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Project Structure

```
wetterstation/
├── src/
│   ├── components/       # React components
│   │   ├── Navbar.jsx
│   │   ├── Searchbar.jsx
│   │   ├── Weather.jsx
│   │   ├── Aiapi.jsx
│   │   ├── DarkmodeButton.jsx
│   │   └── TokenMarkdown.jsx
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── App.css          # Styles
├── public/              # Static assets
└── package.json         # Dependencies and scripts
```

## Deployment

The app is configured for static deployment (e.g., Coolify, Netlify, Vercel):

1. Build the app: `npm run build`
2. Deploy the `dist/` folder to your hosting service
3. Ensure environment variables are configured on the hosting platform

---

**HTL SYP Project** - 2026
