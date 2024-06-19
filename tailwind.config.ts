import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [
    require("@tailwindcss/typography"),
    nextui({
      themes: {
        light: {
          extend: "light",
          colors: {
            background: "#fff8e1",
            foreground: "#1e1b4b",
          },
        },
        dark: {
          extend: "light",
          colors: {
            background: "#020617",
            foreground: "#FFFBEB",
          },
        },
      },
    }),
  ],
};
export default config;
