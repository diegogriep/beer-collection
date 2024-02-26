import '@testing-library/jest-dom'
import 'jest-styled-components'
import 'whatwg-fetch'

jest.mock('next/font/google', () => ({
  Merriweather: () => ({
    style: {
      fontFamily: 'mocked'
    }
  })
}))
