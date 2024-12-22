import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        flip: {
          "0%, 100%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(180deg)" },
        },
        accelerate: {
          "0%": { animationTimingFunction: "ease-in" },
          "100%": { animationTimingFunction: "ease-out" },
        },
        rotateY: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        rotateY: 'rotateY 1s linear infinite',
        "flip-accelerate": "flip 1s infinite cubic-bezier(0.86, 0, 0.07, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
