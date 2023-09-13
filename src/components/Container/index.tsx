'use client'

import { css, styled } from "styled-components";

export const Container = styled.main`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding-left: ${theme.grid.gutter};
    padding-right: ${theme.grid.gutter};
  `}

`
