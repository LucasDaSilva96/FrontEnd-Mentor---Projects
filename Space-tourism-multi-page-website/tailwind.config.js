/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      darkBlue: '#0B0D17',
      lightBlue: '#D0D6F9',
      white: '#FFFFFF',
      transparent: 'transparent'
    },
    fontSize: {
      preset1: '144px',
      preset2: '100px',
      preset3: '56px',
      preset4: '32px',
      preset5: '28px',
      preset7: '14px',
      preset8: '16px'
    },
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1280px'
      }
    },
    spacing: {
      1600: '128px',
      1200: '96px',
      1000: '80px',
      800: '64px',
      600: '48px',
      500: '40px',
      400: '32px',
      300: '24px',
      200: '16px',
      150: '12px',
      100: '8px',
      50: '4px',
      25: '2px',
      0: '0px'
    },
    extend: {
      fontFamily: {
        Bellefair: ['Bellefair', 'serif']
      },
      backgroundImage: {
        homeDesktop: "url('/home/background-home-desktop.jpg')",
        homeTablet: "url('/home/background-home-tablet.jpg')",
        homeMobile: "url('/home/background-home-mobile.jpg')",
        destinationDesktop: "url('/destination/background-destination-desktop.jpg')",
        destinationTablet: "url('/destination/background-destination-tablet.jpg')",
        destinationMobile: "url('/destination/background-destination-mobile.jpg')"
      }
    }
  },
  plugins: []
}
