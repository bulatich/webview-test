import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Manrope", "Sofia Sans", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        "soft-black": "#03050a"
      }
    }
  },
  plugins: []
};

export default config;
