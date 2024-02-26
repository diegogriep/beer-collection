import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/helpers'

import AddSection from './add'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null
    }
  }
}))

describe('<AddSection />', () => {
  it('should render the heading', () => {
    renderWithTheme(<AddSection />)

    expect(
      screen.getByRole('heading', { name: /Add a new bottle/i })
    ).toBeInTheDocument()
  })

  it('should get a random data', async () => {
    renderWithTheme(<AddSection />)

    fireEvent.click(screen.getByText('Get the data'))
    expect(
      await screen.findByRole('heading', {
        name: /You can change the beer name/i
      })
    ).toBeInTheDocument()
  })
})
