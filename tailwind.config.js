// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        default: ['var(--default-font)', ...defaultTheme.fontFamily.sans],
        heading: ['var(--heading-font)', ...defaultTheme.fontFamily.sans],
        nav: ['var(--nav-font)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
