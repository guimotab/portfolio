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
        scaleToRigth:{
         "0%":{
            transform: "scaleX(0);",
            transformOrigin: "0% 0%;"
          },
          "100%":{
            transform: "scaleX(1);",
            transformOrigin: "0% 0%;"
          }
        }
      },
      animation: {
        slideTopIcons: "slideTop 0.5s 0.15s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        growKnowledges: "scaleKnowledges 0.4s ease-in-out both",
        growProjects: "scaleProjects 0.4s 0.1s ease-in-out both",
        growToRight: "scaleToRigth 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
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

