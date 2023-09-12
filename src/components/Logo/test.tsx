import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the text of the logo with right color', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/Beer evolution/i).nextSibling).toHaveStyle({
      color: '#FAE96F'
    })
  })
})
