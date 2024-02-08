import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      maxWidth: {
        480: "480px",
      },
      boxShadow: {
        error: "0px 0px 10px 5px rgb(220,38,38)",
      },
      transitionDuration: {
        "05": ".05s",
      },
      backgroundColor: {
        modal: "rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#fffff",
          },
        },
        dark: {
          colors: {
            background: "#00000",
          },
        },
      },
    }),
  ],
};
export default config;
