import { screen } from '@testing-library/react'

import Button from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<Button />', () => {
  it('should render the button', () => {
    renderWithTheme(<Button>Learn more</Button>)

    expect(screen.getByRole('button', { name: /Learn more/i })).toHaveStyle({
      border: 0,
      'font-size': '1.6rem'
    })
  })

  it('should render button as a link', () => {
    renderWithTheme(<Button as='a' href='/learn'>Learn more</Button>)

    expect(screen.getByRole('link', { name: /Learn more/i })).toHaveAttribute(
      'href', '/learn'
    )
  })
})
