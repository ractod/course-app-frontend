/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  important: ":root",
  corePlugins: {
    preflight: false,
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      colors: {
        body: "#F7F5FA",
        primary: {
          '50': '#faf5ff',
          '100': '#f2e8ff',
          '200': '#e7d6fe',
          '300': '#d5b5fd',
          '400': '#bb86fa',
          '500': '#9c4df4',
          '600': '#8c36e7',
          '700': '#7725cb',
          '800': '#6623a6',
          '900': '#541e85',
          '950': '#370863',
        },
        secondary: {
          '50': '#fff3f1',
          '100': '#ffe4e1',
          '200': '#ffcdc7',
          '300': '#ffaba0',
          '400': '#ff6652',
          '500': '#f8513b',
          '600': '#e5341d',
          '700': '#c12814',
          '800': '#a02414',
          '900': '#842418',
          '950': '#480f07',
        },
        mute: "#5D5A6F",
        typography: "#0A033C",
        shadowRoot: "#2f327d21",
      },
      fontFamily: {
        IranSans: ["IranSans", "Arial"],
      },
      screens: {
        sm: "500px",
        md: "768px",
        lg: "900px",
        xl: "1024px",
        "2xl": "1280px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          sm: "20px",
          md: "20px",
          lg: "20px",
          xl: "20px",
        },
        screens: {
          sm: "650px",
          md: "768px",
          lg: "900px",
          xl: "1024px",
          "2xl": "1280px",
        },
      },
      backgroundImage: {
        "border-dashed": "url(/images/border-dash.svg)"
      },
      animation: {
        zoom_in_out: "zoom_in_out .4s linear infinite alternate",
      },
      keyframes: {
        zoom_in_out: {
          "0%": {
            transform: "scale(1)",
            opacity: "1"
          },
          "100%": {
            transform: "scale(.6)",
            opacity: ".5"
          }
        }
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
