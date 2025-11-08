import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    // Base public path
    base: './',

    // Build configuration
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        // Generate source maps for debugging
        sourcemap: true,
        // Configure multiple entry points
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                portfolio: resolve(__dirname, 'portfolio.html'),
            },
        },
    },

    // Development server configuration
    server: {
        port: 3000,
        open: true,
    },
})
