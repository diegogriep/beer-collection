import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: #fff;
    padding-top: ${theme.spacings.xxsmall};

    h4 {
      font-size: ${theme.font.sizes.small};
      padding-bottom: ${theme.spacings.xxsmall};
    }

    form {
      display: flex;
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

    button {
      border-radius: 0 ${theme.border.radius} ${theme.border.radius} 0;
    }

    ${media.greaterThan('small')`
      align-items: center;
      column-gap: ${theme.spacings.small};
      display: flex;
      justify-content: center;
      padding-top: ${theme.spacings.medium};


      h4 {
        padding: 0;
      }

      input {
        flex: none;
        width: 25rem;
      }
    `}
  `}
`
