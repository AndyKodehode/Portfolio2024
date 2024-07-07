/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xs": "375px",
        xs: "425px",
        "3xl": "2600px",
      },
      colors: {
        kv: {
          black: "#0B1215",
          white: "#FFFAFA",
        },
        /* Farger fra Jobloop | Kodehode Figma Design Fil */
        portfolio: {
          /* Hovedfarge fra Figma */
          primary: {
            blue: "#9ABDF1",
            yellow: "#FFF397",
            green: "#8EE8B7",
          },
          /* Nedtonet fra Figma */
          secondary: {
            darkBlue: "#3D5876",
            
          }
         
        },
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        //fadeIn: {
        //  "0%": { opacity: "0" },
        //  "100%": { opacity: "100%" },
        //},
      },
      animation: {
        //fadeIn: "fadeIn 1s forwards",
        scroll: "scroll 35s linear infinite",
      },
      boxShadow: {
        cards: "0 -5px 10px 2px rgb(0 0 0 / 0.1), 0 5px 10px 2px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
