import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Keep the build's hashed JS/CSS out of the legacy httpdocs/assets/
    // folder that ships alongside it on the production host.
    assetsDir: 'app-assets',
  },
});
