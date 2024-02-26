import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://api.punkapi.com/v2/beers', () => {
    return HttpResponse.json([
      {
        id: 1,
        name: 'AB:20'
      },
      {
        id: 2,
        name: 'Brahma'
      }
    ])
  }),

  http.get('https://api.punkapi.com/v2/beers/random', () => {
    return HttpResponse.json({
      id: 1,
      name: 'AB:20'
    })
  })
]
