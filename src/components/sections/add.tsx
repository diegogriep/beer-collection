'use client'

import { getData } from '@/utils/getData'
import { setStorageItem } from '@/utils/localStorage'
import { useRouter } from 'next/navigation'
import { useState, FormEvent } from 'react'
import { BeerProps } from '../BeerCard'
import Button from '../Button'

import * as S from '@/components/BeerDetail/styles'

export default function AddSection() {
  const [value, setValue] = useState({
    name: ''
  })
  const [bottle, setBottle] = useState<BeerProps>()
  const [loading, setLoading] = useState(false)

  const getRandomBeer = async () => {
    setLoading(true)
    const [beer] = await getData('', 0, true)
    setValue(beer)
    setBottle(beer)
    setLoading(false)
    return
  }
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue({ name: e.currentTarget.value })
  }

  const { push } = useRouter()

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const newBottle = { ...bottle, ...value }
    setStorageItem('newBottle', JSON.stringify(newBottle))
    push('/')
  }

  return (
    <S.Wrapper>
      <h1>Add a new bottle</h1>
      <p>Get information from a random beer</p>

      <S.Button onClick={() => getRandomBeer()}>Get the data</S.Button>

      {loading ? <S.Loading>Loading...</S.Loading> : ''}

      {bottle && (
        <S.BoxInformation>
          <h2>You can change the beer name</h2>

          <form onSubmit={onSubmit}>
            <input
              onChange={onChange}
              value={value.name}
              id="beer_name"
              type="text"
              name="beer_name"
              placeholder="What beer are you looking for?"
            />

            <Button type="submit">Send</Button>
          </form>
        </S.BoxInformation>
      )}
    </S.Wrapper>
  )
}
