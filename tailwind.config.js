const flowbite = require("flowbite-react/tailwind");
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** @type {import('tailwindcss').Config} */
export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        backGray: "#ebe7e7",
        buttonPink: "#ff5e7f",
        homePink: "#fef8f9",
        foodGray: "#d9d9d9",
        subTextGray: "#676565",
      },
    },
  },
  plugins: [flowbite.plugin()],
  server: {
    proxy: {
      "/api": {
        target: "https://www.themealdb.com/api/json/v1/1",
        changeOrigin: true,
        secure: false,
      },

      "/mealdb": {
        target: "https://www.themealdb.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/mealdb/, "/api/json/v1/1"),
      },
    },
  },
});
