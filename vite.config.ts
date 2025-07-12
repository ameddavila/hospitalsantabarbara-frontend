import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',       // ✅ Carpeta de salida correcta
    emptyOutDir: true     // ✅ Limpia la carpeta dist antes de construir
  }
});
