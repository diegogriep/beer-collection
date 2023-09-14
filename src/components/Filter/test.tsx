import { screen } from '@testing-library/react'
import { useRouter } from 'next/navigation'

import Filter from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn()
}))


describe('<Filter />', () => {
  it('should render the heading', () => {
    useRouter.mockReturnValue({
      push: jest.fn()
    })

    const { container } = renderWithTheme(<Filter />)

    expect(screen.getByText(/Filter by name/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
