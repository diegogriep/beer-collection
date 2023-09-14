import { screen } from '@testing-library/react'

import Filter from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn()
}))

describe('<Filter />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Filter />)

    expect(screen.getByText(/Filter by name/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
