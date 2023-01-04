/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{tsx,jsx,js,ts}',
    './src/pages/**/*.{tsx,jsx,js,ts}',
    './src/components/**/*.{tsx,jsx,js,ts}',
  ],
  theme: {
    fontFamily: {
      sans: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    },
    fontSize: {
      xs: '1.3rem',
      sm: '1.4rem',
      md: '1.6rem',
      lg: '1.8rem',
      xl: ['2.2rem', '1.3'],
      '2xl': '2.4rem',
      '3xl': '2.6rem',
      '4xl': '3.2rem',
      '5xl': '4rem',
      '6xl': ['4.4rem', '1'],
      '7xl': ['4.8rem', '1'],
      '8xl': ['8rem', '1'],
    },
    colors: {
      background: '#000212',
      gray: {
        DEFAULT: '#858699',
        100: '#222326',
        200: '#b4bcd0',
      },
      transparent: 'transparent',
      white: {
        DEFAULT: '#fff',
        100: 'rgba(255, 255, 255, 0.08)',
        200: '#f7f8f8',
      },
    },
    spacing: {
      0: '0',
      1: '0.4rem',
      2: '0.8rem',
      3: '1.2rem',
      4: '1.6rem',
      5: '2rem',
      6: '2.4rem',
      7: '2.8rem',
      8: '3.2rem',
      9: '3.6rem',
      10: '4rem',
      11: '4.4rem',
      12: '4.8rem',
      'nav-height': 'var(--nav-height)',
    },
    backgroundImage: {
      'primary-gradient':
        'linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)',
      'page-gradient':
        'radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3), transparent)',
      'hero-gradient':
        'radial-gradient(ellipse 50% 80% at 20% 40%,rgba(93,52,221,0.1),transparent), radial-gradient(ellipse 50% 80% at 80% 50%,rgba(120,119,198,0.15),transparent)',
      'hero-glow':
        'conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg)',
      'glow-lines':
        'linear-gradient(var(--direction),#9d9bf2 0.43%,#7877c6 14.11%,rgba(120,119,198,0) 62.95%)',
      'radial-faded':
        'radial-gradient(circle at bottom center,var(--color),transparent 70%)',
      'glass-gradient':
        'linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)',
    },
    boxShadow: {
      primary: 'rgb(80 63 205 / 50%) 0px 1px 40px',
    },
  },
  plugins: [],
};
