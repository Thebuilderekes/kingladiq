module.exports = {
  content:   ["index.html", "./src/input.css"],
  theme: {
    extend: {

      colors: {
        'nav-bg': "#33363F"
    
      }



    },

    screens: {
      'xs': '320px',
      ...defaultTheme.screens,
    },
  
  },


  plugins: [],
}
