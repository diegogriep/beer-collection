import styled from 'styled-components'
import { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    color: #000;
    padding: ${theme.spacings.small};

    h1 {
      font-size: ${theme.font.sizes.large};
      text-transform: uppercase;
    }

    h2 {
      font-size: ${theme.font.sizes.small};
    }

    h3, h4 {
      padding-top: ${theme.spacings.xsmall};
      text-transform: uppercase;
    }

    article {
      padding: ${theme.spacings.xsmall} 0;
      text-align: center;
    }

    section {
      font-size: ${theme.font.sizes.small};
      padding-top: ${theme.spacings.xsmall};
      text-align: left;

      span {
        display: block;
        padding-top: ${theme.spacings.xsmall};

        strong {
          display: block;
          padding-bottom: ${theme.spacings.xsmall};
          text-transform: uppercase;
        }
      }
    }

    a {
      font-size: ${theme.font.sizes.small};
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    ${media.greaterThan('small')`
      article {
        align-items: center;
        column-gap: ${theme.spacings.xsmall};
        display: flex;
        text-align: left;
      }
    `}
  `}
`

export const BoxInformation = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};

    form {
      display: flex;

      button {
        border-radius: 0 ${theme.border.radius} ${theme.border.radius} 0;
      }
    }

    input {
      border: 0;
      border-radius: ${theme.border.radius} 0 0 ${theme.border.radius};
      color: ${theme.colors.mainBg};
      cursor: pointer;
      flex: 1;
      font: ${theme.font.bold} ${theme.font.sizes.xsmall} ${theme.font.family};
      padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
      text-decoration: none;
    }
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `}
`

export const Loading = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.mainBg};
    display: block;
    padding: ${theme.spacings.xxsmall} 0;
  `}
`
