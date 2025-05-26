/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow : ['Barlow', 'sans-serif'],
        fraunces : ['Fraunces', 'sans-serif']
      }, 
      colors: {
        
        'soft-red': 'hsl(7, 99%, 70%)',
        'yellow': 'hsl(51, 100%, 49%)',
        'graphicDesigntext': 'hsl(167, 40%, 24%)',
        'photographyText': 'hsl(198, 62%, 26%)',
        'darkModerateCyanfooter': 'hsl(168, 34%, 41%)',
        'Verydarkdesaturatedblue': 'hsl(212, 27%, 19%)',
        'Verydarkgrayishblue' : 'hsl(213, 9%, 39%)',
        'Darkgrayishblue': 'hsl(232, 10%, 55%)',
        'Grayishblue': 'hsl(210, 4%, 67%)',
        'White': 'hsl(0, 0%, 100%)'
      },
      
      backgroundImage: {
        "topImage" : "url(/images/desktop/image-header.jpg)",
        "eggImage" : "url(/assets/images/desktop/image-transform.jpg)",
        "mobileEggImage" : "url(/assets/images/mobile/image-transform.jpg)",
        "mobileTopImage" : "url(/images/mobile/image-header.jpg)",
        "deskopImagePinkCup" : "url(/assets/images/desktop/image-stand-out.jpg)",
        "mobileImagePinkCup" : "url(/images/mobile/image-stand-out.jpg)",
        "Desktopimagegraphicdesign" : "url(/images/desktop/image-graphic-design.jpg)",
        mobileImageGraphicDesign : "url(/images/mobile/image-graphic-design.jpg)",
        "desktopImagePhotography" : "url(/images/desktop/image-photography.jpg)",
        "mobileImagePhotography" : "url(/images/mobile/image-photography.jpg)"
      },
    },
  },
  plugins: [],
};
