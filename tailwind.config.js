const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
    './*.md',
  ],
  theme: {
    fontSize: {
      /* @link https://utopia.fyi/type/calculator?c=375,15,1.618,1366,24,1.618,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */
      /* Step -2: 5.73px → 9.17px */
      xs: 'clamp(0.36rem, calc(0.28rem + 0.35vw), 0.57rem)',

      /* Step -1: 9.27px → 14.83px */
      sm: 'clamp(0.58rem, calc(0.45rem + 0.56vw), 0.93rem)',

      /* Step 0: 15.00px → 24.00px */
      base: 'clamp(0.94rem, calc(0.72rem + 0.91vw), 1.50rem)',

      /* Step 1: 24.27px → 38.83px */
      md: 'clamp(1.52rem, calc(1.17rem + 1.47vw), 2.43rem)',

      /* Step 2: 39.27px → 62.83px */
      lg: 'clamp(2.45rem, calc(1.90rem + 2.38vw), 3.93rem)',

      /* Step 3: 63.54px → 101.66px */
      xl: 'clamp(3.97rem, calc(3.07rem + 3.85vw), 6.35rem)',

      /* Step 4: 86.88px → 164.48px */
      '2xl': 'clamp(5.43rem, calc(4rem + 6.22vw), 10.28rem)',

      /* Step 5: 166.34px → 266.14px */
      '3xl': 'clamp(10.40rem, calc(8.04rem + 10.07vw), 16.63rem)',
    },
    extend: {
      fontFamily: {
        serif: ["Marselis", ...defaultTheme.fontFamily.serif],
        display: ["Smithee", ...defaultTheme.fontFamily.sans],
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        'super-tight': '0.8',
      },
      maxWidth: {
        container: '120rem',
        prose: '90rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}