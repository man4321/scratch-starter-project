module.exports = {
  darkMode: "class",
  // purge: ["./src/**/*.{ts,tsx,js,jsx}","./src/components/**/*.{ts,tsx,js,jsx}"],
  purge: {
    content: ['./src/**/*.{ts,tsx,js,jsx,html}'],
    safelist: [
      'bg-blue-500',
      'bg-yellow-500',
      'text-center',
      'hover:opacity-100',
      'w-full',
      'left',
      'top',
      'absolute',
      // ...
      'lg:text-right',
    ],
  },
  variants: {},
  plugins: [],

};
