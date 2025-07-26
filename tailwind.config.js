/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // ✅ Enables theme switching using class strategy
  theme: {
    extend: {
      fontFamily: {
        mono: ["'Courier New'", "monospace"],
        futuristic: ["'Orbitron'", "sans-serif"],
      },
      colors: {
        'neon-blue': '#00FFFF',
        'neon-purple': '#9F00FF',
        'neon-green': '#39FF14',
        'dark-bg': '#0f0f2e',
        'cyber-gray': '#1f1f2e',
      },
      boxShadow: {
        glow: "0 0 15px rgba(0, 255, 255, 0.5)",
        neon: "0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        pulseGlow: "pulseGlow 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 10px #00ffff" },
          "50%": { boxShadow: "0 0 20px #00ffff, 0 0 40px #00ffff" },
        },
      },
    },
  },
  plugins: [],
};
