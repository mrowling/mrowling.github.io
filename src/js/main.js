import '../css/style.scss'

// Import assets so Vite processes & hashes them.
// ?raw ensures the SVG content is provided as a string (no separate network fetch needed).
import logoSvg from '../assets/logo.svg?raw'
import logoSvgFile from '../assets/logo.svg' // regular import ensures emitted hashed SVG asset
import logoPng from '../assets/logo.png'

function inlineLogoSvg() {
  const container = document.getElementById('svg-container')
  if (!container) return

  try {
    container.innerHTML = logoSvg
    const svg = container.querySelector('svg')
    if (svg) {
      // Use small timeout similar to old behavior for more reliable CSS initial state capture
      setTimeout(() => svg.classList.add('active'), 100)
    } else {
      console.warn('SVG element not found after inlining.')
    }
    // Expose the emitted file URL for debugging / future non-inline usage
    container.dataset.logoSvgUrl = logoSvgFile
    console.info('[logo] Inlined SVG successfully.', { emittedUrl: logoSvgFile })
  } catch (e) {
    console.error('Failed to inline SVG, falling back to PNG.', e)
    container.innerHTML = `<img src="${logoPng}" alt="Mitchell Rowling Logo" style="width:100%;height:auto;" />`
    console.info('[logo] Fallback PNG rendered.', { png: logoPng })
  }
}

document.addEventListener('DOMContentLoaded', inlineLogoSvg)
