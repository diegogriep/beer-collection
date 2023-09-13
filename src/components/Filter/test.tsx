import { render, screen } from '@testing-library/react'

import Filter from '.'

describe('<Filter />', () => {
  it('should render the heading', () => {
    const { container } = render(<Filter />)

    expect(screen.getByRole('heading', { name: /Filter/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
