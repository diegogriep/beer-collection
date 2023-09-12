import '@testing-library/jest-dom'
import 'jest-styled-components'

jest.mock('next/font/google', () => ({
  Merriweather: () => ({
    style: {
      fontFamily: "mocked",
    },
  }),
}));
