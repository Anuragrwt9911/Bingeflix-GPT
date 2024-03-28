import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    //env variables from .env
    "process.env.VITE_OPENAI_KEY": JSON.stringify(process.env.VITE_OPENAI_KEY),
    "process.env.VITE_TMDB_KEY": JSON.stringify(process.env.VITE_TMDB_KEY),
  },
});
