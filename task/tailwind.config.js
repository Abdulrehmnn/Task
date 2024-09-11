/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "290px", // Custom screen size for extra small devices
        sm: "600px", // Overwriting default small screen size
        md: "750px", // Overwriting default medium screen size
        lg: "1024px", // Overwriting default large screen size
        xl: "1280px", // Overwriting default extra large screen size
        "2xl": "1536px", // Overwriting default 2x large screen size
        "3xl": "1920px", // Custom screen size for extra large devices
      },
      fontWeight: {
        'custom-700': '700',
        'custom-800': '800',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),

  ],
};
