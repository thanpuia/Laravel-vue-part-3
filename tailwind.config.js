module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: [
 
 
    './resources/**/*.html',
 
    './resources/js/*.js',
    './resources/js/*.vue',
    './resources/js/**/*.vue',

 
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      backgroundImage: theme => ({
        // 'landingbg': "url('/images/police/banner1.webp')",
        'footer-texture': "url('/img/footer-texture.png')",
       }),
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'maxwi' : '1200px',
       },
      colors: {
        headbar: '#806b56',
        navbar: '#4a76a8',
        semiwhite: '#e5d5c5',
        landingbg: "#faf8f8",
        textb: '#484848',
        bluebutton: '#566b80',
        noticeblue: '#727f8d',
        textbuttonwhite: '#dedede',
        texttrans: '#adadad',
        textbrown: '#33281d',
        bordergr: '#bfbfbf',
        borderb: '#484848',
        footerbg: '#172c33',
       
       
      },
    },
  },
  variants: {
    extend: {
      textColor: ['visited'],
      backgroundColor: ['group-focus'],

    },
  },
  plugins: [],
}
