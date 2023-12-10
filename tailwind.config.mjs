import TailwindScrollbar from "tailwind-scrollbar";
import { HeaderGridPlugin } from "./src/styles/tailwind/HeaderGridPlugin.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(25, 35, 55)",
      },
      fontFamily: {
        title: "Nunito",
        text: "PT Sans",
      },
    },
  },
  plugins: [TailwindScrollbar, HeaderGridPlugin],
};
