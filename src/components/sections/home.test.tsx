import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/helpers'

import HomeSection from './home'

jest.mock('next/navigation', () => ({
  useSearchParams() {
    return {
      get: () => null
    }
  }
}))

describe('<HomeSection />', () => {
  it('should render the heading', async () => {
    renderWithTheme(<HomeSection />)

    expect(
      await screen.findByRole('heading', { name: /Buzz/i })
    ).toBeInTheDocument()
  })
})
