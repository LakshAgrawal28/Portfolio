# AI Context & Architecture Guide (LoreJourney Portfolio)

This file serves as the "source of truth" and persistent memory for any AI agents or LLMs assisting with this project. Please read this before suggesting structural changes.

## 🎯 Core Concept: "4 Timelines, 1 Journey"
This is a high-fidelity, interactive React Single Page Application (SPA) portfolio. It allows the user to transition the entire website between four distinct "temporal eras":
- **1800s**: Magic, Arcane, Parchment, Sepia, Serif Fonts (`Pirata One`, `MedievalSharp`).
- **1900s**: Industrial, Terminal, Brutalism, Grayscale, 8-bit Fonts (`Press Start 2P`, `VT323`).
- **Present**: Clean, Modern Minimalist, Glassmorphism, Rounded UI, Sans-serif (`Outfit`).
- **Future**: Sci-Fi, Quantum Shimmer, Holographic, Geometric Fonts (`Space Grotesk`, `Orbitron`).

## 🛠️ Tech Stack
- **React 19 + TypeScript**: Core framework.
- **Vite 6**: Bundler.
- **Tailwind CSS v4**: Utility styling with dynamic CSS variables (data-themes).
- **Framer Motion**: Heavy use for cinematic layout animations and era transitions.
- **Lucide React**: For scalable SVG icons (e.g., the `Info` button).

## 🧠 Architectural Decisions & State Management
- **`TimelineContext.tsx`**: The heart of the app. It manages `era`, `prevEra`, `nextEra`, and the `isTransitioning` state.
- **Cinematic Transitions (`EraJumpOverlay.tsx`)**: To prevent awkward UI flashing when data changes, the transition uses a synchronized `setTimeout` approach. The overlay portal covers the screen *instantly* on click. Exactly midway through the animation (600ms), the underlying React state (`era`) is swapped while hidden. The portal then shrinks, revealing the new timeline flawlessly.
- **Dynamic CSS Variables (`index.css`)**: Instead of passing hundreds of Tailwind props, the `TimelineContext` writes `data-theme="1800s"` to the `html` root. `index.css` overrides the CSS variables (`--bg-primary`, `--font-heading`, etc.) dynamically based on this attribute.
- **Centralized Content (`data/timelineData.ts`)**: All textual content and project data is structured strictly by era. This ensures data integrity and clean separation of concerns.

## 🎨 UI/UX Specifications
- **Navigation Dock**: The era switcher is implemented as a floating, bottom-centered glassmorphism dock on mobile, and seamlessly integrates into the top navigation bar on desktop.
- **Tooltip**: The `Info` button in the navigation uses an `AnimatePresence` glassmorphism popover that is dynamically positioned to never overflow off-screen.
- **Font Consistency**: While most UI changes fonts based on the era, the user's main brand name ("Laksh Agrawal") strictly remains in `Outfit` across all eras for professional consistency.
- **Email Contact**: Uses a direct Gmail web-compose URL (`https://mail.google.com/mail/?view=cm&fs=1&to=...`) instead of `mailto:` to prevent opening clunky desktop mail clients.

## 📁 File Structure
- `/src/contexts/`: Global state (`TimelineContext.tsx`).
- `/src/components/`: Modular UI (Navigation, Contact, Hero, WormholeLoader, EraJumpOverlay).
- `/src/data/`: Content mapping per era (`timelineData.ts`, `/eras/`).
- `/public/`: Static assets (including the primary `logo.jpg` used in the Navigation and as the `favicon`).

## 🤖 AI Guidelines
- **Always use Framer Motion (`motion.div`)** for layout changes; avoid plain CSS transitions for structural DOM changes.
- **Respect the Data-Theme Model**: Do not hardcode colors in Tailwind classes (e.g., `bg-blue-500`). Always use semantic Tailwind classes defined in the CSS variables (e.g., `bg-accent`, `text-primary`).
- **Responsive First**: Ensure UI components, especially fixed overlays and tooltips, respect mobile bounds.
