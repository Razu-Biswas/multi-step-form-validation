import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config



  



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
  