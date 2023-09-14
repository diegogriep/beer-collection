import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: #fff;
    padding-top: ${theme.spacings.xxsmall};

    > a {
      color: #fff;
      display: block;
      font-size: ${theme.font.sizes.xsmall};
      position: absolute;
      right: ${theme.spacings.xxsmall};
      top: ${theme.spacings.xxsmall};
    }

    form {
      display: flex;

      button {
        border-radius: 0 ${theme.border.radius} ${theme.border.radius} 0;
      }
    }

    label {
      display: none;
      font-size: ${theme.font.sizes.xsmall};
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

    ${media.greaterThan('small')`
      align-items: center;
      column-gap: ${theme.spacings.small};
      display: flex;
      justify-content: center;
      padding-top: ${theme.spacings.medium};

      label {
        line-height: 3.4rem;
        padding-right: ${theme.spacings.xsmall};
      }

      input {
        flex: none;
        width: 25rem;
      }
    `}
  `}
`
