/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#211963",
        secondary: "#1b1455",
        github: "#2b3137",
        facebook: "#4267B2",
        google: "#eb4034",
        linkedin: "#0a66c2",
        facebook: "#4267B2",
        workos: "#1E3A8A",
        green4: "#34d399", // Adjust colors for Radix compatibility
        green5: "#10b981",
        green7: "#065f46",
      },
    },
  },
  plugins: [],
};
