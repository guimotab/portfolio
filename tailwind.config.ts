import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
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
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          hover: "var(--primary-hover)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        slideTop: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" }
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
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        slideOutBottom: {
          "0%": {
            transform: "translateY(0)",
            opacity: "1"
          },
          "100%": {
            transform: "translateY(15px)",
            opacity: "0"
          }
        },
        slideInTop: {
          "0%": {
            transform: "translateY(-15px)",
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
        growToRight: "scaleToRigth 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        slideOutTheme: "slideOutBottom 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
        slideinTheme: "slideInTop 0.3s 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config