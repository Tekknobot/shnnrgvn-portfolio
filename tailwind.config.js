/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      colors: {
        brand: { 50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",500:"#6366f1",600:"#4f46e5",700:"#4338ca" }
      },
      boxShadow: { soft: "0 6px 24px rgba(0,0,0,.08)" }
    }
  },
  plugins: []
};
