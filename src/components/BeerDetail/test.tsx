import { render, screen } from '@testing-library/react'

import BeerDetail from '.'

describe('<BeerDetail />', () => {
  it('should render the heading', () => {
    const { container } = render(<BeerDetail />)

    expect(screen.getByRole('heading', { name: /BeerDetail/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
