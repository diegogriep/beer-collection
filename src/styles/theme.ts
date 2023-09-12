import { Merriweather } from 'next/font/google'

export const merriweatherFont = Merriweather({
  weight: ['300', '400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family: `${merriweatherFont.style.fontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`,
    light: 300,
    normal: 400,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem'
    }
  },
  colors: { // inspired by https://www.schemecolor.com/chilled-beer-colors.php
    primary: '#FAE96F',
    secondary: '#FFF897',
    mainBg: '#C96E12'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  }
} as const
