import { render, screen } from '@testing-library/react'

import NewComponent from '.'

describe('<NewComponent />', () => {
  it('should render the heading', () => {
    const { container } = render(<NewComponent />)

    expect(
      screen.getByRole('heading', { name: /NewComponent/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
