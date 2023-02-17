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
        },
        keyframes : {
            "slide" : {
                "0%": { transform : "translateX(0)"},
                "100%" :  { transform : "translateX(-80%)"}
            }
        },
        animation : {
            "slide" : "slide 10s linear infinite"
        }
    },
  },
  plugins: [],
}
