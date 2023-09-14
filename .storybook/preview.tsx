import React from 'react'
import { ThemeProvider } from 'styled-components'

import { AppRouterContext } from "next/dist/shared/lib/app-router-context";

import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]

export const parameters = {
  nextjs: {
    appDirectory: true,
  }
}
