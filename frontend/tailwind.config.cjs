/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{tsx,ts,js,jsx}"
  ],
  theme: {
    extend: {
        backgroundColor : {
            "banner-top" : "#DCDCDC",
            "product" : "#EBEBEB",
            "banner-bottom" : "#F02D34"
        }
    },
  },
  plugins: [],
}
