import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/home-layout/",
  css: {
    modules: {
      // Enable CSS Modules for all .css files in src directory
      scopeBehaviour: "local",
    },
  },
});
