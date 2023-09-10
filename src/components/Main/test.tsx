import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // render the component
    const { container } = render(<Main />)

    // search the element e verify if exists
    expect(
      screen.getByRole('heading', { name: /beer collection/i })
    ).toBeInTheDocument()

    // generate snapshot
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    // render the component
    const { container } = render(<Main />)

    // verify if background color is correct
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
