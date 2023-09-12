import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
${({ theme }) => css`
  background: linear-gradient(180deg, #C96E12 0%, #DF8D03 50%);
  border: 0;
  border-radius: ${theme.border.radius};
  color: #fff;
  display: inline-flex;
  cursor: pointer;
  font: ${theme.font.bold} ${theme.font.sizes.medium} ${theme.font.family};
  padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  text-decoration: none;

  &:hover {
    background: linear-gradient(180deg, #DF8D03 0%, #C96E12 50%);
  }
`}
`
