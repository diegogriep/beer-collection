'use client'

import StyledComponentsRegistry from '@/lib/registry'

import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'
import { ThemeProvider } from 'styled-components'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
