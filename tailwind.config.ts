// tailwind.config.js
module.exports = {
  darkMode: "class", // important!
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-bg": "#f0f0f0",
        "light-text": "#1a202c",
        "light-primary": "#4f46e5",
        "light-secondary": "#e0e7ff",

        "dark-bg": "#1a202c",
        "dark-text": "#f0f0f0",
        "dark-primary": "#818cf8",
        "dark-secondary": "#2d3748",
      },
    },
  },
  plugins: [],
};


  



  // export default {
  //   darkMode: "class",
  //   content: [
  //     "./app/**/*.{js,ts,jsx,tsx}",       // App Router files
  //     "./components/**/*.{js,ts,jsx,tsx}", // UI Components
  //     "./lib/**/*.{js,ts,jsx,tsx}",        // Optional logic files
  //   ],
  //   theme: {
  //     extend: { colors: {
  //       darkBackground: '#121212',
  //       lightBackground: '#f0f0f0',
  //     },},
  //   },
  //   plugins: [],
  // }
  