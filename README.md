# Mitch Rowling

Vite site for Mitchell Rowling's portfolio.

## Project Structure

```
tech-consultancy/
├── index.html                # Entry HTML
├── src/
│   ├── js/main.js            # JS entry (imports SCSS + inlines SVG)
│   ├── css/style.scss        # SCSS root (uses partials)
│   └── assets/               # Static assets (logo.svg, logo.png, etc.)
├── vite.config.js            # Vite configuration
├── package.json              # Project metadata & scripts
├── pnpm-lock.yaml            # Lockfile
└── README.md                 # This document
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm package manager

### Installation

Install dependencies:

```bash
pnpm install
```

### Development

Start the dev server (auto opens browser):

```bash
pnpm dev
```

Served at `http://localhost:3000` with HMR.

### Build

Create a production build (hashed assets, sourcemaps):

```bash
pnpm build
```

Output goes to `dist/`.

### Preview

Serve the built output for a final check:

```bash
pnpm preview
```

## Features

- ⚡ **Vite** - Lightning-fast development with HMR (Hot Module Replacement)
- 📦 **pnpm** - Fast, disk space efficient package manager
- 🎨 **SCSS** - Modular partials, variables & mixins
- 🖼️ **Hashed Assets** - Vite processes images/SVGs for cache busting
- 🎯 **Inline SVG Animation** - Raw import (`?raw`) + CSS controlled activation

## VS Code Tasks

This project includes pre-configured VS Code tasks:

- **Vite Dev Server** (default build task) - Press `Ctrl+Shift+B` to run
- **Vite Build** - Build for production
- **Vite Preview** - Preview production build

## Working With Assets

All images/SVGs live under `src/assets/`.

Two import styles:

1. Emitted file (hashed URL):
	```js
	import logoUrl from '../assets/logo.png'
	// use <img src={logoUrl} /> or background-image: url(logoUrl)
	```
2. Raw inline SVG (string):
	```js
	import logoSvgRaw from '../assets/logo.svg?raw'
	container.innerHTML = logoSvgRaw // preserves paths for CSS animation
	```

If you also want the emitted hashed SVG file (e.g. for alt usage), import it a second time without `?raw`:
```js
import logoSvgFile from '../assets/logo.svg'
```

During build you will see both hashed outputs (e.g. `logo-XXXX.svg`, `logo-YYYY.png`).

Add new assets by dropping them in `src/assets/` and importing as above—no extra config needed.

## SVG Animation Pattern

1. Import raw string with `?raw`.
2. Inject into a container (`innerHTML`).
3. On next frame add an `active` class to kick off transitions defined in SCSS.
4. Keep shapes as paths for reliable fill/opacity animations.

## Development Workflow

1. Edit SCSS/HTML/JS under `src/`.
2. HMR updates instantly (`pnpm dev`).
3. Build when ready: `pnpm build`.
4. Deploy `dist/` (contains hashed assets + `index.html`).
5. For new images, just add to `src/assets/` and import.

## License

MIT
