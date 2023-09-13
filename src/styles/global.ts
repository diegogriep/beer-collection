'use client'
import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialised;
    -moz-osx-font-smoothing: antialised;

    &::after,
    &::before {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%; // 1rem = 10px == 10/16px = 62.5%
  }

  html, body {
    height: 100%;
  }

  ${({ theme }) => css`
    body {
      background-color: ${theme.colors.mainBg};
      font: ${theme.font.sizes.medium} ${theme.font.family};
    }
  `}
`

export default GlobalStyles
