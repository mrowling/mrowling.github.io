import { defineConfig } from 'vite'

export default defineConfig({
    // Base public path
    base: './',

    // Build configuration
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        // Generate source maps for debugging
        sourcemap: true,
    },

    // Development server configuration
    server: {
        port: 3000,
        open: true,
    },
})
