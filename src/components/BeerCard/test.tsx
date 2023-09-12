import { screen } from '@testing-library/react'

import BeerCard from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

import beer from './mock'

describe('<BeerCard />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<BeerCard {...beer} />)

    expect(screen.getByRole('heading', { name: /Buzz/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
