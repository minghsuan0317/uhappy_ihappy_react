/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 讓 Tailwind 掃描所有的 React 檔案
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
