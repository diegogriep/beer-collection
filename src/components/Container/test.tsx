import { Container } from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Container />)

    expect(container.firstChild).toHaveStyleRule('max-width', '130rem')
  })
})
