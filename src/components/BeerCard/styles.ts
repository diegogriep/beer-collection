import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    color: #000;
    padding: ${theme.spacings.small};
    width: 100%;

    h1 {
      font-size: ${theme.font.sizes.large};
      text-transform: uppercase;
    }

    h2 {
      font-size: ${theme.font.sizes.small};
    }

    div {
      column-gap: ${theme.spacings.xsmall};
      display: flex;
      padding: ${theme.spacings.xsmall} 0;
    }

    p {
      font-size: ${theme.font.sizes.small};
    }

    a {
      font-size: ${theme.font.sizes.small};
    }

    ${media.greaterThan('small')`
      width: 29rem;
    `}
  `}
`
