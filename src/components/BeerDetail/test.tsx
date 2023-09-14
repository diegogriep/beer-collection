import { screen } from '@testing-library/react'

import BeerDetail from '.'
import { renderWithTheme } from '../../utils/tests/helpers'
import beer from '../BeerCard/mock'

describe('<BeerDetail />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<BeerDetail {...beer[0]} />)

    expect(screen.getByRole('heading', { name: /yeast: Wyeast 1056 - American Ale™/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
