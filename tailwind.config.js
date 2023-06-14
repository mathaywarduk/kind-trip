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
      /* @link https://utopia.fyi/type/calculator?c=375,15,1.618,166,24,1.618,7,1,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */
      sm: '0.58rem',
      base: '0.94rem',
      md: '1.52rem',
      lg: '2.45rem',
      xl: '3.97rem',
      '2xl': '6.43rem',
      '3xl': '10.40rem',
      '4xl': '16.82rem',
      '5xl': '27.22rem',
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