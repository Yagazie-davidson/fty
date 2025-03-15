import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#68B934",
        mediumGreen: "#8FC834",
        lightGreen: "#A8D034",
        primaryOrange: "#FF7B22",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
