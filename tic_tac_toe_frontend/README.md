# Lightweight React Template for KAVIA

This project provides a minimal React template with a clean, modern UI and minimal dependencies.

---

## 🟦🟧 Tic Tac Toe Game: Ocean Professional Edition

Run a modern, accessible Tic Tac Toe game in your browser:

- **Play**: Two-player local, 3x3 grid, winner highlight, and draw detection.
- **Accessibility & UX**: Fully keyboard accessible; ARIA attributes; responsive modern design.
- **Reset**: Click "Reset" to restart anytime.
- **Theme**: Ocean Professional (blue/amber), shadow, minimalist gradient.

**To start:**
1. Install dependencies:  
   `npm install`
2. Start development server:  
   `npm start`  
   _(then open [http://localhost:3000](http://localhost:3000) in your browser)_
3. Run tests:  
   `npm test`

_No backend or API configuration required._

---

## Features

- **Lightweight**: No heavy UI frameworks - uses only vanilla CSS and React
- **Modern UI**: Clean, responsive design with KAVIA brand styling
- **Fast**: Minimal dependencies for quick loading times
- **Simple**: Easy to understand and modify

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Customization

### Colors

The Ocean Professional theme colors are in `src/styles/theme.css`, and old default variables remain in `src/App.css`.

### Responsive & Accessibility

- The layout is fully responsive for desktop and mobile.
- All interactive elements have clear :focus-visible outlines, optimized for keyboard navigation.
- ARIA roles and labels are included for the board, squares, and reset button to support screen readers.
- Board navigation supports Enter/Space to activate a square.

### Animations

- Interactive states: Smooth transitions for board and buttons via CSS.
- Winner highlight: Subtle animated glow on the three winning squares.
- Micro-interactions: Hover, active, and focus-visible animations on all controls.
- All board/square transitions and highlight animations are skipped if your OS/browser requests "reduced motion."

### Disabling Animations

By default, smooth transitions and win animations are enabled.  
If you'd like to disable them, set your device or browser's "Reduce Motion" flag (System Accessibility settings, or in OS browser settings).  
Animations will be disabled via CSS `prefers-reduced-motion: reduce`.

### Components

This template uses pure HTML/CSS components instead of a UI framework. You can find component styles in `src/App.css` and Tic Tac Toe styles in `src/styles/theme.css`.

Common Tic Tac Toe components:
- Board, Square, StatusBar, Controls—see `src/components/`

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
