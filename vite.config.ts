import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  
  // root'umuz artık client klasörü
  root: path.resolve(import.meta.dirname, "client"),
  
  build: {
    // Client içindeki dist klasörüne yazalım
    outDir: path.resolve(import.meta.dirname, "client", "dist"),
    emptyOutDir: true,
    
    // Rollup'a entry noktayı doğru verelim
    rollupOptions: {
      input: path.resolve(import.meta.dirname, "client", "index.html"),
    },
  },
  
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
