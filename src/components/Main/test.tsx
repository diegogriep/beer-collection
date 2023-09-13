import { screen } from '@testing-library/react'
import Main from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<Main />', () => {
  it('should render the heading', () => {
    // render the component
    const { container } = renderWithTheme(<Main>Hello</Main>)

    // search the element e verify if exists
    expect(
      screen.getByRole('heading', { name: /beer collection/i })
    ).toBeInTheDocument()

    // generate snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
