/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        globalbiru : "#3B82F6",
        border : "#F1F5F9",
        borderMobile : "#E5E7EB",
        payButton : "#9CA3AF",
        bgSpeak : "#166752CC",
        input : "#94A3B8",
        biru : "#3B82F6",
        kuning : "#FACC15",
        
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/bgEct.png')",
        'speaker' : "url('/src/assets/pic4.png')",
        'bgMap' : "url('/src/assets/bg4.png')"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'jakarta': ["Plus Jakarta Sans", "sans-serif"],
        'tes' : ["Jersey 25", "sans-serif"]
      }
    },
  },
  plugins: [],
}