# LogicLift - Next.js Learning Platform

A modern, interactive learning platform built with Next.js 14, React 18, and TypeScript. Converted from a monolithic HTML file into a component-based Next.js application.

## Features

- 🚀 **Next.js 14** with App Router
- ⚛️ **React 18** with TypeScript
- 🎨 **Modern UI** with glassmorphism effects
- 🌌 **Animated Space Background** with canvas animations
- 🤖 **AI Chat Assistant** with OpenAI integration
- 💡 **AI-Powered Question Answers** for all assessment questions
- 📊 **Progress Tracking** with circular progress indicators
- 🎮 **Gamified Learning** features
- 💻 **Interactive Code Editor**
- 🗺️ **Dynamic Roadmaps** for different programming languages
- 📱 **Responsive Design**

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── AssessmentSection.tsx # Level assessment
│   ├── LanguageSelection.tsx # Language picker
│   ├── RoadmapOverlay.tsx  # Roadmap modal
│   ├── AdvancedLearningFeatures.tsx # Feature cards
│   ├── ProgressSection.tsx # Progress dashboard
│   ├── AIChatSection.tsx   # AI chatbot
│   ├── Footer.tsx          # Footer component
│   ├── SpaceBackground.tsx # Canvas animation
│   ├── FloatingElements.tsx # Floating background elements
│   └── modals/             # Modal components
│       ├── AIGuidanceModal.tsx
│       ├── CodeEditorModal.tsx
│       ├── DynamicRoadmapsModal.tsx
│       ├── GamifiedLearningModal.tsx
│       ├── ProgressAnalyticsModal.tsx
│       └── CommunitySupportModal.tsx
└── package.json
```

## Key Improvements

1. **Component-Based Architecture**: Broken down monolithic HTML into reusable React components
2. **TypeScript**: Added type safety throughout the application
3. **CSS Modules**: Scoped styles for better maintainability
4. **Performance**: Optimized with Next.js features (code splitting, SSR)
5. **Accessibility**: Improved semantic HTML and keyboard navigation
6. **Code Organization**: Clean separation of concerns
7. **Modern React Patterns**: Hooks, functional components, proper state management

## Environment Variables

Create a `.env.local` file for API keys:

```
OPENAI_API_KEY=your_openai_api_key_here
```

To get an OpenAI API key:
1. Sign up at [OpenAI Platform](https://platform.openai.com)
2. Navigate to API Keys section
3. Create a new secret key
4. Copy and paste it into your `.env.local` file

**Note:** Without the API key, the AI features will show placeholder messages. The AI integration works for:
- ✅ Question answers in Assessment sections (Beginner & Intermediate)
- ✅ AI Chat Assistant
- ✅ All questions throughout the platform

## Customization

- Modify color schemes in `app/globals.css` (CSS variables)
- Update roadmap content in `components/RoadmapOverlay.tsx`
- Customize features in `components/AdvancedLearningFeatures.tsx`

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- CSS Modules
- Font Awesome Icons
- Google Fonts (Orbitron)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
