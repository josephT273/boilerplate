import { type Config } from "tailwindcss";
import theme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/**/*.{ts,tsx}", // optional shared ui
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#2c2c2c",
        input: "#2c2c2c",
        ring: "#00ffae",
        background: "#0d0d0d",
        foreground: "#f2f2f2",
        primary: {
          DEFAULT: "#00ffae",
          foreground: "#0d0d0d",
        },
        secondary: {
          DEFAULT: "#1f1f1f",
          foreground: "#f2f2f2",
        },
        destructive: {
          DEFAULT: "#ff3b3b",
          foreground: "#0d0d0d",
        },
        muted: {
          DEFAULT: "#1f1f1f",
          foreground: "#6c757d",
        },
        accent: {
          DEFAULT: "#ff007c",
          foreground: "#ffffff",
        },
      },
      fontFamily: {
        sans: ["Fira Code", ...theme.fontFamily.sans],
        mono: ["Fira Code", ...theme.fontFamily.mono],
      },
    },
  },
  plugins: [require("tw-animate-css")],
};
export default config;
