'use client'

import { css, styled } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;

    header, footer {
      padding: ${theme.spacings.large};
    }

    footer {
      color: #fff;
      text-align: center;
    }
  `}
`

export const WrapperItems = styled.div`
  ${({ theme }) => css`
    column-gap: ${theme.spacings.small};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: ${theme.spacings.small};
  `}
`
