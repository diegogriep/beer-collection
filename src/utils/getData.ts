export const API_URL = 'https://api.punkapi.com/v2/beers'

export async function getData(id?: number) {
  const url = id ? `${API_URL}/${id}` : API_URL
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
