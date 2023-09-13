'use client'

import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    gap: ${theme.spacings.xxsmall};
    justify-content: center;
    text-align: center;

    svg {
      height: 5rem;
      transition: transform 0.5s ease-out;
    }

    h1 {
      color: ${theme.colors.primary};
    }

    a {
      text-decoration: none;

      &:hover {
        svg {
          transform: rotate(45deg);
        }
      }
    }

    // mobile
    ${media.lessThan('medium')`
      display: block;
      text-align: center;

      h1 {
        font-size: ${theme.font.sizes.large};
      }
    `}
  `}
`
