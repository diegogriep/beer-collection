'use client'

import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    gap: ${theme.spacings.xxsmall};
    justify-content: center;

    svg {
      height: 5rem;
      pointer-events: none;
      transition: transform 0.5s ease-out;

      &:hover {
        transform: rotate(45deg);
      }
    }

    h1 {
      color: ${theme.colors.primary};
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
