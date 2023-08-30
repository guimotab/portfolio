/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideTop: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" }
        },
        scaleKnowledges: {
          "0%": {
            transform: "scale(1)"
          },
          "100%": {
            transform: "scale(1.02)"
          }
        },
        scaleProjects: {
          "0%": {
            transform: "scale(1)"
          },
          "100%": {
            transform: "scale(1.01)"
          }
        },
        scaleToRigth: {
          "0%": {
            transform: "scaleX(0);",
            transformOrigin: "0% 0%;"
          },
          "100%": {
            transform: "scaleX(1);",
            transformOrigin: "0% 0%;"
          }
        },
        shadowPopBl: {
          "0%": {
            boxShadow: "0 0 #112D4E, 0 0 #112D4E, 0 0 #112D4E",
            transform: "translateX(0) translateY(0)"
          },
          "100%": {
            boxShadow: "-1px 1px #112D4E, -2px 2px #112D4E, -3px 3px #112D4E",
            transform: "translateX(5px) translateY(-5px)"
          }
        },
        slideOutBottom: {
          "0%": {
            transform: "translateY(0)",
            opacity: "1"
          },
          "100%": {
            transform: "translateY(10px)",
            opacity: "0"
          }
        },
        slideInTop: {
          "0%": {
            transform: "translateY(-10px)",
            opacity: "0"
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: "1"
          }
        }
      },
      animation: {
        slideTopIcons: "slideTop 0.5s 0.15s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        growKnowledges: "scaleKnowledges 0.3s ease-in-out both",
        growProjects: "scaleProjects 0.4s ease-in-out both",
        growToRight: "scaleToRigth 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        shadowPopProject: "shadowPopBl 0.3s 0.2s cubic-bezier(0.470, 0.000, 0.745, 0.715) both",
        slideOutTheme: "slideOutBottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
        slideinTheme: "slideInTop 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both"
      },
      colors: {
        cor: {
          primaria: '#DBE2EF',
          secundaria: '#3F72AF',
          terciaria: '#112D4E',
          clara: '#f1f1f1',
          outline: '#011e42',
          hover: '#1355a0',
          erro: "#b92626",
          aside: "#1e344d",
        }
      },
      fontFamily: {
        primaria: ["Work Sans, sans-serif"],
        secundaria: ["Open Sans, sans-serif"]
      }
    },
  },
  plugins: [],
}

