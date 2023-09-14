import { getStorageItem, setStorageItem } from '.'

describe('getStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should return the item from localStorage', () => {
    window.localStorage.setItem(
      'newBottle',
      JSON.stringify(['1', '2'])
    )

    expect(getStorageItem('newBottle')).toStrictEqual(['1', '2'])
  })
})

describe('setStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should add the item to localStorage', () => {
    setStorageItem('newBottle', '1')

    expect(window.localStorage.getItem('newBottle')).toStrictEqual(
      JSON.stringify('1')
    )
  })
})
